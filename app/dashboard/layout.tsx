import React from "react";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="w-full h-full p-4">{children}</div>;
};

export default DashboardLayout;
