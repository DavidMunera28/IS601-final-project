const { test, expect } = require('@playwright/test');

// Constants

const indexURL = 'http://localhost:3000';
const aboutURL = 'http://localhost:3000/about';
const privacyURL = 'http://localhost:3000/privacy';

// Tests

test('Check for Google Analytics Tag on Landing (Index) Page', async ({ page }) => {
  await page.goto(indexURL);
  await page.waitForTimeout(10000);
  const pageContent = await page.content();
  const hasGoogleAnalyticsTag = pageContent.includes('https://www.googletagmanager.com');
  expect(hasGoogleAnalyticsTag).toBe(true);
});

test('Check for Google Analytics Tag on About Page', async ({ page }) => {
    await page.goto(aboutURL);
    await page.waitForTimeout(10000);
    const pageContent = await page.content();
    const hasGoogleAnalyticsTag = pageContent.includes('https://www.googletagmanager.com');
    expect(hasGoogleAnalyticsTag).toBe(true);
  });

  test('Check for Google Analytics Tag on Privacy Policy Page', async ({ page }) => {
    await page.goto(privacyURL);
    await page.waitForTimeout(10000);
    const pageContent = await page.content();
    const hasGoogleAnalyticsTag = pageContent.includes('https://www.googletagmanager.com');
    expect(hasGoogleAnalyticsTag).toBe(true);
  });