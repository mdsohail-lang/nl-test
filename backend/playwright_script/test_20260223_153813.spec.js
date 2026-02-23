import { test, expect } from '@playwright/test';

test('Generated Test', async ({ page }) => {
    await page.goto(`https://srv-pricemqarearch.ivp.in/IVPPriceMaster`);
    // step: Click on email field
    // 2026-02-23 15:38:13 click
    await page.click(`xpath=//input[@id='username']`);
    // step: Enter "mdsohail@ivp.in" in email field
    // 2026-02-23 15:38:19 fill
    await page.fill(`xpath=//input[@id='username']`, `mdsohail@ivp.in`);
    // step: Click on the instance dropdown
    // 2026-02-23 15:38:26 click
    await page.click(`xpath=//input[@id='client-dropdown']`);
    // step: Click on "pmqaautomationuat" option
    // 2026-02-23 15:38:34 click
    await page.click(`xpath=//div[@id='section-client']//div[normalize-space(text())='pmqaautomationuat']`);
    // step: Click on the Next button
    // 2026-02-23 15:38:43 click
    await page.click(`xpath=//input[@id='submit-button' and @type='submit' and normalize-space(@value)='Next']`);
    // step: Click on the password field
    // 2026-02-23 15:38:52 click
    await page.click(`xpath=//input[@id='password']`);
    // step: Enter "ivp@123" in the password field
    // 2026-02-23 15:38:56 fill
    await page.fill(`xpath=//input[@id='password']`, `ivp@123`);
    // step: Click the submit button
    // 2026-02-23 15:39:05 click
    await page.click(`xpath=//input[@id='submit-button' and @type='submit']`);
    // step: Click on Calendar Button
    // 2026-02-23 15:39:19 click
    await page.click(`xpath=//div[@data-testid='pm_date_calendar']//button[.//*[@data-testid='CalendarMonthIcon']]`);
    // step: Click on year
    // 2026-02-23 15:39:23 click
    await page.click(`xpath=//div[@role='dialog']//button[contains(@class,'MuiPickersCalendarHeader-switchViewButton')]`);
    // step: Click on 2026
    // 2026-02-23 15:39:33 click
    await page.click(`xpath=//div[@role='dialog']//button[contains(@class,'MuiPickersYear-yearButton') and normalize-space(.)='2026']`);
    // step: Click on Apr
    // 2026-02-23 15:39:34 click
    await page.click(`xpath=//div[@role='dialog']//button[@role='radio' and (@aria-label='April' or normalize-space(.)='Apr')]`);
    // step: Click on 8
    // 2026-02-23 15:39:36 click
    await page.click(`xpath=//div[@role='dialog']//div[contains(@class,'MuiDateCalendar-root')]//button[@role='gridcell' and not(contains(@class,'MuiPickersDay-dayOutsideMonth')) and normalize-space(.)='8']`);
    // step: Click on the menu icon on the top left
    // 2026-02-23 15:39:51 click
    await page.click(`xpath=//*[@data-testid='menu-icon']`);
    // step: Click on Challenge & Solicitation
    // 2026-02-23 15:39:55 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Challenge & Solicitation']/ancestor::div[@role='button'][1]`);
    // step: Click on Challenge
    // 2026-02-23 15:39:59 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Challenge']/ancestor::div[@role='button'][1]`);
    // step: Click on Tagged item on the right of All Quotes
    // 2026-02-23 15:40:30 click
    await page.click(`xpath=//div[contains(@class,'pm_challenge_navbar_toggle')]//span[normalize-space(text())='Tagged (4)']/ancestor::div[contains(@class,'pm_challenge_toggle_stack')][1]`);
});