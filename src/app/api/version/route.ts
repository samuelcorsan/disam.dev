import { NextRequest, NextResponse } from "next/server";

const PRODUCTION_MINIMUM_VERSION = "1.0.0";
const DEV_MINIMUM_VERSION = "1.0.0";

function parseIsDev(request: NextRequest): boolean {
  const value = request.nextUrl.searchParams.get("isDev");
  return value === "true" || value === "1";
}

export async function GET(request: NextRequest) {
  const minimumVersion = parseIsDev(request)
    ? DEV_MINIMUM_VERSION
    : PRODUCTION_MINIMUM_VERSION;

  return NextResponse.json({ minimumVersion });
}
