import { test, expect } from '@playwright/test';

test('Generated Test', async ({ page }) => {
    await page.goto(`https://srv-pricemqarearch.ivp.in/IVPPriceMaster`);
    // step: Click on the email field
    // 2026-02-23 14:02:51 click
    await page.click(`xpath=//input[@id='username']`);
    // step: Enter "mdsohail@ivp.in" in the email field
    // 2026-02-23 14:02:57 fill
    await page.fill(`xpath=//input[@id='username']`, `mdsohail@ivp.in`);
    // step: Click on the instance dropdown
    // 2026-02-23 14:03:05 click
    await page.click(`xpath=//input[@id='client-dropdown']`);
    // step: Click on "pmqaautomationuat" option
    // 2026-02-23 14:03:13 click
    await page.click(`xpath=//div[@id='section-client']//div[normalize-space(text())='pmqaautomationuat']`);
    // step: Click on the Next button
    // 2026-02-23 14:03:24 click
    await page.click(`xpath=//input[@id='submit-button' and @type='submit' and normalize-space(@value)='Next']`);
    // step: Click on the password field
    // 2026-02-23 14:03:32 click
    await page.click(`xpath=//input[@id='password']`);
    // step: Enter "ivp@123" in the password field
    // 2026-02-23 14:03:36 fill
    await page.fill(`xpath=//input[@id='password']`, `ivp@123`);
    // step: Click on submit button
    // 2026-02-23 14:03:44 click
    await page.click(`xpath=//input[@id='submit-button']`);
    // step: Click on Calendar Button
    // 2026-02-23 14:03:57 click
    await page.click(`xpath=//div[@data-testid='pm_date_calendar']//button[.//*[@data-testid='CalendarMonthIcon']]`);
    // step: Click on year
    // 2026-02-23 14:04:07 click
    await page.click(`xpath=//button[@aria-label='calendar view is open, switch to year view']`);
    // step: Click on 2026
    // 2026-02-23 14:04:18 click
    await page.click(`xpath=//button[@role='radio' and contains(@class,'Mui-selected') and normalize-space(text())='2026']`);
    // step: Click on Apr
    // 2026-02-23 14:04:31 click
    await page.click(`xpath=//button[@role='radio' and @aria-label='April']`);
    // step: Click on 8
    // 2026-02-23 14:04:46 click
    await page.click(`xpath=//div[contains(normalize-space(.), 'New Securities')]/div[@data-testid='closeCountText']`);
    // step: Click on the menu icon on the top left
    // 2026-02-23 14:05:06 click
    await page.click(`xpath=//*[@data-testid='menu-icon']`);
    // step: Click on Challenge & Solicitation
    // 2026-02-23 14:05:16 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Challenge & Solicitation']/ancestor::div[@role='button'][1]`);
    // step: Click on Challenge
    // 2026-02-23 14:05:20 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Challenge']/ancestor::div[@role='button'][1]`);
});