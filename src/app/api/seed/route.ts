import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
    await prisma.todo.deleteMany();
    await prisma.todo.createMany({
    data: [
      { description: "Pagar la luz", complete: true },
      { description: "Pagar la luz 2" },
      { description: "Pagar la luz 3" },
      { description: "Pagar la luz 4" },
    ],
  });

  return NextResponse.json({ message: "seeddddddd" });
}
