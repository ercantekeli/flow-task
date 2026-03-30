import React from "react";
import Logo from "@/components/Logo";
import IconBox from "@/components/login/IconBox";

function Login() {
  return (
    <div className="flex h-full bg-login-background w-full">
      <div className="bg-login-left-bg flex-1 h-full px-14 py-16 flex flex-col justify-between">
        <Logo />
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
      <div className="bg-border">tü</div>
    </div>
  );
}

export default Login;
