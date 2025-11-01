
import { test, expect } from '../fixtures/test.fixture';
import { users } from '../data/credentials.data';

test('Scenario 4 - print product name and price with dollar sign after price', async ({ login, inventory }) => {
  await login.goto();
  await login.logIn(users.visualUser.username, users.visualUser.password);

  await expect(inventory.isVisible()).resolves.toBeTruthy();

  const names = await inventory.getAllProductNames();
  const prices = await inventory.getAllProductPrices(); // price strings like "$29.99"

  for (let i = 0; i < names.length; i++) {
    const raw = prices[i] ?? '';
    const numeric = raw.replace('$', '').trim();
    console.log(`${names[i]} costs ${numeric}$`);
  }

  expect(names.length).toBe(6);
});
