import { test, expect } from '@playwright/test';

test('Generated Test', async ({ page }) => {
    await page.goto(`https://srv-pricemqarearch.ivp.in/IVPPriceMaster`);
    // step: Click on email field
    // 2026-02-23 13:52:23 click
    await page.click(`xpath=//input[@id='username']`);
    // step: Click on email field
    // 2026-02-23 13:52:35 click
    await page.click(`xpath=//input[@id='username']`);
    // step: Enter "mdsohail@ivp.in" in email field
    // 2026-02-23 13:52:39 fill
    await page.fill(`xpath=//input[@id='username']`, `mdsohail@ivp.in`);
    // step: Click on the instance field
    // 2026-02-23 13:52:55 click
    await page.click(`xpath=//input[@id='client-dropdown' and @placeholder='Instance']`);
    // step: Click on the dropdown
    // 2026-02-23 13:53:04 click
    await page.click(`xpath=//input[@id='client-dropdown']`);
});