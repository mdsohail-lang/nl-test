import { test, expect } from '@playwright/test';

test('Generated Test', async ({ page }) => {
    await page.goto(`https://srv-pricemqarearch.ivp.in/IVPPriceMaster`);
    // step: Click on email field
    // 2026-02-23 12:27:07 click
    await page.click(`xpath=//input[@id='username']`);
    // step: Enter "mdsohail@ivp.in" in email field
    // 2026-02-23 12:27:11 fill
    await page.fill(`xpath=//input[@id='username']`, `mdsohail@ivp.in`);
    // step: Click on the instance dropdown
    // 2026-02-23 12:27:19 click
    await page.click(`xpath=//input[@id='client-dropdown']`);
    // step: Click on "pmqaautomationuat" option
    // 2026-02-23 12:27:28 click
    await page.click(`xpath=//div[@id='section-client']//div[normalize-space(text())='pmqaautomationuat']`);
    // step: Click on the Next button
    // 2026-02-23 12:27:36 click
    await page.click(`xpath=//input[@id='submit-button' and @value='Next']`);
    // step: Click on password field
    // 2026-02-23 12:27:44 click
    await page.click(`xpath=//input[@id='password' and @type='password']`);
    // step: Enter "ivp@123" in password field
    // 2026-02-23 12:27:48 fill
    await page.fill(`xpath=//input[@id='password' and @type='password']`, `ivp@123`);
    // step: Click submit button
    // 2026-02-23 12:27:58 click
    await page.click(`xpath=//input[@id='submit-button' and @type='submit']`);
    // step: Click on "Pricing Blotter" text element on top left
    // 2026-02-23 12:28:12 click
    await page.click(`xpath=//button[@id='tabControlTabName-IVPPriceMaster/Blotter']`);
    // step: Click on the menu icon on top left
    // 2026-02-23 12:28:42 click
    await page.click(`xpath=//*[@data-testid='menu-icon']`);
    // step: Click on Configure
    // 2026-02-23 12:28:52 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Configure']/ancestor::div[@role='button'][1]`);
    // step: Click on Data Sources
    // 2026-02-23 12:28:56 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Data Sources']/ancestor::div[@role='button'][1]`);
    // step: Click on Pricing Data Source
    // 2026-02-23 12:28:59 click
    await page.click(`xpath=//*[contains(@class,'MuiPopper-root') or contains(@class,'MuiPopover-root') or @role='menu' or @role='listbox']//div[@aria-label='Pricing Data Source']/ancestor::div[@role='button'][1]`);
    // step: Click on the plus button on the left of BROKER
    // 2026-02-23 12:29:12 click
    await page.click(`xpath=//div[@id='BROKER']//button[.//*[@data-testid='AddIcon']]`);
    // step: Click on the dropdown
    // 2026-02-23 12:29:24 click
    await page.click(`xpath=//button[@data-testid='user-icon']`);
    // step: Click on "Sohail DS" option
});