import { test, expect } from '@playwright/test';

test('Generated Test', async ({ page }) => {
    // 2026-02-17 11:07:58 click
    await page.click('xpath=//input[@id=\'username\']');
    // 2026-02-17 11:08:02 fill
    await page.fill('xpath=//input[@id=\'username\']', 'mdsohail@ivp.in');
    // 2026-02-17 11:08:08 click
    await page.click('xpath=//input[@id=\'client-dropdown\']');
    // 2026-02-17 11:08:13 click
    await page.click('xpath=//div[@id=\'section-client\']//div[normalize-space(.)=\'pmqaautomationuat\']');
    // 2026-02-17 11:08:19 click
    await page.click('xpath=//input[@id=\'submit-button\']');
    // 2026-02-17 11:08:24 click
    await page.click('xpath=//input[@id=\'password\']');
    // 2026-02-17 11:08:28 fill
    await page.fill('xpath=//input[@id=\'password\']', 'ivp@123');
    // 2026-02-17 11:08:37 click
    await page.click('xpath=//input[@id=\'submit-button\']');
    // 2026-02-17 11:08:51 click
    await page.click('xpath=//button[@id=\'tabControlTabName-IVPPriceMaster/Blotter\']');
    // 2026-02-17 11:09:13 click
    await page.click('xpath=//*[@data-testid=\'menu-icon\']');
});