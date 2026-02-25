import { test, expect } from '@playwright/test';

test('Generated Test', async ({ page }) => {
    await page.goto(`https://srv-pricemqarearch.ivp.in/IVPPriceMaster`);
    // step: Click on email field
    // 2026-02-25 12:09:16 click
    await page.click(`xpath=//input[@id='username']`);
    // step: Enter "mdsohail@ivp.in" in email field
    // 2026-02-25 12:09:20 fill
    await page.fill(`xpath=//input[@id='username']`, `mdsohail@ivp.in`);
    // step: Click on the instance dropdown
    // 2026-02-25 12:09:30 click
    await page.click(`xpath=//input[@id='client-dropdown']`);
    // step: Click on "pmqaautomationuat" option
    // 2026-02-25 12:09:37 click
    await page.click(`xpath=//div[@id='section-client']//div[normalize-space(text())='pmqaautomationuat']`);
    // step: Click on the Next button
    // 2026-02-25 12:09:45 click
    await page.click(`xpath=//input[@id='submit-button']`);
    // step: Click on password field
    // 2026-02-25 12:09:51 click
    await page.click(`xpath=//input[@id='password']`);
    // step: Enter "ivp@123" in password field
    // 2026-02-25 12:09:57 fill
    await page.fill(`xpath=//input[@id='password']`, `ivp@123`);
    // step: Click the submit button
    // 2026-02-25 12:10:06 click
    await page.click(`xpath=//input[@id='submit-button']`);
    // step: Click on the menu icon on the top left
    // 2026-02-25 12:10:20 click
    await page.click(`xpath=//*[@data-testid='menu-icon']`);
    // step: Click on Feed Browser
    // 2026-02-25 12:10:24 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Feed Browser']/ancestor::div[@role='button'][1]`);
    // step: Click on the input field right of Data Source
    // 2026-02-25 12:14:40 click
    await page.click(`xpath=//*[@data-testid='pm_feedbrowser_header_left_dsdropdown']//button[@type='button']`);
    // step: Enter "GS_FeedBrowser" in the input field right of Data Source
    // 2026-02-25 12:18:53 fill
    await page.fill(`xpath=//div[@role='tooltip']//input[@role='combobox']`, `GS_FeedBrowser`);
    // step: Click on the dropdown list
    // 2026-02-25 12:21:11 click
    await page.click(`xpath=//div[@data-testid='pm_feedbrowser_header_left_dsdropdown']//button[@type='button']`);
    // step: Click on "GS_FeedBrowser" option
    // 2026-02-25 12:25:25 click
    await page.click(`xpath=//ul[@role='listbox' and contains(@class,'MuiAutocomplete-listbox')]//li[@role='option' and contains(normalize-space(.), 'GS_FeedBrowser')]`);
    // step: Click on Transformed Feed
    // 2026-02-25 12:31:52 click
    await page.click(`xpath=//div[contains(@class,'pm_feedbrowser_header_right')]//button[normalize-space(text())='Transformed Feed']`);
    // step: Click on the input field right of Data Source:
    // 2026-02-25 12:38:26 click
    await page.click(`xpath=//div[@data-testid='pm_feedbrowser_header_left_dsdropdown']//button`);
    // step: Enter "SecurityDataSource" in the input field right of Data Source:
    // 2026-02-25 12:42:43 fill
    await page.fill(`xpath=//input[@id=':r1d:']`, `SecurityDataSource`);
    // step: Click on the dropdown list
    // 2026-02-25 12:21:11 click
    await page.click(`xpath=//div[@data-testid='pm_feedbrowser_header_left_dsdropdown']//button[@type='button']`);
    // step: Click on "SecurityDataSource" option
    // 2026-02-25 12:25:25 click
    await page.click(`xpath=//ul[@role='listbox' and contains(@class,'MuiAutocomplete-listbox')]//li[@role='option' and contains(normalize-space(.), 'SecurityDataSource')]`);
    // step: Click on Calendar Button
    // 2026-02-25 12:47:03 click
    await page.click(`xpath=//div[@data-testid='pm_date_calendar']//div[contains(@class,'MuiInputAdornment-root')]//button[@type='button']`);
    // step: Click on year
    // 2026-02-25 12:51:07 click
    await page.click(`xpath=//div[@role='dialog']//button[contains(@class,'MuiPickersCalendarHeader-switchViewButton')]`);
    // step: Click on 2026
    // 2026-02-25 12:55:11 click
    await page.click(`xpath=//div[@role='dialog']//button[contains(@class,'MuiPickersYear-yearButton') and normalize-space(.)='2026']`);
    // step: Click on May
    // 2026-02-25 12:59:15 click
    await page.click(`xpath=//div[@role='dialog']//button[@role='radio' and (@aria-label='May' or normalize-space(.)='May')]`);
    // step: Click on 20
    // 2026-02-25 13:03:18 click
    await page.click(`xpath=//div[@role='dialog']//div[contains(@class,'MuiDateCalendar-root')]//button[@role='gridcell' and not(contains(@class,'MuiPickersDay-dayOutsideMonth')) and normalize-space(.)='20']`);
});