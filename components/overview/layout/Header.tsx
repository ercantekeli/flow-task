import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";

import Button from "@/components/Button";

const Header = ({
  title = "",
  subtitle = "",
}: {
  title?: string;
  subtitle: string;
}) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-text text-3xl font-bold">{title}</h1>
        <p className="text-text-muted text-sm">{subtitle}</p>
      </div>
      <div className="flex items-center gap-2">
        <Button name="Search" style="white" icon={<IoIosSearch />} />
        <Button name="Add Task" style="purple" icon={<AiOutlinePlus />} />
      </div>
    </div>
  );
};

export default Header;
