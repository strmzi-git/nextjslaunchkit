import NextAuth, { Account, AuthOptions, Profile, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import stripePackage from "stripe";

interface NextAuthUserWithStringId extends User {
  id: string;
}
const prisma = new PrismaClient();
const stripe = new stripePackage(
  process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string
);
interface NextAuthUserWithStringId extends User {
  id: string;
}
export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
          githubUsername: profile.login,
        } as NextAuthUserWithStringId;
      },
    }),

    // Other code...

    // GithubProvider({
    //   clientId: process.env.GITHUB_ID as string,
    //   clientSecret: process.env.GITHUB_SECRET as string,
    // }),
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
  //   async signIn({
  //     user,
  //     account,
  //     profile,
  //     email,
  //     credentials,
  //   }: {
  //     user: User;
  //     account: Account;
  //     profile: Profile;
  //     email: any;
  //     credentials: Credential;
  //   }) {
  //     if (account.provider === "github") {
  //       // Assuming the GitHub username is in profile.username
  //       // user.githubUsername = profile.username;
  //     }

  //     return true;
  //   },
  // },
  events: {
    createUser: async (user) => {
      const userEmail = user.user.email as string;
      try {
        // Customer is logging in for the first time since customer object does not exist yet.
        // Make existing customer
        const stripeCustomer = await stripe.customers.create({
          email: userEmail,
        });
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
        console.log(dbResponse);
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
