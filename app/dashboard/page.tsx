import React from "react";
import Sidebar from "../../components/dashboard/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex w-full h-full">
      <Sidebar />
      <main className="w-[95%] h-full rounded-3xl ml-4">main</main>
    </div>
  );
};

export default Dashboard;
