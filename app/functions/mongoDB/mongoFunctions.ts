import prisma from "@/app/libs/prismadb";

export const handleEmailSignUpSubmit = async function (
  email: string,
  password: string
) {
  if (!email || !password) return;
  if (!email.includes("@")) return; // Invalid email
  try {
    const createUserResponse = await prisma.user.create;
  } catch (err: any) {
    console.log("error");
  }
};
