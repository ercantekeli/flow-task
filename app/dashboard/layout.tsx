import React from "react";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="w-[98%] h-[94%]">{children}</div>;
};

export default DashboardLayout;
