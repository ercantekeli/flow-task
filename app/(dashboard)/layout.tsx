import React from "react";
import Sidebar from "../../components/dashboard/layout/Sidebar";
import Header from "@/components/dashboard/layout/Header";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex w-full h-full p-4 gap-2">
      <Sidebar />
      <main className="w-full">
        <Header />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
