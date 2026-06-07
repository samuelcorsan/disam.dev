import { NextRequest, NextResponse } from "next/server";

const PRODUCTION_MINIMUM_VERSION = "1.1.0";
const DEV_MINIMUM_VERSION = "1.0.0";

/** Numeric Apple ID from App Store Connect — set after first publish (e.g. 6752243497). */
const IOS_APP_STORE_ID: string | null = null;

function parseIsDev(request: NextRequest): boolean {
  const value = request.nextUrl.searchParams.get("isDev");
  return value === "true" || value === "1";
}

export async function GET(request: NextRequest) {
  const minimumVersion = parseIsDev(request)
    ? DEV_MINIMUM_VERSION
    : PRODUCTION_MINIMUM_VERSION;

  return NextResponse.json({
    minimumVersion,
    iosAppStoreId: IOS_APP_STORE_ID,
  });
}
