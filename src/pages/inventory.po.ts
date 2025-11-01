// src/pages/inventory.po.ts
import { Page, Locator } from '@playwright/test';

export class InventoryPO {
  readonly page: Page;
  readonly inventoryContainer: Locator;
  readonly productItems: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;

    // ✅ Fixed: use unique locator to avoid strict mode violation
    this.inventoryContainer = page.locator('[data-test="inventory-container"]');

    this.productItems = page.locator('.inventory_item');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async isVisible(): Promise<boolean> {
    return this.inventoryContainer.isVisible();
  }

  async addProductByIndex(index: number): Promise<void> {
    await this.productItems.nth(index).locator('button').click();
  }

  async removeProductByIndex(index: number): Promise<void> {
    await this.productItems.nth(index).locator('button').click();
  }

  async getCartCount(): Promise<number> {
    if (await this.cartBadge.count() === 0) return 0;
    const txt = (await this.cartBadge.textContent()) ?? '0';
    return parseInt(txt, 10);
  }

  async getAllProductNames(): Promise<string[]> {
    const count = await this.productItems.count();
    const names: string[] = [];
    for (let i = 0; i < count; i++) {
      names.push(
        (await this.productItems
          .nth(i)
          .locator('.inventory_item_name')
          .textContent()) ?? ''
      );
    }
    return names;
  }

  async getAllProductPrices(): Promise<string[]> {
    const count = await this.productItems.count();
    const prices: string[] = [];
    for (let i = 0; i < count; i++) {
      prices.push(
        (await this.productItems
          .nth(i)
          .locator('.inventory_item_price')
          .textContent()) ?? ''
      );
    }
    return prices;
  }
}
