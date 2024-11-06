import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    await prisma.todo.deleteMany();
    await prisma.todo.createMany({
    data: [
      { description: "Estudiar NextJS", complete: true },
      { description: "Repasar React" },
      { description: "Practicar NextJS" },
      { description: "Aprender NodeJS" },
    ],
  });

  return NextResponse.json({ message: "Seed created" });
}
