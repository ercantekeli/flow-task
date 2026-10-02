export interface Task {
  id: number;
  title: string;
  description: string;
  due_date: string;
  priority: "HIGH" | "MEDIUM" | "LOW";
  column_id: number;
  isOverdue?: boolean;
  created_at: string;
}

export interface GetAllTasksResponse {
  id: number;
  column_name: string;
  color: string;
  order: number;
  created_at: string;
  tasks: Task[];
}
[];

export interface CreateTaskPayload {
  title: string;
  description: string;
  column_id: string;
  due_date: string;
  tags: { id: number; name: string; color: string }[];
  priority: { id: 1; name: string; color: string };
}
