import { test, expect } from '@playwright/test';

test('should display "This month items registered:"', async ({ page }) => {
  await page.goto('http://localhost:5173/'); 
  const totalItemsText = await page.textContent('h5');
  expect(totalItemsText).toContain('This month items registered:');
});