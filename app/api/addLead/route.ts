import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

interface AddLeadParams {
  leadEmail: string;
}

export async function POST(request: Request) {
  const { leadEmail }: AddLeadParams = await request.json();

  // Check if user already exists
  const user = await prisma.leads.findUnique({
    where: {
      email: leadEmail,
    },
  });
  // handle already signed-up user
  if (user?.email)
    return NextResponse.json({
      message: "This user is already signed up",
    });
  // Sign up user if they don't exist yet
  const dbResponse = await prisma.leads.create({
    data: {
      email: leadEmail,
    },
  });

  return NextResponse.json({
    status: 201,
    message: "User successfully added to email list",
    data: dbResponse,
  });
}
