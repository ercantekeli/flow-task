"use client";

import react, {
  Dispatch,
  createContext,
  SetStateAction,
  useState,
} from "react";
import { GetAllTasksResponse } from "@/types/page";

type TaskContextTypes = {
  allTasks: GetAllTasksResponse[];
  setAllTasks: Dispatch<SetStateAction<GetAllTasksResponse[]>>;
};

export const TaskContext = createContext<TaskContextTypes | null>(null);

export default function TaskContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [allTasks, setAllTasks] = useState([]);
  return (
    <TaskContext.Provider value={{ allTasks, setAllTasks }}>
      {children}
    </TaskContext.Provider>
  );
}
