
import { test as base } from '@playwright/test';
import { LoginPO } from '../pages/login.po';
import { InventoryPO } from '../pages/inventory.po';
import { CartPO } from '../pages/cart.po';

type Pages = {
  login: LoginPO;
  inventory: InventoryPO;
  cart: CartPO;
};

export const test = base.extend<Pages>({
  login: async ({ page }, use) => {
    await use(new LoginPO(page));
  },

  inventory: async ({ page }, use) => {
    await use(new InventoryPO(page));
  },

  cart: async ({ page }, use) => {
    await use(new CartPO(page));
  },
});

export const expect = test.expect;
