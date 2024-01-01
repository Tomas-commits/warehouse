import { test, expect } from '@playwright/test';

test('should display "items registered:"', async ({ page }) => {
  await page.goto('http://localhost:5173'); 
  const ItemsText = await page.textContent('h5');
  expect(ItemsText).toContain('items registered:');
});