import { test, expect } from '@playwright/test';

test('should display total items registered', async ({ page }) => {
  await page.goto('http://localhost:5173/'); // replace with the correct URL to the OverviewView.vue page
  const totalItemsText = await page.textContent('h5'); // replace 'h5' with the correct selector
  expect(totalItemsText).toContain('registered');
});