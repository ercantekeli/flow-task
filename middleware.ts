import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // 1. Yanıt nesnesini oluşturuyoruz
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  // 2. Çerez köprüsüyle Supabase istemcisini kuruyoruz
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          response = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  // 3. Kullanıcıyı sunucu tarafında güvenle doğruluyoruz
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;

  // 4. Korumalı Rotalar ve Yönlendirme Mantığı

  // Kullanıcı Giriş YAPMAMIŞSA ve Korumalı Bir Sayfaya Gitmeye Çalışıyorsa:
  if (!user && pathname.startsWith("/overview")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Kullanıcı ZATEN Giriş YAPMIŞSA ve Login/Register Sayfasına Gitmeye Çalışıyorsa:
  if (user && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/overview", request.url));
  }

  return response;
}

// Middleware'in hangi rotalarda çalışacağını belirtiyoruz
export const config = {
  matcher: ["/overview/:path*", "/login", "/register"],
};
