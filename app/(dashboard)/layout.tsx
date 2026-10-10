"use client";

import React, { useContext } from "react";
import { usePathname } from "next/navigation";
import { AuthContext } from "@/context/authContext";

import Sidebar from "@/components/overview/layout/Sidebar";
import Header from "@/components/overview/layout/Header";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  const { user } = useContext(AuthContext);

  const headerContent: { [key: string]: { title: string; subtitle: string } } =
    {
      "/overview": {
        title:
          "Good morning, " +
          (user?.full_name ? user.full_name.split(" ")[0] : "there") +
          " 👋",
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
    <div className="flex w-full h-screen p-8 gap-8 overflow-hidden">
      <Sidebar />
      <main className="w-full h-full flex flex-col gap-8">
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
