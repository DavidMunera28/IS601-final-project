const { test, expect } = require('@playwright/test');

// Constants

const websiteURL = 'http://localhost:3000';
const validEmail = 'validemail@domain.com';
const invalidEmail = 'invalidemail@domain';
const expectedSuccessText = 'Almost finished';
const expectedFailText = 'errors';

// Tests

test.beforeEach(async ({ page }) => {
    await page.goto(websiteURL);
});

test('Test Valid Email', async ({ page }) => {

    await page.fill('#mce-EMAIL', validEmail);
    const emailFieldValue = await page.$eval('#mce-EMAIL', (input) => input.value);
    await page.click('#mc-embedded-subscribe');
    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.waitForLoadState('domcontentloaded'),
        await page.waitForTimeout(10000)
      ]);
    const newPageContent = await newPage.textContent('html');
      expect(newPageContent).toContain(expectedSuccessText);
      expect(newPageContent).not.toContain(expectedFailText);
    });

    test('Test Invalid Email', async ({ page }) => {

        await page.fill('#mce-EMAIL', invalidEmail);
        const emailFieldValue = await page.$eval('#mce-EMAIL', (input) => input.value);
        await page.click('#mc-embedded-subscribe');
        const [newPage] = await Promise.all([
            page.waitForEvent('popup'),
            page.waitForLoadState('domcontentloaded'),
            await page.waitForTimeout(10000)
          ]);
        const newPageContent = await newPage.textContent('html');
          expect(newPageContent).toContain(expectedFailText);
          expect(newPageContent).not.toContain(expectedSuccessText);
        });
