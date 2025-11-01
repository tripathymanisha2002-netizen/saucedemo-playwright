import { chromium } from '@playwright/test';
import { users } from '../data/credentials.data';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.saucedemo.com/');
  await page.fill('[data-test="username"]', users.standardUser.username);
  await page.fill('[data-test="password"]', users.standardUser.password);
  await page.click('[data-test="login-button"]');

  // wait until login redirects to inventory page
  await page.waitForURL('**/inventory.html');

  // save login state
  await context.storageState({ path: 'storageState.json' });

  await browser.close();
})();
