"use client";
import React from "react";
import Logo from "@/components/Logo";
import Link from "next/link";
import IconBox from "@/components/login/IconBox";
import Button from "@/components/Button";
import { FcGoogle } from "react-icons/fc";
import Input from "@/components/Input";
import { signInWithEmail } from "@/services/authService";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function Login() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const handleSignIn = async (info: any) => {
    const { data, error } = await signInWithEmail(info);
    if (error) {
      toast.error(error.message);
    }
    if (data) {
      toast.success("Successfully signed in!");
      router.push("/overview");
    }
  };

  return (
    <main className="flex bg-auth-background w-full h-screen">
      {/* left */}
      <div className="bg-auth-left-bg flex-1 h-full px-14 py-16 flex flex-col justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <div>
          <h2 className="text-7xl font-bold">
            Welcome back. <br />
            Your <span className="text-primary">flow</span> awaits.
          </h2>
          <p className="text-text-muted mt-4 text-lg">
            Pick up right where you left off. Your board, your tasks, your pace.
          </p>
        </div>
        <div className="flex flex-col gap-6 ">
          <div className="flex items-center gap-4">
            <IconBox>🗂</IconBox>
            <span className="text-text-muted font-medium">
              Visual kanban boards
            </span>
          </div>
          <div className="flex items-center gap-4">
            <IconBox>⚡</IconBox>
            <span className="text-text-muted font-medium">
              Drag & drop task management
            </span>
          </div>
          <div className="flex items-center gap-4">
            <IconBox>📊</IconBox>
            <span className="text-text-muted font-medium">
              Progress tracking & insights
            </span>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="bg-border px-10 py-12 w-1/3 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold ">Sign in to FlowTask</h3>
          <p className="text-sm text-text-muted">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-primary font-semibold cursor-pointer"
            >
              Sign up free
            </Link>
          </p>
        </div>
        <div>
          <Button
            name="Continue with Google"
            variant="google"
            className="w-full"
            icon={<FcGoogle />}
          />
        </div>
        <div className="flex items-center gap-3">
          <span className="h-px bg-lightGray flex-1" />
          <span className="text-xs text-text-light font-medium">
            or continue with email
          </span>
          <span className="h-px bg-lightGray flex-1" />
        </div>
        <form className="flex flex-col gap-3.5">
          <Input
            {...register("email")}
            type="text"
            label="EMAIL ADDRESS"
            placeholder="you@example.com"
          />
          <Input
            {...register("password")}
            type="password"
            label="PASSWORD"
            placeholder="••••••••"
          />
          <div className="text-xs text-primary font-medium cursor-pointer text-right">
            Forgot your password?
          </div>
          <Button
            onClick={handleSubmit(handleSignIn)}
            name="Sign in →"
            className="w-full mt-4"
            variant="purple"
          />
        </form>
        <div className="text-sm text-text-muted text-center">
          New to FlowTask?{" "}
          <Link
            href="/signup"
            className="text-primary font-semibold cursor-pointer"
          >
            Create a free account
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Login;
