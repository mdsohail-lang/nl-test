import { test, expect } from '@playwright/test';

test('Generated Test', async ({ page }) => {
    await page.goto(`https://srv-pricemqarearch.ivp.in/IVPPriceMaster`);
    // step: Click on email field
    // 2026-02-23 15:58:02 click
    await page.click(`xpath=//input[@id='username']`);
    // step: Enter "mdsohail@ivp.in" in email field
    // 2026-02-23 15:58:08 fill
    await page.fill(`xpath=//input[@id='username']`, `mdsohail@ivp.in`);
    // step: Click on the instance dropdown
    // 2026-02-23 15:58:15 click
    await page.click(`xpath=//input[@id='client-dropdown']`);
    // step: Click on "pmqaautomationuat" option
    // 2026-02-23 15:58:23 click
    await page.click(`xpath=//div[@id='section-client']//div[normalize-space(text())='pmqaautomationuat']`);
    // step: Click on the Next button
    // 2026-02-23 15:58:31 click
    await page.click(`xpath=//input[@id='submit-button']`);
    // step: Click on password field
    // 2026-02-23 15:58:41 click
    await page.click(`xpath=//input[@id='password']`);
    // step: Enter "ivp@123" in password field
    // 2026-02-23 15:58:46 fill
    await page.fill(`xpath=//input[@id='password']`, `ivp@123`);
    // step: Click the submit button
    // 2026-02-23 15:58:54 click
    await page.click(`xpath=//input[@id='submit-button']`);
    // step: Click on Calendar Button
    // 2026-02-23 15:59:07 click
    await page.click(`xpath=//div[@data-testid='pm_date_calendar']//button[@type='button' and .//*[@data-testid='CalendarMonthIcon']]`);
    // step: Click on year
    // 2026-02-23 15:59:08 click
    await page.click(`xpath=//div[@role='dialog']//button[contains(@class,'MuiPickersCalendarHeader-switchViewButton')]`);
    // step: Click on 2026
    // 2026-02-23 15:59:09 click
    await page.click(`xpath=//div[@role='dialog']//button[contains(@class,'MuiPickersYear-yearButton') and normalize-space(.)='2026']`);
    // step: Click on Apr
    // 2026-02-23 15:59:10 click
    await page.click(`xpath=//div[@role='dialog']//button[@role='radio' and (@aria-label='April' or normalize-space(.)='Apr')]`);
    // step: Click on 8
    // 2026-02-23 15:59:11 click
    await page.click(`xpath=//div[@role='dialog']//div[contains(@class,'MuiDateCalendar-root')]//button[@role='gridcell' and not(contains(@class,'MuiPickersDay-dayOutsideMonth')) and normalize-space(.)='8']`);
    // step: Click on the menu icon on the top left
    // 2026-02-23 15:59:29 click
    await page.click(`xpath=//*[@data-testid='menu-icon']`);
    // step: Click on Challenge & Solicitation
    // 2026-02-23 15:59:32 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Challenge & Solicitation']/ancestor::div[@role='button'][1]`);
    // step: Click on Challenge
    // 2026-02-23 15:59:35 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Challenge']/ancestor::div[@role='button'][1]`);
});