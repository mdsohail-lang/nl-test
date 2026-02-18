import { test, expect } from '@playwright/test';

test('Generated Test', async ({ page }) => {
    await page.goto(`https://srv-pricemqarearch.ivp.in/IVPPriceMaster`);
    // 2026-02-18 12:00:57 click
    await page.click(`xpath=//input[@id='username']`);
    // 2026-02-18 12:01:01 fill
    await page.fill(`xpath=//input[@id='username']`, `mdsohail@ivp.in`);
    // 2026-02-18 12:01:08 click
    await page.click(`xpath=//input[@id='client-dropdown']`);
    // 2026-02-18 12:01:16 click
    await page.click(`xpath=//div[@id='section-client']//div[normalize-space(.)='pmqaautomationuat']`);
    // 2026-02-18 12:01:22 click
    await page.click(`xpath=//input[@id='submit-button']`);
    // 2026-02-18 12:01:28 click
    await page.click(`xpath=//input[@id='password']`);
    // 2026-02-18 12:01:32 fill
    await page.fill(`xpath=//input[@id='password']`, `ivp@123`);
    // 2026-02-18 12:01:40 click
    await page.click(`xpath=//input[@id='submit-button']`);
});