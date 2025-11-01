
import { test, expect } from '@playwright/test';

// Ensure this single test runs with NO stored auth (unauthenticated)
test.use({ storageState: undefined });

test('Scenario 5 - unauthenticated user redirected to login when visiting /inventory.html', async ({ page }) => {
  // Navigate directly to inventory as unauthenticated user
  await page.goto('/inventory.html'); // baseURL will be applied from config

  // Expect login username input to be visible
  await expect(page.locator('[data-test="username"]')).toBeVisible();

  // Optionally check error message if present
  const err = page.locator('[data-test="error"]');
  if (await err.count() > 0) {
    await expect(err).toBeVisible();
  }
});
