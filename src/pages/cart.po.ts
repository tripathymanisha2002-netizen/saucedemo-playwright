import { Page, expect } from '@playwright/test';

export class CartPO {
  constructor(private page: Page) {}

  async openCart() {
    await this.page.click('.shopping_cart_link');
  }

  async verifyProductInCart(productName: string) {
    const product = this.page.locator('.inventory_item_name', { hasText: productName });
    await expect(product).toBeVisible();
  }

  async checkout() {
    await this.page.click('#checkout');
  }
}
