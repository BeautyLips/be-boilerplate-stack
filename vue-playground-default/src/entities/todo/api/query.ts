import type { Todo } from "@/entities/todo/types"
import { useQuery } from "@tanstack/vue-query"
import { fetchTodoById } from "./endpoints"

export function useQueryTodoDetail(id: string) {
  return useQuery<Todo>({
    queryKey: ["todo", id],
    queryFn: () => fetchTodoById(id),
  })
}
