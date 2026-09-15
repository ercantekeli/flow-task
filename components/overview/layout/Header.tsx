import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";

import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import Select from "@/components/Select";
import DateInput from "@/components/DateInput";
import { TagSelect } from "@/components/TagSelect";
import { PrioritySelect } from "@/components/PrioritySelect";

const Header = ({
  title = "",
  subtitle = "",
}: {
  title?: string;
  subtitle: string;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const columnOptions = [
    { value: "option1", label: "To Do" },
    { value: "option2", label: "In Progress" },
    { value: "option3", label: "Done" },
  ];
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
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)} title="Add New Task">
          <div>
            <Input
              type="text"
              placeholder="e.g. Design landing page…"
              label="TASK NAME"
            />
            <Textarea placeholder="Optional description…" label="DESCRIPTION" />

            <div className="grid grid-cols-2 gap-4">
              <Select label="COLUMN" options={columnOptions} />
              <DateInput label="DUE DATE" placeholder="Select a date" />
            </div>
            <TagSelect />
            <PrioritySelect />
            <div className="flex items-center justify-end gap-4 mt-6">
              <Button
                name="Cancel"
                style="white"
                onClick={() => setIsModalOpen(false)}
              />

              <Button
                name="Add Task"
                style="purple"
                className=""
                icon={<AiOutlinePlus />}
              />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Header;
