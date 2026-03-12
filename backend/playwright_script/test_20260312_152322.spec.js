import { test, expect } from '@playwright/test';

test('Generated Test', async ({ page }) => {
    await page.goto(`https://srv-pricemqarearch.ivp.in/IVPPriceMaster`);
    // step: Click on email field
    // 2026-03-12 15:23:22 click
    await page.click(`xpath=//input[@id='username']`);
    // step: Enter "mdsohail@ivp.in" in email field
    // 2026-03-12 15:23:30 fill
    await page.fill(`xpath=//input[@id='username']`, `mdsohail@ivp.in`);
    // step: Click on the instance dropdown
    // 2026-03-12 15:23:42 click
    await page.click(`xpath=//input[@id='client-dropdown']`);
    // step: Wait 1 second
    // 2026-03-12 15:23:44 wait
    await page.waitForTimeout(1000);
    // step: Click on "pmqaautomationuat" option
    // 2026-03-12 15:23:53 click
    await page.click(`xpath=//div[@id='section-client']//div[normalize-space(.)='pmqaautomationuat']`);
    // step: Click on the Next button
    // 2026-03-12 15:24:04 click
    await page.click(`xpath=//input[@id='submit-button']`);
    // step: Click on password field
    // 2026-03-12 15:24:18 click
    await page.click(`xpath=//input[@id='password']`);
    // step: Enter "ivp@123" in password field
    // 2026-03-12 15:24:27 fill
    await page.fill(`xpath=//input[@id='password']`, `ivp@123`);
    // step: Click the submit button
    // 2026-03-12 15:24:38 click
    await page.click(`xpath=//input[@id='submit-button']`);
    // step: Validate that "Dashboard" text appears on the top left of the screen
    // 2026-03-12 15:24:42 validate
    await expect(page.locator(`xpath=//div[@aria-label='Dashboard']/ancestor::button[@role='tab'][1]`)).toContainText(`Dashboard`);
    // step: Click on the hamburger icon on the top left
    // 2026-03-12 15:24:54 click
    await page.click(`xpath=//*[@data-testid='menu-icon']`);
    // step: Click on Challenge & Solicitation
    // 2026-03-12 15:24:59 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenu')]//div[@aria-label='Challenge & Solicitation']/ancestor::div[@role='button'][1]`);
    // step: Click on Solicit
    // 2026-03-12 15:25:03 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Solicit']/ancestor::div[@role='button'][1]`);
    // step: Click on Okay on failure popup
    // 2026-03-12 15:25:23 click
    await page.click(`xpath=//*[@data-testid='pm_modal_wrapper']//button[@data-testid='modal_okay_button']`);
    // step: Click on the hamburger icon on the top left
    // 2026-03-12 15:25:33 click
    await page.click(`xpath=//*[@data-testid='menu-icon']`);
    // step: Click on Challenge & Solicitation
    // 2026-03-12 15:25:40 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Challenge & Solicitation']/ancestor::div[@role='button'][1]`);
    // step: Click on Challenge
    // 2026-03-12 15:25:41 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Challenge']/ancestor::div[@role='button'][1]`);
    // step: Validate "All Quotes" text
    // 2026-03-12 15:25:46 validate
    await expect(page.locator(`body`)).toContainText(`All Quotes`);
    // step: Click on the hamburger icon on the top left
    // 2026-03-12 15:26:05 click
    await page.click(`xpath=//*[@data-testid='menu-icon']`);
    // step: Click on Challenge & Solicitation
    // 2026-03-12 15:26:10 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Challenge & Solicitation']/ancestor::div[@role='button'][1]`);
    // step: Click on S&C Dashboard
    // 2026-03-12 15:26:12 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='S&C Dashboard']/ancestor::div[@role='button'][1]`);
    // step: Validate "Solicitation Summary" text
    // 2026-03-12 15:26:21 validate
    await expect(page.locator(`body`)).toContainText(`Solicitation Summary`);
    // step: Click on the hamburger icon on the top left
    // 2026-03-12 15:26:44 click
    await page.click(`xpath=//*[@data-testid='menu-icon']`);
    // step: Click on Configure
    // 2026-03-12 15:26:49 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Configure']/ancestor::div[@role='button'][1]`);
    // step: Click on Price List
    // 2026-03-12 15:26:51 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Price List']/ancestor::div[@role='button'][1]`);
    // step: Validate "Expand All" text
    // 2026-03-12 15:26:56 validate
    await expect(page.locator(`body`)).toContainText(`Expand All`);
    // step: Click on the hamburger icon on the top left
    // 2026-03-12 15:27:11 click
    await page.click(`xpath=//*[@data-testid='menu-icon']`);
    // step: Click on Configure
    // 2026-03-12 15:27:17 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Configure']/ancestor::div[@role='button'][1]`);
    // step: Click on Data Sources
    // 2026-03-12 15:27:18 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Data Sources']/ancestor::div[@role='button'][1]`);
    // step: Click on Pricing Data Source
    // 2026-03-12 15:27:20 click
    await page.click(`xpath=//*[contains(@class,'MuiPopper-root') or contains(@class,'MuiPopover-root') or @role='menu' or @role='listbox']//div[@aria-label='Pricing Data Source']/ancestor::div[@role='button'][1]`);
    // step: Validate "Expand All" text
    // 2026-03-12 15:27:27 validate
    await expect(page.locator(`body`)).toContainText(`Expand All`);
    // step: Click on the hamburger icon on the top left
    // 2026-03-12 15:27:39 click
    await page.click(`xpath=//*[@data-testid='menu-icon']`);
    // step: Click on Configure
    // 2026-03-12 15:27:45 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Configure']/ancestor::div[@role='button'][1]`);
    // step: Click on Common Configuration
    // 2026-03-12 15:27:46 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Common Configuration']/ancestor::div[@role='button'][1]`);
    // step: Validate "Configuration Types" text
    // 2026-03-12 15:27:51 validate
    await expect(page.locator(`body`)).toContainText(`Configuration Types`);
    // step: Click on the hamburger icon on the top left
    // 2026-03-12 15:28:04 click
    await page.click(`xpath=//*[@data-testid='menu-icon']`);
    // step: Click on Configure
    // 2026-03-12 15:28:09 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Configure']/ancestor::div[@role='button'][1]`);
    // step: Click on Workflows
    // 2026-03-12 15:28:11 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Workflows']/ancestor::div[@role='button'][1]`);
    // step: Validate "Status Configuration" text
    // 2026-03-12 15:28:17 validate
    await expect(page.locator(`body`)).toContainText(`Status Configuration`);
    // step: Click on the hamburger icon on the top left
    // 2026-03-12 15:28:30 click
    await page.click(`xpath=//*[@data-testid='menu-icon']`);
    // step: Click on Configure
    // 2026-03-12 15:28:36 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Configure']/ancestor::div[@role='button'][1]`);
    // step: Click on Proxy Pricing Template
    // 2026-03-12 15:28:37 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Proxy Pricing Template']/ancestor::div[@role='button'][1]`);
    // step: Validate "Templates" text
    // 2026-03-12 15:28:44 validate
    await expect(page.locator(`body`)).toContainText(`Templates`);
    // step: Click on the hamburger icon on the top left
    // 2026-03-12 15:28:56 click
    await page.click(`xpath=//*[@data-testid='menu-icon']`);
    // step: Click on Configure
    // 2026-03-12 15:29:02 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Configure']/ancestor::div[@role='button'][1]`);
    // step: Click on Quote Analytics Set-up
    // 2026-03-12 15:29:03 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Quote Analytics Set-up']/ancestor::div[@role='button'][1]`);
    // step: Validate "Rules Configuration" text
    // 2026-03-12 15:29:09 validate
    await expect(page.locator(`body`)).toContainText(`Rules Configuration`);
    // step: Click on the hamburger icon on the top left
    // 2026-03-12 15:29:22 click
    await page.click(`xpath=//*[@data-testid='menu-icon']`);
    // step: Click on Configure
    // 2026-03-12 15:29:28 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Configure']/ancestor::div[@role='button'][1]`);
    // step: Click on Transport Tasks
    // 2026-03-12 15:29:30 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Transport Tasks']/ancestor::div[@role='button'][1]`);
    // step: Validate "Task Names" text
    // 2026-03-12 15:29:34 validate
    await expect(page.locator(`body`)).toContainText(`Task Names`);
    // step: Click on the hamburger icon on the top left
    // 2026-03-12 15:29:46 click
    await page.click(`xpath=//*[@data-testid='menu-icon']`);
    // step: Click on Task Status
    // 2026-03-12 15:29:51 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Task Status']/ancestor::div[@role='button'][1]`);
    // step: Validate "Get Task" text
    // 2026-03-12 15:29:57 validate
    await expect(page.locator(`body`)).toContainText(`Get Task`);
    // step: Click on the hamburger icon on the top left
    // 2026-03-12 15:30:11 click
    await page.click(`xpath=//*[@data-testid='menu-icon']`);
    // step: Click on Review Level Management
    // 2026-03-12 15:30:15 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Review Level Management']/ancestor::div[@role='button'][1]`);
    // step: Validate "Review Management" text
    // 2026-03-12 15:30:23 validate
    await expect(page.locator(`body`)).toContainText(`Review Management`);
    // step: Click on the hamburger icon on the top left
    // 2026-03-12 15:30:36 click
    await page.click(`xpath=//*[@data-testid='menu-icon']`);
    // step: Click on Access Control
    // 2026-03-12 15:30:41 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Access Control']/ancestor::div[@role='button'][1]`);
    // step: Click on User Management
    // 2026-03-12 15:30:46 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='User Management']/ancestor::div[@role='button'][1]`);
    // step: Validate "Accounts" text
    // 2026-03-12 15:30:53 validate
    await expect(page.locator(`body`)).toContainText(`Accounts`);
    // step: Click on the hamburger icon on the top left
    // 2026-03-12 15:31:08 click
    await page.click(`xpath=//*[@data-testid='menu-icon']`);
    // step: Click on Access Control
    // 2026-03-12 15:31:13 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Access Control']/ancestor::div[@role='button'][1]`);
    // step: Click on Business Calendar
    // 2026-03-12 15:31:15 click
    await page.click(`xpath=//*[contains(@class,'IvpLeftMenuDrawer')]//div[@aria-label='Business Calendar']/ancestor::div[@role='button'][1]`);
    // step: Validate "Calendar List" text
    // 2026-03-12 15:31:20 validate
    await expect(page.locator(`body`)).toContainText(`Calendar List`);
});