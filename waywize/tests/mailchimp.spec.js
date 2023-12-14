const { test, expect } = require('@playwright/test');

// Constants

const websiteURL = 'http://localhost:3000';
const expectedSuccessText = 'NJIT'

// Tests

test.beforeEach(async ({ page }) => {
    await page.goto(websiteURL);
});

test('Test Valid Email', async ({ page }) => {

    await page.fill('#mce-EMAIL', 'amohame6@njit.edu');
    const emailFieldValue = await page.$eval('#mce-EMAIL', (input) => input.value);
    await page.click('#mc-embedded-subscribe');
    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.waitForLoadState('domcontentloaded')
      ]);
    const newPageContent = await newPage.textContent('html');
      expect(newPageContent).toContain(expectedSuccessText);
    });
