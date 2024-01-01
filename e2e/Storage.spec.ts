import { test, expect } from '@playwright/test';



test('Values are representing correctly after adding items', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('banner').getByRole('link', { name: 'Storage' }).click();
  // Add first item
  await page.fill('text=Item', 'item one');
  await page.fill('text=Quantity', '1');
  await page.fill('text=Amount', '2');
  await page.click('text=Submit');

  // Add second item
  await page.fill('text=Item', 'item two');
  await page.fill('text=Quantity', '3');
  await page.fill('text=Amount', '2');
  await page.click('text=Submit');

  // Navigate to overview
  await page.getByRole('banner').getByRole('link', { name: 'Overview' }).click();

  // Check if the page contains the expected text
  await expect(page.getByRole('main')).toContainText('This month items registered: 4.00 For total amount of 8.00 EUR');
});