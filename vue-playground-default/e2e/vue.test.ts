import { expect, test } from "@playwright/test"

test("Visit home page", async ({ page }) => {
  // Arrange
  const path = "/"
  const logo = "Logo"

  // Act
  await page.goto(path)
  const expected = page.locator("div[data-testid='logo']")

  // Assert
  await expect(expected).toHaveText(logo)
})
