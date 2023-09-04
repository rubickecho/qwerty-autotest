import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/')

  await page.locator('h1').getByText('Qwerty Learner');
});
