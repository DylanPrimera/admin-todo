import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function GET() {
  await prisma.todo.deleteMany();
  await prisma.user.deleteMany();

  const user = await prisma.user.create({
    data: {
      email: "test2@google.com",
      password: bcrypt.hashSync("123456"),
      roles: ["admin"],
      name: "Test User",
      todos: {
        create: [
          { description: "Estudiar NextJS", complete: true },
          { description: "Repasar React" },
          { description: "Practicar NextJS" },
          { description: "Aprender NodeJS" },
        ],
      },
    },
  });
  return NextResponse.json({ message: "Seed created" });
}
