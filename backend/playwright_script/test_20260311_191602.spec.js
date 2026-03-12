import { test, expect } from '@playwright/test';

test('Generated Test', async ({ page }) => {
    await page.goto(`https://srv-pricemqarearch.ivp.in/IVPPriceMaster`);
    // step: Take screenshot
    // 2026-03-11 19:16:02 capture_screenshot
    await page.screenshot({path: 'intermediary/screenshot.png',fullPage: true})
});