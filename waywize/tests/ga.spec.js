const { test, expect } = require('@playwright/test');

// Constants

const indexURL = 'http://localhost:3000';

// Tests

test('Check for Google Analytics Tag on Landing (Index) Page', async ({ page }) => {
  await page.goto(indexURL);
  await page.waitForTimeout(10000);
  const pageContent = await page.content();
  const hasGoogleAnalyticsTag = pageContent.includes('https://www.googletagmanager.com');
  expect(hasGoogleAnalyticsTag).toBe(true);
});