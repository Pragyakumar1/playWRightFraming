import { test, expect } from '@playwright/test';

test.describe('Login Tests', () => {
    test('Normal login with free website', async ({ page }) => {
        // Navigate to the login page
        await page.goto('https://demoqa.com/text-box');
        await page.getByRole('textbox', { name: 'Full Name' }).click();
        await page.getByRole('textbox', { name: 'Full Name' }).fill('Pragya Kumar');
        await page.getByRole('textbox', { name: 'Full Name' }).press('Tab');
        await page.getByRole('textbox', { name: 'name@example.com' }).fill('pk840582@gmail.com');
    });
});