// app/api/weather/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    key: process.env.NEXT_WEATHER_API,
  });
}
