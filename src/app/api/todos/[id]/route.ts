import prisma from "@/lib/prisma";
import * as yup from "yup";
import { NextResponse } from "next/server";

interface Segments {
  params: {
    id: string;
  };
}

export async function GET(request: Request, segments: Segments) {
  const { params } = segments;
  const id = params.id;

  const todo = await prisma.todo.findFirst({
    where: {
      id: id,
    },
  });

  if (!todo) {
    return NextResponse.json(
      { message: "todo not found", success: false },
      { status: 404 }
    );
  }

  return NextResponse.json({ success: true, data: todo });
}

const postSchema = yup.object({
  description: yup.string().optional(),
  complete: yup.boolean().optional(),
});

export async function PUT(request: Request, segments: Segments) {
  try {
    const { params } = segments;
    const id = params.id;

    const todo = await prisma.todo.findFirst({
      where: {
        id: id,
      },
    });

    if (!todo) {
      return NextResponse.json(
        { message: "todo not found", success: false },
        { status: 404 }
      );
    }

    const body = await postSchema.validate(await request.json());

    const updatedTodo = await prisma.todo.update({
      where: {
        id: id,
      },
      data: body,
    });
    return NextResponse.json({ success: true, data: updatedTodo });
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
