import prisma from "@/app/libs/prismadb";
import axios from "axios";

// export const handleEmailSignUpSubmit = async function (
//   email: string,
//   password: string
// ) {
//   if (!email || !password) return;
//   if (!email.includes("@")) return; // Invalid email
//   try {
//     const createUserResponse = await prisma.user.create;
//   } catch (err: any) {
//     console.log("error");
//   }
// };

export const handleNewLead = async function (email: string) {
  if (!email) return;
  document.getElementById("email-signup-input")?.focus();
  try {
    await axios.post("/api/addLead", { email });
    return { status: 201, message: "Successfully added user to email list" };
  } catch (err: any) {
    return { status: err.status, message: "Failed to sign up user" };
  }
};
