import { fetcher } from "~~/src/shared/tools/Fetcher"

export async function fetchTodoById(id: string) {
  return fetcher.get(`/todos/${id}`).then((res) => res.data)
}
