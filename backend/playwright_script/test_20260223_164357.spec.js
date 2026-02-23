import { test, expect } from '@playwright/test';

test('Generated Test', async ({ page }) => {
    await page.goto(`https://srv-pricemqarearch.ivp.in/IVPPriceMaster`);
    // step: Click on the email field
    // 2026-02-23 16:43:57 click
    await page.click(`xpath=//input[@id='username']`);
    // step: Enter "mdsohail@ivp.in" in the email field
    // 2026-02-23 16:44:01 fill
    await page.fill(`xpath=//input[@id='username']`, `mdsohail@ivp.in`);
    // step: Click on the instance dropdown
    // 2026-02-23 16:44:10 click
    await page.click(`xpath=//input[@id='client-dropdown']`);
    // step: Click on "pmqaautomationuat" option
    // 2026-02-23 16:44:20 click
    await page.click(`xpath=//div[@id='section-client']//div[normalize-space(text())='pmqaautomationuat']`);
    // step: Click on the Next button
    // 2026-02-23 16:44:29 click
    await page.click(`xpath=//input[@id='submit-button']`);
    // step: Click on password field
    // 2026-02-23 16:44:36 click
    await page.click(`xpath=//input[@id='password']`);
    // step: Enter "ivp@123" in password field
    // 2026-02-23 16:44:41 fill
    await page.fill(`xpath=//input[@id='password']`, `ivp@123`);
    // step: Click the submit button
    // 2026-02-23 16:44:47 click
    await page.click(`xpath=//input[@id='submit-button' and @type='submit']`);
    // step: Click on Calendar Button
    // 2026-02-23 16:45:02 click
    await page.click(`xpath=//div[@data-testid='pm_date_calendar']//button[.//*[@data-testid='CalendarMonthIcon']]`);
    // step: Click on year
    // 2026-02-23 16:45:04 click
    await page.click(`xpath=//div[@role='dialog']//button[contains(@class,'MuiPickersCalendarHeader-switchViewButton')]`);
    // step: Click on 2026
    // 2026-02-23 16:45:05 click
    await page.click(`xpath=//div[@role='dialog']//button[contains(@class,'MuiPickersYear-yearButton') and normalize-space(.)='2026']`);
    // step: Click on Apr
    // 2026-02-23 16:45:06 click
    await page.click(`xpath=//div[@role='dialog']//button[@role='radio' and (@aria-label='April' or normalize-space(.)='Apr')]`);
    // step: Click on 8
    // 2026-02-23 16:45:07 click
    await page.click(`xpath=//div[@role='dialog']//div[contains(@class,'MuiDateCalendar-root')]//button[@role='gridcell' and not(contains(@class,'MuiPickersDay-dayOutsideMonth')) and normalize-space(.)='8']`);
    // step: Click on the menu icon on the top left
    // 2026-02-23 16:45:21 click
    await page.click(`xpath=//*[@data-testid='menu-icon']`);
    // step: Click on Challenge & Solicitation
    // 2026-02-23 16:45:24 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Challenge & Solicitation']/ancestor::div[@role='button'][1]`);
    // step: Click on Challenge
    // 2026-02-23 16:45:29 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Challenge']/ancestor::div[@role='button'][1]`);
    // step: Click on Tagged item on the right of All Quotes
    // 2026-02-23 16:46:15 click
    await page.click(`xpath=//span[@class='pm_challenge_toggle_text_content_Tagged' and normalize-space(text())='Tagged (0)']`);
});