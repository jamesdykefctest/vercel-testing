import { test, expect } from '@playwright/test';

test.describe("Browse bounties", () => {
  test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(baseURL);
  });

  test("should show a list of drops", async ({ page }) => {
    await expect(page.locator("data-test-id=dyke")).toBeTruthy();
  });
});
