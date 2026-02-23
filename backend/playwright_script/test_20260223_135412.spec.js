import { test, expect } from '@playwright/test';

test('Generated Test', async ({ page }) => {
    await page.goto(`https://srv-pricemqarearch.ivp.in/IVPPriceMaster`);
    // step: Click on email field
    // 2026-02-23 13:54:12 click
    await page.click(`xpath=//input[@id='username']`);
    // step: Enter "mdsohail@ivp.in" in email field
    // 2026-02-23 13:54:17 fill
    await page.fill(`xpath=//input[@id='username']`, `mdsohail@ivp.in`);
    // step: Click on the instance dropdown
    // 2026-02-23 13:54:26 click
    await page.click(`xpath=//input[@id='client-dropdown']`);
    // step: Click on "pmqaautomationuat" option
    // 2026-02-23 13:54:33 click
    await page.click(`xpath=//div[normalize-space(text())='pmqaautomationuat' and contains(@class,'css-1vcgz62')]`);
    // step: Click on the Next button
    // 2026-02-23 13:54:40 click
    await page.click(`xpath=//input[@id='submit-button' and @type='submit']`);
    // step: Click on password field
    // 2026-02-23 13:54:47 click
    await page.click(`xpath=//input[@id='password']`);
    // step: Enter "ivp@123" in password field
    // 2026-02-23 13:54:51 fill
    await page.fill(`xpath=//input[@id='password']`, `ivp@123`);
    // step: click on submit button
    // 2026-02-23 13:54:59 click
    await page.click(`xpath=//input[@id='submit-button']`);
    // step: Click on Calendar Button
    // 2026-02-23 13:55:15 click
    await page.click(`xpath=//div[@data-testid='pm_date_calendar']//button[@type='button' and contains(@class,'MuiIconButton-root')]`);
    // step: Click on year
    // 2026-02-23 13:55:30 click
    await page.click(`xpath=//button[@aria-label='calendar view is open, switch to year view']`);
    // step: Click on 2026
    // 2026-02-23 13:55:43 click
    await page.click(`xpath=//button[contains(@class,'MuiPickersYear-yearButton') and normalize-space(text())='2026']`);
    // step: Click on Apr
    // 2026-02-23 13:55:53 click
    await page.click(`xpath=//button[@role='radio' and @aria-label='April' and normalize-space(text())='Apr']`);
    // step: Click on 8
    // 2026-02-23 13:56:07 click
    await page.click(`xpath=//div[@role='dialog']//div[contains(@class,'MuiDateCalendar-root')]//button[@role='gridcell' and normalize-space(.)='8']`);
    // step: Click on the menu icon on the top left
    // 2026-02-23 13:56:24 click
    await page.click(`xpath=//*[@data-testid='menu-icon']`);
    // step: Click on Challenge & Solicitation
    // 2026-02-23 13:56:28 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Challenge & Solicitation']/ancestor::div[@role='button'][1]`);
    // step: Click on Challenge
    // 2026-02-23 13:56:31 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Challenge']/ancestor::div[@role='button'][1]`);
});