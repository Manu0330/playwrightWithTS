import { test, expect } from '@playwright/test';

test('block the image', async ({ page }) => {
    await page.route('**://picsum.photos/**', route => route.abort());
    
    // Navigate to your local page
    await page.goto('https://picsum.photos/');
    
    // Check the <img> exists
    const img = page.getByRole('banner').locator('.container.mx-auto.flex.flex-wrap > div').first();
    //const img = page.locator("//header[@class='content-section-light']//div[@class='container mx-auto flex flex-wrap']//div[1]");
    await expect(img).toHaveCount(1);
    
    // Verify it was blocked (naturalWidth = 0 if no image loaded)
    const isBlocked = await img.evaluate((el: HTMLImageElement | HTMLObjectElement) => {
        if (el instanceof HTMLImageElement) {
            return el.naturalWidth === 0;
        }
        return false;
    });
    
    // Assert that the image was successfully blocked
    expect(isBlocked).toBe(true);
});