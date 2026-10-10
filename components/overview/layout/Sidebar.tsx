"use client";

import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import {
  HiOutlineLogout,
  HiOutlineHome,
  HiOutlineClipboardList,
} from "react-icons/hi";
import { AuthContext } from "@/context/authContext";
import IconButton from "../../IconButton";
import Link from "next/link";
import { signOut } from "@/services/authService";

const Sidebar = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const [icons, setIcons] = useState([
    {
      id: 1,
      icon: <HiOutlineHome />,
      isActive: true,
      path: "/overview",
      isBottom: false,
    },
    {
      id: 2,
      icon: <HiOutlineClipboardList />,
      isActive: false,
      path: "/board",
      isBottom: false,
    },
    {
      id: 3,
      icon: <MdOutlineSettings />,
      isActive: false,
      path: "/settings",
      isBottom: true,
    },
    {
      id: 4,
      icon: <HiOutlineLogout />,
      isActive: false,
      path: "#",
      isBottom: true,
    },
  ]);

  const navIcons = icons.filter((item) => item.isBottom === false);
  const bottomIcons = icons.filter((item) => item.isBottom === true);

  const handleButtonClick = (id: number) => {
    if (id === 4) {
      (async () => {
        const { error } = await signOut();
        if (error) {
          toast.error("Error signing out:", error.message);
        } else {
          router.push("/login");
        }
      })();
    }
    setIcons((prevIcons) =>
      prevIcons.map((icon) => ({
        ...icon,
        isActive: icon.id === id,
      })),
    );
  };

  console.log("user :>> ", user);

  return (
    <aside className="bg-sidebar w-18 h-full rounded-20 p-2 border border-border border-solid">
      <nav className="h-full">
        <ul className="h-full flex flex-col items-center justify-between">
          <div className="flex flex-col gap-2 ">
            <>
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                {user?.full_name &&
                  user?.full_name
                    .split(" ")
                    ?.map((item: string) => item[0]?.toUpperCase())
                    ?.join("")}
              </div>
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
            </>
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
