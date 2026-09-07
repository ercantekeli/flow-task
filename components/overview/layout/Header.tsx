import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";

import Button from "@/components/Button";
import Modal from "@/components/Modal";

const Header = ({
  title = "",
  subtitle = "",
}: {
  title?: string;
  subtitle: string;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-text text-3xl font-bold">{title}</h1>
          <p className="text-text-muted text-sm">{subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button name="Search" style="white" icon={<IoIosSearch />} />
          <Button
            onClick={() => setIsModalOpen(true)}
            name="Add Task"
            style="purple"
            icon={<AiOutlinePlus />}
          />
        </div>
      </div>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Header;
