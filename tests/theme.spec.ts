import { test, expect } from '@playwright/test';

test.describe('Theme switch', () => {
  test('has theme switch button', async ({ page }) => {
    await page.goto('/');
    await page.getByLabel('关闭提示').click();
  
    await page.getByLabel('开关深色模式（Ctrl + D）').click();
    await expect(await page.locator('html').getAttribute('class')).toBe('dark');

    await page.waitForTimeout(1000);

    await page.getByLabel('开关深色模式（Ctrl + D）').click();
    await expect(await page.locator('html').getAttribute('class')).toBe('');
  });
});
