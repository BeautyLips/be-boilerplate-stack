import { describe, expect, it } from "vitest"

import { mount } from "@vue/test-utils"
import UILogo from "../UILogo.vue"

describe("UI: UILogo", () => {
  it("should be render content property", () => {
    // Arrange
    const content = "Logo"
    const wrapper = mount(UILogo, { props: { content: content } })

    // Act
    const contentExpected = wrapper.text()

    // Assert
    expect(contentExpected).toContain(content)
  })
})
