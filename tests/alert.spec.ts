import { test, expect } from '@playwright/test';

test('Alert', async ({ page }) => {
   
    await page.goto('https://testautomationpractice.blogspot.com/');
    //Enabling alert handling // Dilaog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();
    })
    await page.waitForTimeout(5000);
    await page.click('//button [normalize-space()="Alert"]');
    await page.waitForTimeout(5000);
});
test('Confirmation Dialod-Alert', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    //Enabling Dilog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept();
    })
    await page.waitForTimeout(5000);
    await page.click('//button[normalize-space()="Alert"]');
    await page.waitForTimeout(5000);
});