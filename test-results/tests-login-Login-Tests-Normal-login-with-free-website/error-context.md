# Test info

- Name: Login Tests >> Normal login with free website
- Location: C:\Users\PragyaKumar\projectPlayWright\tests\login.spec.ts:4:9

# Error details

```
Error: page.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input[name="username"]')

    at C:\Users\PragyaKumar\projectPlayWright\tests\login.spec.ts:9:20
```

# Page snapshot

```yaml
- heading "Example Domain" [level=1]
- paragraph: This domain is for use in illustrative examples in documents. You may use this domain in literature without prior coordination or asking for permission.
- paragraph:
  - link "More information...":
    - /url: https://www.iana.org/domains/example
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test.describe('Login Tests', () => {
   4 |     test('Normal login with free website', async ({ page }) => {
   5 |         // Navigate to the login page
   6 |         await page.goto('https://example.com/login');
   7 |
   8 |         // Fill in the login form
>  9 |         await page.fill('input[name="username"]', 'testuser');
     |                    ^ Error: page.fill: Test timeout of 30000ms exceeded.
  10 |         await page.fill('input[name="password"]', 'password123');
  11 |
  12 |         // Click the login button
  13 |         await page.click('button[type="submit"]');
  14 |
  15 |         // Wait for navigation after login
  16 |         await page.waitForNavigation();
  17 |
  18 |         // Assert that the user is redirected to the dashboard
  19 |         await expect(page).toHaveURL('https://example.com/dashboard');
  20 |
  21 |         // Assert that a welcome message is visible
  22 |         await expect(page.locator('text=Welcome, testuser')).toBeVisible();
  23 |     });
  24 | });
```