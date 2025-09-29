import { test, expect } from '@playwright/test';

test.describe('Amazon search', () => {
  test('can search for a product and open first result', async ({ page }) => {
    await page.goto('https://www.amazon.com/');

    const searchBox = page.locator('#twotabsearchtextbox');
    await searchBox.fill('wireless headphones');
    await page.locator('input#nav-search-submit-button').click();

    const results = page.locator('div.s-main-slot a.a-link-normal.s-no-outline');
    await expect(results.first()).toBeVisible();
    await results.first().click();

    await expect(page).toHaveTitle(/headphones/i);
  });
});


