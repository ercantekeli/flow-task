import { supabase } from "@/lib/supabase";
import { types } from "util";
import { GetAllTasksResponse, CreateTaskPayload } from "@/types/page";

export const createTask = async (task: CreateTaskPayload) => {
  const { data, error } = await supabase.from("tasks").insert(task).select();

  if (error) throw error;
  return data;
};

export const getAllTasks = async (): Promise<GetAllTasksResponse[]> => {
  const { data, error } = await supabase.from("columns").select(`
    *,
    tasks (*)
  `);
  if (error) throw error;
  return data;
};
