"use client";
import { createContext, useEffect, useState, useMemo } from "react";

import { supabase } from "@/lib/supabase";

export type User = {
  avatar_url?: string;
  email: string;
  email_verified: boolean;
  full_name: string;
  iss?: string;
  name: string;
  phone_verified?: boolean;
  picture?: string;
  provider_id?: string;
  sub?: string;
};

export type AuthContextType = {
  user: User | null;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("session :>> ", session);
      setUser((session?.user?.user_metadata as User) ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const value = useMemo(() => ({ user }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
