
import { test, expect } from '../fixtures/test.fixture';
import { users } from '../data/credentials.data';

test('Scenario 2 - add two then remove one', async ({ login, inventory }) => {
  await login.goto();
  await login.logIn('standard_user', 'secret_sauce');

  await expect(inventory.isVisible()).resolves.toBeTruthy();

  await inventory.addProductByIndex(0);
  await inventory.addProductByIndex(1);
  expect(await inventory.getCartCount()).toBe(2);

  // remove the first product (button becomes "Remove")
  await inventory.removeProductByIndex(0);
  expect(await inventory.getCartCount()).toBe(1);
});
