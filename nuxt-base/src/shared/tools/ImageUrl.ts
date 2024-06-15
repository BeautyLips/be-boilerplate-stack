class ImageUrl {
  #config: Config

  public constructor(config: Config) {
    this.#config = config
  }

  public getUrl(name: string) {
    return `/images/${name}`
  }

  public getPub(name: string) {
    return `/images/${name}`
  }

  public getUrlIcon(name: string) {
    return `/icons/${name}`
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
    path: import.meta.env.NUXT_PUBLIC_CDN_URL ?? "https://place-hold.it",
  },
})
