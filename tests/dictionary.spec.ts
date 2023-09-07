import { test, expect } from '@playwright/test';

test.describe('Dictionary manage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByLabel('关闭提示').click();
  });

  test('Switch dictionary', async ({ page }) => {
    await expect(await page.getByText('CET-4 第 1 章').isVisible()).toBeTruthy();

    await page.getByText('CET-4 第 1 章').hover();
    await expect(await page.getByText('词典章节切换').isVisible()).toBeTruthy();

    await page.getByText('CET-4 第 1 章').click();
    await page.waitForURL('**\/gallery');

    await page.getByText('六级巧记速记').first().click();
    await page.getByText('确定').first().click();

    await page.waitForURL('**\/');
    await expect(await page.getByText('六级巧记速记 第 1 章').isVisible()).toBeTruthy();
  });
});
