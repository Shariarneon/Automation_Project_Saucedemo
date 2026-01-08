import { test, expect } from '@playwright/test';
import { SauceActions } from '../pages/actions.js';

test('Q1: Locked user error validation', async ({ page }) => {
    const sauce = new SauceActions(page);
    await sauce.gotoLoginPage();
    // await page.pause();
    await sauce.login('locked_out_user', 'secret_sauce');
    await expect(sauce.locators.errorBox).toContainText('Sorry, this user has been locked out');
});