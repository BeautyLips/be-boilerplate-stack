import { describe, expect, it } from "vitest"
import { imageUrl } from "../ImageUrl"

describe("Tools: getImageUrl", () => {
  it.each([
    "example.png",
    "example.jpg",
    "example.svg",
    "https://place-hold.it/300x500",
  ])("should be return string", (value: string) => {
    // arrange
    const sut = imageUrl

    // act
    const actual1 = sut.getUrl(value)
    const actual2 = sut.getPub(value)
    const actual3 = sut.getRem(value)
    const actual4 = sut.getCdn(value)

    // assert
    expect(actual1).toBeTypeOf("string")
    expect(actual2).toBeTypeOf("string")
    expect(actual3).toBeTypeOf("string")
    expect(actual4).toBeTypeOf("string")
  })
})
