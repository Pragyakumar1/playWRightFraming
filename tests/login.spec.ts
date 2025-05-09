import { test, expect } from '@playwright/test';

test.describe('Login Tests', () => {
    test('Normal login with free website', async ({ page }) => {
        // Navigate to the login page
        await page.goto('https://example.com/login');

        // Fill in the login form
        await page.fill('input[name="username"]', 'testuser');
        await page.fill('input[name="password"]', 'password123');

        // Click the login button
        await page.click('button[type="submit"]');

        // Wait for navigation after login
        await page.waitForNavigation();

        // Assert that the user is redirected to the dashboard
        await expect(page).toHaveURL('https://example.com/dashboard');

        // Assert that a welcome message is visible
        await expect(page.locator('text=Welcome, testuser')).toBeVisible();
    });
});