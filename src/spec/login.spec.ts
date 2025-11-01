import { test, expect } from '@playwright/test';

test('Scenario 1 – Login and add one product to cart', async ({ page }) => {
  // Go to login page
  await page.goto('https://www.saucedemo.com');

  // Login as standard_user
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Verify home page visible
  await expect(page.locator('.inventory_list')).toBeVisible();

  // Add one product to cart
  await page.click('text=Add to cart', { timeout: 5000 });

  // Verify cart counter
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});
