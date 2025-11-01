
import { test, expect } from '../fixtures/test.fixture';
import { users } from '../data/credentials.data';

test('Scenario 3 - visual_user prints product names and verifies count is 6', async ({ login, inventory }) => {
  await login.goto();
  await login.logIn(users.visualUser.username, users.visualUser.password);

  await expect(inventory.isVisible()).resolves.toBeTruthy();

  const names = await inventory.getAllProductNames();
  console.log('Products:', names);
  expect(names.length).toBe(6);
});
