import { test, expect } from "@playwright/test";

const localhost = "http://localhost:3000";

test('hero text is present', async ({ page }) => {
    await page.goto(localhost);
    await page.getByText('Change How You Wander').click();
  });

test('hero button is present', async ({ page }) => {
    await page.goto(localhost);
    await page.getByRole('button', { name: 'Subscribe' }).click();
});

test('hero subtext is present', async ({ page }) => {
    await page.goto(localhost);
    await page.getByText('Discover the future of seamless navigation with WayWize, where cutting-edge multi-platform applications redefine indoor and outdoor mapping.').click();
  });

test('newsletter text is present', async ({ page }) => {
    await page.goto(localhost);
    await page.getByText('This Way To Seamless Navigation Solutions').click();
  });

test('newsletter button is present', async ({ page }) => {
    await page.goto(localhost);
    await page.getByRole('button', { name: 'Subscribe' }).click();
});

test('newsletter subtext is present', async ({ page }) => {
    await page.goto(localhost);
    await page.getByText('Join our mailing list to receive exclusive updates and offers about cutting-edge facility and venue mapping solutions').click();
  });

test('testimonials text is present', async ({ page }) => {
    await page.goto(localhost);
    await page.getByText('Read What Others Have To Say').click();
  });

test ('test that HOME in navbar is present', async ({ page }) => {
    await page.goto(localhost);
    await page.getByText('HOME').click();
});

test ('test that ABOUT in navbar is present', async ({ page }) => {
    await page.goto(localhost);
    await page.getByText('ABOUT').click();
});

test ('test that cookie banner present', async ({ page }) => {
    await page.goto(localhost);
    await page.getByText('Accept').click();
});

test('hero text is present on ABOUT page', async ({ page }) => {
    await page.goto(localhost);
    await page.getByText('Overview').click();
  });

test('Our People text is present on ABOUT page', async ({ page }) => {
    await page.goto(localhost);
    await page.getByText('Our People').click();
  });

test('what we stand for text is present on ABOUT page', async ({ page }) => {
    await page.goto(localhost);
    await page.getByText('What We Stand For').click();
  });

test('what we stand for subtext is present on ABOUT page', async ({ page }) => {
    await page.goto(localhost);
    await page.getByText('Our Values').click();
  });

test('hero text is present on Privacy page', async ({ page }) => {
    await page.goto(localhost);
    await page.getByText('WayWize Privacy Policy').click();
  });