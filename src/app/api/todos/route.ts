import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import * as yup from "yup";



export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const take = +(searchParams.get("take") ?? "10");
  const skip = +(searchParams.get("skip") ?? "0");
  if (isNaN(take)) {
    return NextResponse.json(
      { message: "invalid take param" },
      { status: 400 }
    );
  }
  if (isNaN(skip)) {
    return NextResponse.json(
      { message: "invalid skip param", success: false },
      { status: 400 }
    );
  }
  const todos = await prisma.todo.findMany({
    take: take,
    skip: skip,
    where: {
      userId: '1',
    },
  });
  return NextResponse.json({ success: true, data: todos });
}

const postSchema = yup.object({
  description: yup.string().required(),
  complete: yup.boolean().optional().default(false),
});

export async function POST(request: Request) {
  try {
    const body = await postSchema.validate(await request.json());

    const todo = await prisma.todo.create({
      data: body,
    });
    return NextResponse.json({ success: true, data: todo });
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return NextResponse.json(
        { success: false, error: error.errors },
        { status: 400 }
      );
    } else {
      return NextResponse.json(
        { success: false, error: "Unexpected erorr" },
        { status: 400 }
      );
    }
  }
}

export async function DELETE() {
  try {
    await prisma.todo.deleteMany({ where: { complete: true } });
    return NextResponse.json({ success: true, message: "Todos deleted" });
  } catch (error) {
    console.error("Error deleting todos:", error);
    return NextResponse.json({
      success: false,
      status: 400,
      message: "Failed to delete todos",
    });
  }
}
