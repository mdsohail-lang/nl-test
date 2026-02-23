import { test, expect } from '@playwright/test';

test('Generated Test', async ({ page }) => {
    await page.goto(`https://srv-pricemqarearch.ivp.in/IVPPriceMaster`);
    // step: Click on the email field
    // 2026-02-23 17:42:58 click
    await page.click(`xpath=//input[@id='username']`);
    // step: Enter "mdsohail@ivp.in" in the email field
    // 2026-02-23 17:43:02 fill
    await page.fill(`xpath=//input[@id='username']`, `mdsohail@ivp.in`);
    // step: Click on the instance dropdown
    // 2026-02-23 17:43:11 click
    await page.click(`xpath=//input[@id='client-dropdown']`);
    // step: Click on "pmqaautomationuat" option
    // 2026-02-23 17:43:17 click
    await page.click(`xpath=//div[@id='section-client']//div[normalize-space(text())='pmqaautomationuat']`);
    // step: Click on the Next button
    // 2026-02-23 17:43:25 click
    await page.click(`xpath=//input[@id='submit-button']`);
    // step: Click on the password field
    // 2026-02-23 17:43:36 click
    await page.click(`xpath=//input[@id='password']`);
    // step: Enter "ivp@123" in the password field
    // 2026-02-23 17:43:40 fill
    await page.fill(`xpath=//input[@id='password' and @type='password']`, `ivp@123`);
    // step: click on submit button
    // 2026-02-23 17:43:49 click
    await page.click(`xpath=//input[@id='submit-button']`);
    // step: Click on "Pricing Blotter" text element on top left
    // 2026-02-23 17:44:05 click
    await page.click(`xpath=//div[@aria-label='Pricing Blotter']/ancestor::button[@role='tab']`);
    // step: Click on Calendar Button
    // 2026-02-23 17:44:36 click
    await page.click(`xpath=//div[@data-testid='pm_date_calendar']//button[.//*[@data-testid='CalendarMonthIcon']]`);
    // step: Click on year
    // 2026-02-23 17:44:38 click
    await page.click(`xpath=//div[@role='dialog']//button[contains(@class,'MuiPickersCalendarHeader-switchViewButton')]`);
    // step: Click on 2026
    // 2026-02-23 17:44:40 click
    await page.click(`xpath=//div[@role='dialog']//button[contains(@class,'MuiPickersYear-yearButton') and normalize-space(.)='2026']`);
    // step: Click on Apr
    // 2026-02-23 17:44:41 click
    await page.click(`xpath=//div[@role='dialog']//button[@role='radio' and (@aria-label='April' or normalize-space(.)='Apr')]`);
    // step: Click on 8
    // 2026-02-23 17:44:43 click
    await page.click(`xpath=//div[@role='dialog']//div[contains(@class,'MuiDateCalendar-root')]//button[@role='gridcell' and not(contains(@class,'MuiPickersDay-dayOutsideMonth')) and normalize-space(.)='8']`);
});