import { test, expect } from '@playwright/test';

test('Generated Test', async ({ page }) => {
    await page.goto(`https://srv-pricemqarearch.ivp.in/IVPPriceMaster`);
    // step: Click on email field
    // 2026-03-12 16:34:07 click
    await page.click(`xpath=//input[@id='username']`);
    // step: Enter "mdsohail@ivp.in" in email field
    // 2026-03-12 16:34:16 fill
    await page.fill(`xpath=//input[@id='username']`, `mdsohail@ivp.in`);
    // step: Click on the instance dropdown
    // 2026-03-12 16:34:31 click
    await page.click(`xpath=//input[@id='client-dropdown']`);
    // step: Wait 1 second
    // 2026-03-12 16:34:33 wait
    await page.waitForTimeout(1000);
    // step: Click on "pmqaautomationuat" option
    // 2026-03-12 16:34:44 click
    await page.click(`xpath=//div[@id='section-client']//div[normalize-space(.)='pmqaautomationuat']`);
    // step: Click on the Next button
    // 2026-03-12 16:34:55 click
    await page.click(`xpath=//input[@id='submit-button']`);
    // step: Click on the password field
    // 2026-03-12 16:35:09 click
    await page.click(`xpath=//input[@id='password']`);
    // step: Enter "ivp@123" in the password field
    // 2026-03-12 16:35:18 fill
    await page.fill(`xpath=//input[@id='password']`, `ivp@123`);
    // step: Click the submit button
    // 2026-03-12 16:35:31 click
    await page.click(`xpath=//input[@id='submit-button']`);
    // step: Validate that "Dashboard" text appears on the top left of the screen
    // 2026-03-12 16:35:36 validate
    await expect(page.locator(`body`)).toContainText(`Dashboard`);
    // step: Click on the hamburger icon on the top left
    // 2026-03-12 16:35:49 click
    await page.click(`xpath=//*[@data-testid='menu-icon']`);
    // step: Click on Challenge & Solicitation
    // 2026-03-12 16:35:55 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Challenge & Solicitation']/ancestor::div[@role='button'][1]`);
    // step: Click on Solicit
    // 2026-03-12 16:35:57 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Solicit']/ancestor::div[@role='button'][1]`);
    // step: Click on Okay on failure popup
    // 2026-03-12 16:36:14 click
    await page.click(`xpath=//*[@data-testid='pm_modal_wrapper']//button[@data-testid='modal_okay_button']`);
    // step: Click on the hamburger icon on the top left
    // 2026-03-12 16:36:26 click
    await page.click(`xpath=//*[@data-testid='menu-icon']`);
    // step: Click on Challenge & Solicitation
    // 2026-03-12 16:36:31 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Challenge & Solicitation']/ancestor::div[@role='button'][1]`);
    // step: Click on Challenge
    // 2026-03-12 16:36:32 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Challenge']/ancestor::div[@role='button'][1]`);
    // step: Validate "All Quotes" text
    // 2026-03-12 16:36:43 validate
    await expect(page.locator(`body`)).toContainText(`All Quotes`);
    // step: Click on the hamburger icon on the top left
    // 2026-03-12 16:37:03 click
    await page.click(`xpath=//*[@data-testid='menu-icon']`);
    // step: Click on Challenge & Solicitation
    // 2026-03-12 16:37:09 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Challenge & Solicitation']/ancestor::div[@role='button'][1]`);
    // step: Click on S&C Dashboard
    // 2026-03-12 16:37:10 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='S&C Dashboard']/ancestor::div[@role='button'][1]`);
    // step: Validate "Solicitation Summary" text
    // 2026-03-12 16:37:17 validate
    await expect(page.locator(`body`)).toContainText(`Solicitation Summary`);
    // step: Click on the hamburger icon on the top left
    // 2026-03-12 16:37:32 click
    await page.click(`xpath=//*[@data-testid='menu-icon']`);
    // step: Click on Configure
    // 2026-03-12 16:37:38 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Configure']/ancestor::div[@role='button'][1]`);
    // step: Click on Price List
    // 2026-03-12 16:37:39 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Price List']/ancestor::div[@role='button'][1]`);
    // step: Validate "Expand All" text
    // 2026-03-12 16:37:44 validate
    await expect(page.locator(`body`)).toContainText(`Expand All`);
    // step: Click on the hamburger icon on the top left
    // 2026-03-12 16:37:56 click
    await page.click(`xpath=//*[@data-testid='menu-icon']`);
    // step: Click on Configure
    // 2026-03-12 16:38:02 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Configure']/ancestor::div[@role='button'][1]`);
    // step: Click on Data Sources
    // 2026-03-12 16:38:03 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Data Sources']/ancestor::div[@role='button'][1]`);
    // step: Click on Pricing Data Source
    // 2026-03-12 16:38:05 click
    await page.click(`xpath=//*[contains(@class,'MuiPopper-root') or contains(@class,'MuiPopover-root') or @role='menu' or @role='listbox']//div[@aria-label='Pricing Data Source']/ancestor::div[@role='button'][1]`);
    // step: Validate "Expand All" text
    // 2026-03-12 16:38:11 validate
    await expect(page.locator(`body`)).toContainText(`Expand All`);
    // step: Click on the hamburger icon on the top left
    // 2026-03-12 16:38:23 click
    await page.click(`xpath=//*[@data-testid='menu-icon']`);
    // step: Click on Configure
    // 2026-03-12 16:38:28 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Configure']/ancestor::div[@role='button'][1]`);
    // step: Click on Common Configuration
    // 2026-03-12 16:38:30 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Common Configuration']/ancestor::div[@role='button'][1]`);
    // step: Validate "Configuration Types" text
    // 2026-03-12 16:38:35 validate
    await expect(page.locator(`body`)).toContainText(`Configuration Types`);
    // step: Click on the hamburger icon on the top left
    // 2026-03-12 16:38:49 click
    await page.click(`xpath=//*[@data-testid='menu-icon']`);
    // step: Click on Configure
    // 2026-03-12 16:38:54 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Configure']/ancestor::div[@role='button'][1]`);
    // step: Click on Workflows
    // 2026-03-12 16:38:55 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Workflows']/ancestor::div[@role='button'][1]`);
    // step: Validate "Status Configuration" text
    // 2026-03-12 16:39:02 validate
    await expect(page.locator(`body`)).toContainText(`Status Configuration`);
    // step: Click on the hamburger icon on the top left
    // 2026-03-12 16:39:14 click
    await page.click(`xpath=//*[@data-testid='menu-icon']`);
    // step: Click on Configure
    // 2026-03-12 16:39:19 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Configure']/ancestor::div[@role='button'][1]`);
    // step: Click on Proxy Pricing Template
    // 2026-03-12 16:39:21 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Proxy Pricing Template']/ancestor::div[@role='button'][1]`);
    // step: Validate "Templates" text
    // 2026-03-12 16:39:26 validate
    await expect(page.locator(`body`)).toContainText(`Templates`);
    // step: Click on the hamburger icon on the top left
    // 2026-03-12 16:39:41 click
    await page.click(`xpath=//*[@data-testid='menu-icon']`);
    // step: Click on Configure
    // 2026-03-12 16:39:47 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Configure']/ancestor::div[@role='button'][1]`);
    // step: Click on Quote Analytics Set-up
    // 2026-03-12 16:39:48 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Quote Analytics Set-up']/ancestor::div[@role='button'][1]`);
    // step: Validate "Rules Configuration" text
    // 2026-03-12 16:39:53 validate
    await expect(page.locator(`body`)).toContainText(`Rules Configuration`);
    // step: Click on the hamburger icon on the top left
    // 2026-03-12 16:40:06 click
    await page.click(`xpath=//*[@data-testid='menu-icon']`);
    // step: Click on Configure
    // 2026-03-12 16:40:11 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Configure']/ancestor::div[@role='button'][1]`);
    // step: Click on Transport Tasks
    // 2026-03-12 16:40:12 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Transport Tasks']/ancestor::div[@role='button'][1]`);
    // step: Validate "Task Names" text
    // 2026-03-12 16:40:17 validate
    await expect(page.locator(`body`)).toContainText(`Task Names`);
    // step: Click on the hamburger icon on the top left
    // 2026-03-12 16:40:34 click
    await page.click(`xpath=//*[@data-testid='menu-icon']`);
    // step: Click on Task Status
    // 2026-03-12 16:40:37 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Task Status']/ancestor::div[@role='button'][1]`);
    // step: Validate "Get Task" text
    // 2026-03-12 16:40:43 validate
    await expect(page.locator(`body`)).toContainText(`Get Task`);
    // step: Click on the hamburger icon on the top left
    // 2026-03-12 16:41:00 click
    await page.click(`xpath=//*[@data-testid='menu-icon']`);
    // step: Click on Review Level Management
    // 2026-03-12 16:41:04 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Review Level Management']/ancestor::div[@role='button'][1]`);
    // step: Validate "Review Management" text
    // 2026-03-12 16:41:09 validate
    await expect(page.locator(`body`)).toContainText(`Review Management`);
    // step: Click on the hamburger icon on the top left
    // 2026-03-12 16:41:23 click
    await page.click(`xpath=//*[@data-testid='menu-icon']`);
    // step: Click on Access Control
    // 2026-03-12 16:41:28 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Access Control']/ancestor::div[@role='button'][1]`);
    // step: Click on User Management
    // 2026-03-12 16:41:40 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//span[normalize-space(text())='User Management']/ancestor::div[@role='button'][1]`);
    // step: Validate "Accounts" text
    // 2026-03-12 16:41:47 validate
    await expect(page.locator(`body`)).toContainText(`Accounts`);
    // step: Click on the hamburger icon on the top left
    // 2026-03-12 16:42:02 click
    await page.click(`xpath=//*[@data-testid='menu-icon']`);
    // step: Click on Access Control
    // 2026-03-12 16:42:06 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Access Control']/ancestor::div[@role='button'][1]`);
    // step: Click on Business Calendar
    // 2026-03-12 16:42:08 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Business Calendar']/ancestor::div[@role='button'][1]`);
    // step: Validate "Calendar List" text
    // 2026-03-12 16:42:14 validate
    await expect(page.locator(`body`)).toContainText(`Calendar List`);
});