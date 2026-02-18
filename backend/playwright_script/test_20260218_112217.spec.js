import { test, expect } from '@playwright/test';

test('Generated Test', async ({ page }) => {
    await page.goto(`https://srv-pricemqarearch.ivp.in/IVPPriceMaster`);
    // 2026-02-18 11:22:17 click
    await page.click(`xpath=//input[@id='username']`);
    // 2026-02-18 11:22:21 fill
    await page.fill(`xpath=//input[@id='username']`, `mdsohail@ivp.in`);
    // 2026-02-18 11:22:28 click
    await page.click(`xpath=//input[@id='client-dropdown']`);
    // 2026-02-18 11:22:36 click
    await page.click(`xpath=//div[@id='section-client']//div[normalize-space(text())='pmqaautomationuat']`);
    // 2026-02-18 11:22:43 click
    await page.click(`xpath=//input[@id='submit-button']`);
    // 2026-02-18 11:22:51 click
    await page.click(`xpath=//input[@id='password']`);
    // 2026-02-18 11:22:55 fill
    await page.fill(`xpath=//input[@id='password']`, `ivp@123`);
    // 2026-02-18 11:23:03 click
    await page.click(`xpath=//input[@id='submit-button']`);
    // 2026-02-18 11:23:21 click
    await page.click(`xpath=//button[@id='tabControlTabName-IVPPriceMaster/Blotter']`);
    // 2026-02-18 11:23:48 click
    await page.click(`xpath=//*[@data-testid='menu-icon']`);
});