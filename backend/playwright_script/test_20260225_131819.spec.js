import { test, expect } from '@playwright/test';

test('Generated Test', async ({ page }) => {
    await page.goto(`https://srv-pricemqarearch.ivp.in/IVPPriceMaster`);
    // step: Click on the email field
    // 2026-02-25 13:18:19 click
    await page.click(`xpath=//input[@id='username']`);
    // step: Enter "mdsohail@ivp.in" in the email field
    // 2026-02-25 13:18:24 fill
    await page.fill(`xpath=//input[@id='username']`, `mdsohail@ivp.in`);
    // step: Click on the instance dropdown
    // 2026-02-25 13:18:34 click
    await page.click(`xpath=//input[@id='client-dropdown']`);
    // step: Click on "pmqaautomationuat" option
    // 2026-02-25 13:18:42 click
    await page.click(`xpath=//div[@id='section-client']//div[normalize-space(text())='pmqaautomationuat']`);
    // step: Click on the Next button
    // 2026-02-25 13:18:50 click
    await page.click(`xpath=//input[@id='submit-button']`);
    // step: Click on the password field
    // 2026-02-25 13:18:59 click
    await page.click(`xpath=//input[@id='password']`);
    // step: Enter "ivp@123" in the password field
    // 2026-02-25 13:19:04 fill
    await page.fill(`xpath=//input[@id='password']`, `ivp@123`);
    // step: click on submit button
    // 2026-02-25 13:19:13 click
    await page.click(`xpath=//input[@id='submit-button']`);
    // step: Click on the menu icon on the top left
    // 2026-02-25 13:19:28 click
    await page.click(`xpath=//*[@data-testid='menu-icon']`);
    // step: Click on Feed Browser
    // 2026-02-25 13:19:32 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Feed Browser']/ancestor::div[@role='button'][1]`);
    // step: Click on the dropdown on the right of Data Source
    // 2026-02-25 13:21:46 click
    await page.click(`xpath=//div[@data-testid='pm_feedbrowser_header_left_dsdropdown']//button[@type='button']`);
    // step: Click on "GS_FeedBrowser" option
    // 2026-02-25 13:23:57 click
    await page.click(`xpath=//li[@role='option' and normalize-space(.)='GS_FeedBrowser']`);
    // step: Click on Transformed Feed
    // 2026-02-25 13:26:23 click
    await page.click(`xpath=//div[@data-testid='pm_div']//div[contains(@class,'pm_feedbrowser_header_right')]//div[@role='group']//button[normalize-space(.)='Transformed Feed']`);
    // step: Click on the dropdown on the right of Data Source
    // 2026-02-25 13:28:48 click
    await page.click(`xpath=//div[@data-testid='pm_feedbrowser_header_left_dsdropdown']//button[.//*[@data-testid='KeyboardArrowDownIcon']]`);
    // step: Click on "SecurityDataSource" option
    // 2026-02-25 13:31:01 click
    await page.click(`xpath=//ul[@role='listbox' and contains(@id,':r1a:-listbox')]//li[@role='option' and normalize-space(.)='SecurityDataSource']`);
});