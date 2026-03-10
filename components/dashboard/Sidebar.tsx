import React from "react";
import { IoHomeOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <aside className="bg-sidebar w-16 h-full rounded-3xl p-2">
      <div className="flex flex-col items-center justify-center">
        <IoHomeOutline className=" w-8 h-8" />
      </div>
    </aside>
  );
};

export default Sidebar;
