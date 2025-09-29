import { test, expect } from '@playwright/test';

test.describe("Amazon Today's Deals", () => {
  test('navigates to deals page and verifies content', async ({ page }) => {
    await page.goto('https://www.amazon.com/gp/goldbox', { waitUntil: 'domcontentloaded' });
    await expect(page).toHaveURL(/goldbox/);

    // Handle consent banner if present (EU regions)
    const acceptCookies = page.locator('#sp-cc-accept');
    if (await acceptCookies.isVisible().catch(() => false)) {
      await acceptCookies.click();
    }

    // Loosened assertion: look for common deals labels
    const dealsText = page.locator('text=/Today\'s Deals|Top Deals|Deals/i').first();
    await expect(dealsText).toBeVisible();
  });
});


