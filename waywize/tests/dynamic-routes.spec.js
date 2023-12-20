import { test, expect } from "@playwright/test";

const localhost = "https://is-601-final-project.vercel.app/";
const localabout = "https://is-601-final-project.vercel.app/about";
const localprivacy = "https://is-601-final-project.vercel.app/privacy";

test('hero text is present', async ({ page }) => {
    await page.goto(localhost);
    await page.getByText('Change How You Wander').click();
  });

test('hero subtext is present', async ({ page }) => {
    await page.goto(localhost);
    await page.getByText('Discover the future of seamless navigation with WayWize, where cutting-edge multi-platform applications redefine indoor and outdoor mapping.').click();
  });

test('newsletter text is present', async ({ page }) => {
    await page.goto(localhost);
    await page.getByText('This Way To Seamless Navigation Solutions').click();
  });

test('newsletter subtext is present', async ({ page }) => {
    await page.goto(localhost);
    await page.getByText('Join our mailing list to receive exclusive updates and offers about cutting-edge facility and venue mapping solutions').click();
  });

test('testimonials text is present', async ({ page }) => {
    await page.goto(localhost);
    await page.getByText('Read What Others Have To Say').click();
  });

test('hero text is present on ABOUT page', async ({ page }) => {
    await page.goto(localabout);
    await page.getByText('Overview').click();
  });

test('Our People text is present on ABOUT page', async ({ page }) => {
    await page.goto(localabout);
    await page.getByText('Our People').click();
  });

test('what we stand for text is present on ABOUT page', async ({ page }) => {
    await page.goto(localabout);
    await page.getByText('What We Stand For').click();
  });

test('what we stand for subtitle is present on ABOUT page', async ({ page }) => {
    await page.goto(localabout);
    await page.getByText('Our Values').click();
  });

test('hero text is present on Privacy page', async ({ page }) => {
    await page.goto(localprivacy);
    await page.getByText('WayWize Privacy Policy').click();
  });

  test('hero subtext is present on Privacy page', async ({ page }) => {
    await page.goto(localprivacy);
    await page.getByText('Privacy is a paramount concern for our mapping and wayfinding company, and we are committed to implementing robust measures to safeguard your personal information. Here are several key ways we prioritize and protect your privacy:').click();
  });

  test('newsletter subtitle is present', async ({ page }) => {
    await page.goto(localhost);
    await page.getByText('PERMISSIONS').click();
  });

  test('hero subtext is present on ABOUT page', async ({ page }) => {
    await page.goto(localabout);
    await page.getByText('WayWize creates multi-platform applications used for indoor and outdoor mapping and wayfinding. Appealing to not only business owners, space planners, and event organizers that our apps are primarily marketed toward, but also the day-to-day visitors to various facilities, venues, and localities that our clients are aiming to appeal to.').click();
  });

  test('what we stand for subtext is present on ABOUT page', async ({ page }) => {
    await page.goto(localabout);
    await page.getByText('WayWize is dedicated to crafting versatile multi-platform applications tailored for indoor and outdoor mapping and wayfinding. Our commitment extends beyond serving business owners, space planners, and event organizers, as we prioritize enhancing the everyday experience for visitors navigating diverse facilities, venues, and localities targeted by our clients.').click();
  });

  test('Isabella Rainhart text is present on ABOUT page', async ({ page }) => {
    await page.goto(localabout);
    await page.getByText('Isabella Rainhart').click();
  });