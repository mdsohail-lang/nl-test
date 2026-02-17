import { test, expect } from '@playwright/test';

test('Generated Test', async ({ page }) => {
    // 2026-02-17 11:11:45 click
    await page.click('xpath=//input[@id=\'username\']');
    // 2026-02-17 11:11:49 fill
    await page.fill('xpath=//input[@id=\'username\']', 'mdsohail@ivp.in');
});