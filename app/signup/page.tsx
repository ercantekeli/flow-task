"use client";

import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signUpNewUser } from "@/services/authService";
import { useRouter } from "next/navigation";

import Logo from "@/components/Logo";
import IconBox from "@/components/login/IconBox";
import Button from "@/components/Button";
import { FcGoogle } from "react-icons/fc";
import Input from "@/components/Input";
import { toast } from "react-toastify";

function Signup() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const handleFormSubmit = handleSubmit(async (info) => {
    const { data, error } = await signUpNewUser(info);
    if (error) {
      toast.error(error.message);
    }
    if (data) {
      toast.success("Successfully signed up!");
      router.push("/overview");
    }
  });

  watch((data) => {
    console.log(data);
  });

  return (
    <main className="flex h-screen bg-auth-background w-full">
      {/* left */}
      <div className="bg-auth-left-bg flex-1 h-full px-14 py-16 flex flex-col justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <div>
          <h2 className="text-7xl font-bold">
            Start your <span className="text-primary">flow</span> today.
          </h2>
          <p className="text-text-muted mt-4 text-lg">
            Join thousands of teams who manage their work smarter — with
            clarity, speed, and zero clutter.
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
          <h3 className="text-2xl font-bold ">Create your account</h3>
          <p className="text-sm text-text-muted">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary font-semibold cursor-pointer"
            >
              Sign in
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
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-3.5">
          <Input
            type="text"
            label="FULL NAME"
            {...register("full_name", { required: true })}
            placeholder="John Doe"
          />
          <Input
            type="text"
            label="EMAIL ADDRESS"
            {...register("email", { required: true })}
            placeholder="you@example.com"
          />
          <Input
            type="password"
            label="PASSWORD"
            {...register("password", { required: true })}
            placeholder="••••••••"
          />
          <div className="text-xs text-primary font-medium cursor-pointer text-right">
            Forgot your password?
          </div>
          <Button
            name="Create account →"
            className="w-full mt-4"
            variant="purple"
            onClick={handleFormSubmit}
          />
        </form>
        <div className="text-sm text-text-muted text-center">
          By creating an account, you agree to our{" "}
          <span className="text-primary font-semibold cursor-pointer">
            Terms
          </span>{" "}
          and{" "}
          <span className="text-primary font-semibold cursor-pointer">
            Privacy Policy
          </span>
        </div>
      </div>
    </main>
  );
}

export default Signup;
