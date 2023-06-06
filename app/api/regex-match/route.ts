import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { searchString, regexPattern, regexFlags } = await req.json();
  console.log(searchString);
  if (!searchString || !regexPattern || !regexFlags) {
    return NextResponse.json(
      {
        error:
          "Missing parameters. Required parameters are 'searchString', 'regexPattern' and 'regexFlags'",
      },
      { status: 400 }
    );
  }
  let matches: Array<string> = [];
  let re = new RegExp(regexPattern, regexFlags);
  let matchArray: Array<string> = searchString.match(re);
  if (matchArray) {
    matchArray.forEach((e) => {
      matches.push(e);
    });
  }

  return NextResponse.json({ result: matches[0] });
}
