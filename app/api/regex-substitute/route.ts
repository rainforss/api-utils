import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { searchString, regexPattern, regexFlags, replaceString } =
    await req.json();
  if (!searchString || !regexPattern || !!regexFlags || !replaceString) {
    return NextResponse.json(
      {
        error:
          "Missing parameters. Required parameters are 'searchString', 'regexPattern', 'regexFlags' and 'replaceString'",
      },
      { status: 400 }
    );
  }
  let re = new RegExp(regexPattern, regexFlags);

  return NextResponse.json({ result: searchString.replace(re, replaceString) });
}
