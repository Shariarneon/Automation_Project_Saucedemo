import { test, expect } from '@playwright/test';
import { SauceActions } from '../pages/actions.js';

test('Q3: Performance glitch user with filtering', async ({ page }) => {
    const sauce = new SauceActions(page);
    await sauce.gotoLoginPage();
    // await page.pause();
    await sauce.login('performance_glitch_user', 'secret_sauce');
    await sauce.resetAppState();
    await sauce.locators.sortDropdown.selectOption('za');
    await sauce.locators.inventoryBtns.first().click();
    await sauce.fillCheckoutInfo('Shariar', 'Neon', '54321');
    await sauce.verifyCheckoutSummary();
    await sauce.clickFinish();
    await expect(sauce.locators.successHeader).toBeVisible();
    await sauce.resetAppState();
    await sauce.logout();
});