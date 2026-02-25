import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://srv-pricemqarearch.ivp.in/MFRAD/Login?path=%2FIVPPriceMaster');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('mdsohail@ivp.in');
  await page.getByRole('textbox', { name: 'Instance' }).click();
  await page.getByText('pmqaautomationuat').click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('ivp@123');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByTestId('menu-icon').click();
  await page.getByRole('button', { name: 'Feed Browser' }).click();
  await page.getByTestId('pm_feedbrowser_header_left_dsdropdown').getByRole('button').filter({ hasText: /^$/ }).click();
  await page.getByRole('combobox').fill('GS_FeedBrowser');
  await page.getByRole('option', { name: 'GS_FeedBrowser' }).click();
  await expect(page.getByTestId('pm_feedbrowser_grid')).toContainText('394');
  await page.getByRole('button', { name: 'Transformed Feed' }).click();
  await expect(page.getByTestId('pm_feedbrowser_grid')).toContainText('394');
  await page.locator('.pm_feedbrowser_header_right_reset > span > .MuiButtonBase-root').click();
  await expect(page.getByTestId('pm_feedbrowser_grid')).toContainText('394');
  await page.getByRole('button', { name: 'Transformed Feed' }).click();
  await expect(page.getByTestId('pm_feedbrowser_grid')).toContainText('394');
});