import { test, expect } from '@playwright/test';

test('Generated Test', async ({ page }) => {
    await page.goto(`https://srv-pricemqarearch.ivp.in/IVPPriceMaster`);
    // step: Click on email field
    // 2026-02-23 16:50:20 click
    await page.click(`xpath=//input[@id='username']`);
    // step: Enter "mdsohail@ivp.in" in email field
    // 2026-02-23 16:50:29 fill
    await page.fill(`xpath=//input[@id='username']`, `mdsohail@ivp.in`);
    // step: Click on the instance dropdown
    // 2026-02-23 16:50:38 click
    await page.click(`xpath=//input[@id='client-dropdown']`);
    // step: Click on "pmqaautomationuat" option
    // 2026-02-23 16:50:48 click
    await page.click(`xpath=//div[@id='section-client']//div[normalize-space(text())='pmqaautomationuat']`);
    // step: Click on the Next button
    // 2026-02-23 16:50:56 click
    await page.click(`xpath=//input[@id='submit-button']`);
    // step: Click on the password field
    // 2026-02-23 16:51:04 click
    await page.click(`xpath=//input[@id='password' and @type='password']`);
    // step: Enter "ivp@123" in the password field
    // 2026-02-23 16:51:08 fill
    await page.fill(`xpath=//input[@id='password']`, `ivp@123`);
    // step: Click the submit button
    // 2026-02-23 16:51:16 click
    await page.click(`xpath=//input[@id='submit-button']`);
    // step: Click on Calendar Button
    // 2026-02-23 16:51:29 click
    await page.click(`xpath=//div[@data-testid='pm_date_calendar']//button[@type='button' and contains(@class,'MuiIconButton-root')]`);
    // step: Click on year
    // 2026-02-23 16:51:31 click
    await page.click(`xpath=//div[@role='dialog']//button[contains(@class,'MuiPickersCalendarHeader-switchViewButton')]`);
    // step: Click on 2026
    // 2026-02-23 16:51:32 click
    await page.click(`xpath=//div[@role='dialog']//button[contains(@class,'MuiPickersYear-yearButton') and normalize-space(.)='2026']`);
    // step: Click on Apr
    // 2026-02-23 16:51:33 click
    await page.click(`xpath=//div[@role='dialog']//button[@role='radio' and (@aria-label='April' or normalize-space(.)='Apr')]`);
    // step: Click on 8
    // 2026-02-23 16:51:35 click
    await page.click(`xpath=//div[@role='dialog']//div[contains(@class,'MuiDateCalendar-root')]//button[@role='gridcell' and not(contains(@class,'MuiPickersDay-dayOutsideMonth')) and normalize-space(.)='8']`);
    // step: Click on the menu icon on the top left
    // 2026-02-23 16:51:50 click
    await page.click(`xpath=//*[@data-testid='menu-icon']`);
    // step: Click on Challenge & Solicitation
    // 2026-02-23 16:51:53 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Challenge & Solicitation']/ancestor::div[@role='button'][1]`);
    // step: Click on Challenge
    // 2026-02-23 16:51:56 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Challenge']/ancestor::div[@role='button'][1]`);
    // step: Click on Tagged item on the right of All Quotes
    // 2026-02-23 16:52:31 click
    await page.click(`xpath=//div[@data-testid='pm_div']//span[normalize-space(text())='Tagged (4)']/ancestor::div[contains(@class,'pm_challenge_toggle_stack')][1]`);
    // step: Double click on item with Asset_Id "9Z913614927"
    // 2026-02-23 16:52:49 double click
    await page.dblclick(`xpath=//div[@role='gridcell' and @title='9Z913614927' and normalize-space(.)='9Z913614927']`);
    // step: Click on the close button on top right
    // 2026-02-23 16:53:29 click
    await page.click(`xpath=//div[@data-testid='AAPopupContainer']//button[.//*[@data-testid='CloseIcon']]`);
});