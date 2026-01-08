import { test, expect } from '@playwright/test';
import { SauceActions } from '../pages/actions.js';

test('Q2: Standard user random purchase journey', async ({ page }) => {
    const sauce = new SauceActions(page);

    await sauce.gotoLoginPage();
    // await page.pause();
    await sauce.login('standard_user', 'secret_sauce');
    await sauce.resetAppState();
    await sauce.addThreeRandomProducts();
    await sauce.fillCheckoutInfo('Shariar', 'Neon', '12345');
    await sauce.verifyCheckoutSummary();
    await sauce.clickFinish();
    await expect(sauce.locators.successHeader).toHaveText('Thank you for your order!');
    await sauce.resetAppState();
    await sauce.logout();
});