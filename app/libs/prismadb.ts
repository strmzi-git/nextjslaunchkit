import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

// Create a new Prisma Client instance with Accelerate extension
const prisma = new PrismaClient().$extends(withAccelerate());

export default prisma;
