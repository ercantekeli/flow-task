"use client";

import React from "react";
import { usePathname } from "next/navigation";

import Sidebar from "@/components/overview/layout/Sidebar";
import Header from "@/components/overview/layout/Header";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();

  const headerContent: { [key: string]: { title: string; subtitle: string } } =
    {
      "/overview": {
        title: "Good morning, Ercan 👋",
        subtitle: "Here's what's happening with your projects today.",
      },
      "/board": {
        title: "Board",
        subtitle: "3 columns · 7 tasks",
      },
      "/settings": {
        title: "Settings",
        subtitle: "Customize your dashboard and preferences.",
      },
    };

  return (
    <div className="flex w-full h-full p-8 gap-8">
      <Sidebar />
      <main className="w-full flex flex-col gap-8">
        <Header
          title={headerContent[pathname]?.title || ""}
          subtitle={headerContent[pathname]?.subtitle || ""}
        />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
