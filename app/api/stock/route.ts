import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const data = await prisma.stock.findMany();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({
      error,
    });
  }
};
