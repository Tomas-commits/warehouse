import { test, expect } from '@playwright/test';

test('Values are representing correctly after adding items', async ({ page }) => {
  await page.goto('http://localhost:5173/storage');
  await page.getByLabel('Item', { exact: true }).click();
  await page.getByLabel('Item', { exact: true }).fill('item one');
  await page.getByLabel('Quantity').click();
  await page.getByLabel('Quantity').fill('1');
  await page.getByLabel('Amount').click();
  await page.getByLabel('Amount').fill('2');
  await page.getByRole('button', { name: 'Submit' }).click();
  
  await page.getByLabel('Item', { exact: true }).fill('item two');
  await page.getByLabel('Quantity').click();
  await page.getByLabel('Quantity').fill('3');
  await page.getByLabel('Amount').click();
  await page.getByLabel('Amount').fill('2');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('row', { name: 'item two 3 2 6.00 2024-01-01' }).getByRole('button').click();
  await page.getByRole('banner').getByRole('link', { name: 'Overview' }).click();
  await expect(page.getByRole('main')).toContainText('This month items registered: 1.00 For total amount of 2.00 EUR');
});