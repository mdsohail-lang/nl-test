import { test, expect } from '@playwright/test';

test('Generated Test', async ({ page }) => {
    await page.goto(`https://srv-pricemqarearch.ivp.in/IVPPriceMaster`);
    // step: Click on email field
    // 2026-03-12 15:21:06 click
    await page.click(`xpath=//input[@id='username']`);
    // step: Enter "mdsohail@ivp.in" in email field
    // 2026-03-12 15:21:14 fill
    await page.fill(`xpath=//input[@id='username']`, `mdsohail@ivp.in`);
    // step: Click on the instance dropdown
    // 2026-03-12 15:21:27 click
    await page.click(`xpath=//input[@id='client-dropdown']`);
    // step: Wait 1 second
    // 2026-03-12 15:21:29 wait
    await page.waitForTimeout(1000);
    // step: Click on "pmqaautomationuat" option
    // 2026-03-12 15:21:41 click
    await page.click(`xpath=//div[@id='section-client']//div[normalize-space(text())='pmqaautomationuat']`);
    // step: Click on the Next button
    // 2026-03-12 15:21:54 click
    await page.click(`xpath=//input[@id='submit-button']`);
    // step: Click on the password field
    // 2026-03-12 15:22:07 click
    await page.click(`xpath=//input[@id='password']`);
    // step: Enter "ivp@123" in the password field
    // 2026-03-12 15:22:16 fill
    await page.fill(`xpath=//input[@id='password']`, `ivp@123`);
    // step: Click the submit button
    // 2026-03-12 15:22:28 click
    await page.click(`xpath=//input[@id='submit-button']`);
    // step: Validate that "Dashboard" text appears on the top left of the screen
    // 2026-03-12 15:22:32 validate
    await expect(page.locator(`body`)).toContainText(`Dashboard`);
});