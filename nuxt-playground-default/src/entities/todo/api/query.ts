import { fetchTodoById } from "./endpoints"

export function useQueryTodoDetail(id: string) {
  return useAsyncData(`todo/${id}`, () => {
    return fetchTodoById(id)
  })
}
