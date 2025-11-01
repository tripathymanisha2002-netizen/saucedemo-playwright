// src/spec/scenario1.spec.ts
import { test, expect } from '../fixtures/test.fixture';
import { users } from '../data/credentials.data';

test('Scenario 1 - login standard_user and add 1 product', async ({ login, inventory, page }) => {
  await login.goto();
  await login.logIn('standard_user', 'secret_sauce');

  await expect(inventory.inventoryContainer).toBeVisible();


  await inventory.addProductByIndex(0);
  expect(await inventory.getCartCount()).toBe(1);
});
