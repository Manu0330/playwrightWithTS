import { test, expect } from '@playwright/test';

test.describe('Login Tests', () => {
  test('should login successfully', async ({ page }) => {
    await page.goto('https://myapp.com');
    await page.fill('#username', 'admin');
    await page.fill('#password', 'password');
    await page.click('button[type="submit"]');
    
    // Wait for navigation to complete
    await page.waitForURL('**/dashboard**');
    
    // Verify login was successful
    await expect(page).toHaveURL(/dashboard/);
  });
});