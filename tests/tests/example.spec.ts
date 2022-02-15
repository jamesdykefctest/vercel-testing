import { test, expect } from '@playwright/test';

test.describe("Main page", () => {
  test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(baseURL);
  });

  test("Check title", async ({ page }) => {
    const title = page.locator('.title');
    await expect(title).toHaveText('Just testing');
  });
});

