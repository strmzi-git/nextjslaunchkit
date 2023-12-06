import { withAuth } from "next-auth/middleware";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req) {
    console.log(req.nextauth.token);
    const userEmail = req.nextauth.token?.email as string;
    if (!userEmail) {
      return NextResponse.redirect("http://localhost:3000");
    }
    console.log("Reached here");
    try {
      const currentUser = await prisma.user.findUnique({
        where: { email: userEmail },
      });
      console.log(currentUser);
      if (
        !currentUser ||
        !currentUser.verifiedPayment ||
        currentUser.boilercodeCollected
      ) {
        return NextResponse.redirect("http://localhost:3000");
      }
    } catch (err: any) {
      console.log("Error mesg:", err);
    }
  },
  {
    callbacks: {
      authorized: async ({ token }) => {
        if (!token?.email) {
          return false;
        } else {
          console.log(token.email);
          const currentUser = await prisma.user.findUnique({
            where: { email: token.email },
          });
          console.log("Current user:", currentUser);
          return true;
        }
      },
    },
  }
);

export const config = { matcher: ["/checkout-success"] };
