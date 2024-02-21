import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();

  if (body.email === 'cheryiong62@gmail.com') {
    return NextResponse.json({
      data: body,
    });
  }

  return NextResponse.json({
    data: null,
  });
}
