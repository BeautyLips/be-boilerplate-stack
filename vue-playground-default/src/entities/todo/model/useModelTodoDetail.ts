import { useQueryTodoDetail } from "@/entities/todo/api"

export function useModelTodoDetail(id: string) {
  const { data, isPending, error } = useQueryTodoDetail(id)

  return {
    todo: data,
    isPending,
    error,
  }
}
