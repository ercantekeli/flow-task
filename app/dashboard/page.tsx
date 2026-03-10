import React from "react";
import Sidebar from "../../components/dashboard/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex h-full w-full gap-2">
      <Sidebar />
      <main className="flex-1 rounded-3xl bg-amber-300">main</main>
    </div>
  );
};

export default Dashboard;
