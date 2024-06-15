import { useQueryTodoDetail } from "~~/src/entities/todo/api"

export function useModelTodoDetail(id: string) {
  const { data, pending, error } = useQueryTodoDetail(id)

  return {
    todo: data,
    isPending: pending,
    error,
  }
}
