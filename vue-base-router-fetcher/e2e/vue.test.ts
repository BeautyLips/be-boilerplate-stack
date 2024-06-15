import { expect, test } from "@playwright/test"

test("Visit home page", async ({ page }) => {
  // Arrange
  const path = "/"
  const PageHome = "Page Home"

  // Act
  await page.goto(path)
  const expected = page.locator("div[data-testid='page-home']")

  // Assert
  await expect(expected).toHaveText(PageHome)
})
