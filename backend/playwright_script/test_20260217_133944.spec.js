import { test, expect } from '@playwright/test';

test('Generated Test', async ({ page }) => {
    // 2026-02-17 13:39:44 click
    await page.click('xpath=//input[@id=\'username\']');
    // 2026-02-17 13:39:48 fill
    await page.fill('xpath=//input[@id=\'username\']', 'mdsohail@ivp.in');
    // 2026-02-17 13:39:57 click
    await page.click('xpath=//input[@id=\'client-dropdown\']');
    // 2026-02-17 13:40:02 click
    await page.click('xpath=//div[@id=\'section-client\']//div[normalize-space(text())=\'pmqaautomationuat\']');
    // 2026-02-17 13:40:08 click
    await page.click('xpath=//input[@id=\'submit-button\']');
    // 2026-02-17 13:40:14 click
    await page.click('xpath=//input[@id=\'password\']');
    // 2026-02-17 13:40:18 fill
    await page.fill('xpath=//input[@id=\'password\']', 'ivp@123');
    // 2026-02-17 13:40:24 click
    await page.click('xpath=//input[@id=\'submit-button\']');
    // 2026-02-17 13:40:41 click
    await page.click('xpath=//button[@id=\'tabControlTabName-IVPPriceMaster/Blotter\']');
    // 2026-02-17 13:41:09 click
    await page.click('xpath=//button[@data-testid=\'menu-icon\']');
});