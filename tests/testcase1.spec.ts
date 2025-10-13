import { test, expect } from '@playwright/test';

test.describe('Playwright website', () => {
  test('homepage has title and visible Get started link', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    await expect(page).toHaveTitle(/Playwright/);

    const getStartedLink = page.getByRole('link', { name: 'Get started' });
    await expect(getStartedLink).toBeVisible();
  });
});
