import { createClient } from "@/lib/supabaseServer";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  console.log("request :>> ", request);
  const code = new URL(request.url).searchParams.get("code");
  const origin = new URL(request.url).origin;
  const supabase = await createClient();
  await supabase.auth.exchangeCodeForSession(code!);
  return NextResponse.redirect(`${origin}/overview`);
}
