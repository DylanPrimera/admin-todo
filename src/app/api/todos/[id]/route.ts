import prisma from "@/lib/prisma";
import * as yup from "yup";
import { NextResponse } from "next/server";
import { Todo } from "@prisma/client";

interface Segments {
  params: {
    id: string;
  };
}

const getTodo = async (id: string): Promise<Todo | null> => {
  const todo = await prisma.todo.findFirst({
    where: {
      id: id,
    },
  });
  return todo;
};

export async function GET(request: Request, {params}: Segments) {

  const todo = await getTodo(params.id)

  if (!todo) {
    return NextResponse.json(
      { message: "todo not found", success: false },
      { status: 404 }
    );
  }

  return NextResponse.json({ success: true, data: todo });
}

const putSchema = yup.object({
  description: yup.string().optional(),
  complete: yup.boolean().optional(),
});

export async function PUT(request: Request, {params}: Segments) {

  const todo = getTodo(params.id)

  if (!todo) {
    return NextResponse.json(
      { message: "todo not found", success: false },
      { status: 404 }
    );
  }
  try {
    const { description, complete } = await putSchema.validate(
      await request.json()
    );

    const updatedTodo = await prisma.todo.update({
      where: {
        id: params.id,
      },
      data: { description, complete },
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
