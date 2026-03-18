"use client";

import React, { useState } from "react";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";

import IconButton from "../../IconButton";
import Link from "next/link";

const Sidebar = () => {
  const [icons, setIcons] = useState([
    { id: 1, icon: <IoHomeOutline />, isActive: true, path: "/overview" },
    { id: 2, icon: <RxDashboard />, isActive: false, path: "/board" },
    { id: 3, icon: <IoSettingsOutline />, isActive: false, path: "/settings" },
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
      <nav className="h-full">
        <ul className="h-full flex flex-col items-center justify-between">
          <div className="flex flex-col gap-2 ">
            {navIcons.map((item, index) => (
              <li key={index}>
                <Link href={item.path}>
                  <IconButton
                    key={index}
                    className="w-12 h-12"
                    isActive={item.isActive}
                    onClick={() => handleButtonClick(item.id)}
                  >
                    {item.icon}
                  </IconButton>
                </Link>
              </li>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {bottomIcons.map((item, index) => (
              <li key={index}>
                <Link href={item.path}>
                  <IconButton
                    key={index}
                    className="w-12 h-12"
                    isActive={item.isActive}
                    onClick={() => handleButtonClick(item.id)}
                  >
                    {item.icon}
                  </IconButton>
                </Link>
              </li>
            ))}
          </div>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
