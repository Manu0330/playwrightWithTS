import { test, expect } from '@playwright/test';

test.describe('Amazon homepage', () => {
  test('loads and shows key elements', async ({ page }) => {
    await page.goto('https://www.amazon.com/');

    await expect(page).toHaveTitle(/Amazon/i);

    const searchBox = page.locator('#twotabsearchtextbox');
    await expect(searchBox).toBeVisible();

    const cart = page.locator('#nav-cart');
    await expect(cart).toBeVisible();
  });
});
