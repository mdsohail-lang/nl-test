import { test, expect } from '@playwright/test';

test('Generated Test', async ({ page }) => {
    await page.goto(`https://srv-pricemqarearch.ivp.in/IVPPriceMaster`);
    // step: Click on email field
    // 2026-02-23 13:57:50 click
    await page.click(`xpath=//input[@id='username']`);
    // step: Enter "mdsohail@ivp.in" in email field
    // 2026-02-23 13:57:55 fill
    await page.fill(`xpath=//input[@id='username']`, `mdsohail@ivp.in`);
    // step: Click on the instance dropdown
    // 2026-02-23 13:58:03 click
    await page.click(`xpath=//input[@id='client-dropdown']`);
    // step: Click on "pmqaautomationuat" option
    // 2026-02-23 13:58:11 click
    await page.click(`xpath=//div[@id='section-client']//div[normalize-space(.)='pmqaautomationuat']`);
    // step: Click on the Next button
    // 2026-02-23 13:58:18 click
    await page.click(`xpath=//input[@id='submit-button']`);
    // step: Click on the password field
    // 2026-02-23 13:58:25 click
    await page.click(`xpath=//input[@id='password']`);
    // step: Enter "ivp@123" in the password field
    // 2026-02-23 13:58:29 fill
    await page.fill(`xpath=//input[@id='password' and @type='password']`, `ivp@123`);
    // step: click on submit button
    // 2026-02-23 13:58:43 click
    await page.click(`xpath=//input[@id='submit-button']`);
    // step: Click on Calendar Button
    // 2026-02-23 13:58:58 click
    await page.click(`xpath=//div[@data-testid='pm_date_calendar']//button[.//*[@data-testid='CalendarMonthIcon']]`);
    // step: Click on year
    // 2026-02-23 13:59:09 click
    await page.click(`xpath=//div[@role='dialog']//button[contains(normalize-space(@aria-label),'switch to year view')]`);
    // step: Click on 2026
    // 2026-02-23 13:59:28 click
    await page.click(`xpath=//button[@role='radio' and contains(@class,'Mui-selected') and normalize-space(.)='2026']`);
    // step: Click on Apr
    // 2026-02-23 13:59:40 click
    await page.click(`xpath=//div[@role='dialog']//button[@role='radio' and @aria-label='April' and normalize-space(text())='Apr']`);
    // step: Click on 8
    // 2026-02-23 13:59:54 click
    await page.click(`xpath=//div[@role='dialog']//div[contains(@class,'MuiDateCalendar-root')]//button[@role='gridcell' and normalize-space(.)='8']`);
    // step: Click on the menu icon on the top left
    // 2026-02-23 14:00:13 click
    await page.click(`xpath=//*[@data-testid='menu-icon']`);
    // step: Click on Challenge & Solicitation
    // 2026-02-23 14:00:18 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Challenge & Solicitation']/ancestor::div[@role='button'][1]`);
    // step: Click on Challenge
    // 2026-02-23 14:00:22 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Challenge']/ancestor::div[@role='button'][1]`);
});