import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    return NextResponse.json({
      "hey":'bcbdb',
    });
  } catch (error) {
    return NextResponse.json({
      error,
    });
  }
};
