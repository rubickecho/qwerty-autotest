import { test, expect, Page } from '@playwright/test';

test.describe('Practice List', () => {
  test.beforeEach(async ({ page }) => {
    test.slow();
    await page.goto('/');
    await page.getByLabel('关闭提示').click();
    await page.waitForTimeout(500);

    await page.locator('#root > div').locator('.fixed').locator('svg').click();
  });

  test('Practice list button click to open the list ', async ({ page }) => {
    await expect(await page.getByRole('heading', { name: 'CET-4 第 1 章' }).isVisible()).toBeTruthy();
    await page.locator('#headlessui-portal-root').locator('div > p', { hasText: 'cancel' }).click();
  });

  test.only('Close practice list', async ({ page }) => {
    await page.getByRole('heading', { name: 'CET-4 第 1 章' }).getByRole('img').click();
    await page.waitForTimeout(500);
    await expect(await page.getByRole('heading', { name: 'CET-4 第 1 章' }).isVisible()).not.toBeTruthy();
  });
});