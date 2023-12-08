import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import stripePackage from "stripe";

const prisma = new PrismaClient();
const stripe = new stripePackage(
  process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string
);

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID as string,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    // }),
    // CredentialsProvider({
    //   name: "credentials",
    //   credentials: {
    //     email: { label: "email", type: "text" },
    //     password: { label: "password", type: "password" },
    //   },
    //   async authorize(credentials) {
    //     if (!credentials?.email || !credentials?.password) {
    //       throw new Error("Invalid credentials");
    //     }
    //     const user = await prisma.user.findUnique({
    //       where: {
    //         email: credentials.email,
    //       },
    //     });
    //     if (!user || !user?.hashedPassword) {
    //       throw new Error("Invalid credentials");
    //     }
    //     const isCorrectPassword = await bcrypt.compare(
    //       credentials.password,
    //       user.hashedPassword
    //     );
    //     if (!isCorrectPassword) {
    //       throw new Error("Invalid credentials");
    //     }
    //     return user;
    //   },
    // }),
  ],
  // callbacks: {
  //   async signIn({ user, account, profile, email, credentials }) {
  //     const userEmail = user.email;

  //     if (userEmail) {
  //       try {
  //         // Check if customer already exists
  //         const existingCustomer = await stripe.customers.list({
  //           email: userEmail,
  //         });
  //         console.log(existingCustomer);
  //         //   Customer object for this customer already exists (not logging in for the first time)
  //         if (existingCustomer.data.length !== 0) return true;

  //         //   Customer is logging in for the first time since customer object does not exist yet.
  //         //   Make existing customer
  //         const stripeCustomer = await stripe.customers.create({
  //           email: userEmail,
  //         });
  //         console.log(stripeCustomer);
  //         // Save the customerId to the appropriate customer in your DB so we can ask
  //         // for their permission to add them to our email list for promotional email
  //         // during checkout
  //         const dbResponse = await prisma.user.update({
  //           where: {
  //             email: userEmail,
  //           },
  //           data: {
  //             stripeCustomerId: stripeCustomer.id,
  //           },
  //         });
  //         console.log(dbResponse);
  //       } catch (err) {
  //         console.log(err);
  //         return true;
  //       }
  //       return true;
  //     }

  //     return true;
  //   },
  // },
  events: {
    createUser: async (user) => {
      console.log("This user has just been created:", user);
      const userEmail = user.user.email as string;
      try {
        // Customer is logging in for the first time since customer object does not exist yet.
        // Make existing customer
        const stripeCustomer = await stripe.customers.create({
          email: userEmail,
        });
        console.log("Customer created:", stripeCustomer);
        // Save the customerId to the appropriate customer in your DB so we can ask
        // for their permission to add them to our email list for promotional email
        // during checkout
        const dbResponse = await prisma.user.update({
          where: {
            email: userEmail,
          },
          data: {
            stripeCustomerId: stripeCustomer.id,
          },
        });

        console.log("Updated customer:", dbResponse);
      } catch (err: any) {
        // Handle error logic
        console.log("Error message", err.message);
      }
    },
  },

  pages: {
    signIn: "/",
  },
  //   debug: process.env.NODE_ENV === "development",
  debug: false,
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
