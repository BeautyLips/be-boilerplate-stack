class ImageUrl {
  #config: Config

  public constructor(config: Config) {
    this.#config = config
  }

  public getUrl(name: string) {
    return new URL(`../assets/images/${name}`, import.meta.url).href
  }

  public getUrlIcon(name: string) {
    return new URL(`../assets/icons/${name}`, import.meta.url).href
  }

  public getPub(name: string) {
    return `/images/${name}`
  }

  public getRem(name: string) {
    return name
  }

  public getCdn(name: string) {
    return `${this.#config.cdn.path}/${name}`
  }
}

interface Config {
  cdn: {
    path: string
  }
}

export const imageUrl = new ImageUrl({
  cdn: {
    path: import.meta.env.VITE_CDN_URL ?? "https://place-hold.it",
  },
})
