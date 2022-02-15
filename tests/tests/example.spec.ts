import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page, baseURL }) => {
  await page.goto(baseURL);
});

test.describe("Main page", () => {
  test("Check title", async ({ page }) => {
    const title = page.locator('.title');
    await expect(title).toHaveText('testing');
  });
});

