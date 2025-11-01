
export function getProductSelectorByName(productName: string): string {
  
  return `.inventory_item:has-text("${productName}")`;
}
