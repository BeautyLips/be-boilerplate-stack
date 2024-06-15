import axios, { type AxiosInstance } from "axios"

class Fetcher {
  static #instance: Fetcher
  readonly #fetcher: AxiosInstance

  private constructor() {
    this.#fetcher = axios.create({
      baseURL:
        import.meta.env.NUXT_PUBLIC_API_URL ??
        "https://jsonplaceholder.typicode.com",
    })
  }

  public static getInstance() {
    if (!Fetcher.#instance) {
      Fetcher.#instance = new Fetcher()
    }

    return Fetcher.#instance
  }

  public get fetcher() {
    return this.#fetcher
  }
}

export const fetcher = Fetcher.getInstance().fetcher
