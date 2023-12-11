import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

// Creates a new Prisma Client instance with Accelerate extension. (Recommended to use in production)
const prisma = new PrismaClient().$extends(withAccelerate());

export default prisma;
