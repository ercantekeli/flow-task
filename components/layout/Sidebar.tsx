"use client";

import React, { useState } from "react";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";

import IconButton from "../IconButton";

const Sidebar = () => {
  const [icons, setIcons] = useState([
    { id: 1, icon: <IoHomeOutline />, isActive: false },
    { id: 2, icon: <RxDashboard />, isActive: true },
    { id: 3, icon: <IoSettingsOutline />, isActive: false },
  ]);

  const navIcons = icons.filter((item) => item.id !== 3);
  const bottomIcons = icons.filter((item) => item.id === 3);

  const handleButtonClick = (id: number) => {
    setIcons((prevIcons) =>
      prevIcons.map((icon) => ({
        ...icon,
        isActive: icon.id === id,
      })),
    );
  };

  return (
    <aside className="bg-sidebar w-18 h-full rounded-20 p-2 border border-border border-solid">
      <nav className="flex flex-col items-center justify-between h-full">
        <div className="flex flex-col gap-2 ">
          {navIcons.map((item, index) => (
            <IconButton
              key={index}
              isActive={item.isActive}
              onClick={() => handleButtonClick(item.id)}
            >
              {item.icon}
            </IconButton>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {bottomIcons.map((item, index) => (
            <IconButton
              key={index}
              isActive={item.isActive}
              onClick={() => handleButtonClick(item.id)}
            >
              {item.icon}
            </IconButton>
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
