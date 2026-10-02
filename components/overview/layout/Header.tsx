import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { useForm, Controller } from "react-hook-form";

import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import Select from "@/components/Select";
import DateInput from "@/components/DateInput";
import TagSelect from "@/components/TagSelect";
import PrioritySelect from "@/components/PrioritySelect";
import { createTask } from "@/services/boardService";

type Inputs = {
  title: string;
  description: string;
  column_id: string;
  due_date: string;
  tags: { id: number; name: string; color: string }[];
  priority: { id: 1; name: string; color: string };
};

const Header = ({
  title = "",
  subtitle = "",
}: {
  title?: string;
  subtitle: string;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const columnOptions = [
    { value: 1, label: "To Do" },
    { value: 2, label: "In Progress" },
    { value: 3, label: "Done" },
  ];

  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = async (data: Inputs) => {
    console.log("RHF'in bana getirdiği form verisi:", data);
    try {
      await createTask(data);
      setIsModalOpen(false);
    } catch (error) {
      // console.log(error);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    reset();
  };

  const formValues = watch();
  console.log(formValues);

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-text text-3xl font-bold">{title}</h1>
          <p className="text-text-muted text-sm">{subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button name="Search" variant="white" icon={<IoIosSearch />} />
          <Button
            onClick={() => setIsModalOpen(true)}
            name="Add Task"
            variant="purple"
            icon={<AiOutlinePlus />}
          />
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={handleModalClose} title="Add New Task">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register("title", { required: true })}
              type="text"
              placeholder="e.g. Design landing page…"
              label="TASK NAME"
            />
            <Textarea
              {...register("description")}
              placeholder="Optional description…"
              label="DESCRIPTION"
            />

            <div className="grid grid-cols-2 gap-4">
              <Select
                {...register("column_id", { required: true })}
                label="COLUMN"
                options={columnOptions}
              />
              <DateInput
                {...register("due_date", { required: true })}
                label="DUE DATE"
                placeholder="Select a date"
              />
            </div>
            <Controller
              name="tags"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TagSelect onChange={onChange} value={value} />
              )}
            />
            <PrioritySelect {...register("priority")} />
            <div className="flex items-center justify-end gap-4 mt-6">
              <Button
                name="Cancel"
                variant="white"
                onClick={handleModalClose}
              />

              <Button
                type="submit"
                name="Add Task"
                variant="purple"
                icon={<AiOutlinePlus />}
              />
            </div>
          </form>
        </Modal>
      )}
    </>
  );
};

export default Header;
