import { SauceObjects } from "./objects.js";

export class SauceActions {
    constructor(page) {
        this.page = page;
        this.locators = new SauceObjects(page);
        this.expectedNames = [];
        this.expectedPrices = [];
    }

    async gotoLoginPage() {
        await this.page.goto("https://www.saucedemo.com/");
    }

    async login(user, pass) {
        await this.locators.userInput.fill(user);
        await this.locators.passInput.fill(pass);
        await this.locators.loginBtn.click();
    }

    async resetAppState() {
        await this.locators.menuBtn.click();
        await this.locators.resetBtn.click();
        await this.page.reload();
    }

    async addThreeRandomProducts() {
        this.expectedNames = [];
        this.expectedPrices = [];
        let chosenIndexes = new Set();

        while (chosenIndexes.size < 3) {
            let randomIndex = Math.floor(Math.random() * 6);
            if (!chosenIndexes.has(randomIndex)) {
                chosenIndexes.add(randomIndex);

                const name = await this.locators.inventoryItemName.nth(randomIndex).innerText();
                const price = await this.locators.inventoryItemPrice.nth(randomIndex).innerText();

                this.expectedNames.push(name);
                this.expectedPrices.push(price);
                await this.locators.inventoryBtns.nth(randomIndex).click();
            }
        }
    }

    async fillCheckoutInfo(fName, lName, zip) {
        await this.locators.cartIcon.click();
        await this.locators.checkoutBtn.click();
        await this.locators.firstName.fill(fName);
        await this.locators.lastName.fill(lName);
        await this.locators.zipCode.fill(zip);
        await this.locators.continueBtn.click();
    }

    async verifyCheckoutSummary() {

        const actualNames = await this.locators.summaryItemNames.allInnerTexts();
        for (let name of this.expectedNames) {
            if (!actualNames.includes(name)) throw new Error(`Product ${name} missing!`);
        }


        const actualPrices = await this.locators.summaryItemPrices.allInnerTexts();
        let calculatedSubtotal = 0;
        actualPrices.forEach(price => {
            calculatedSubtotal += parseFloat(price.replace('$', ''));
        });


        const subtotalText = await this.locators.subtotalLabel.innerText();
        const uiSubtotal = parseFloat(subtotalText.replace('Item total: $', ''));


        const taxText = await this.locators.taxLabel.innerText();
        const uiTax = parseFloat(taxText.replace('Tax: $', ''));

        const totalText = await this.locators.totalLabel.innerText();
        const uiTotal = parseFloat(totalText.replace('Total: $', ''));


        const finalCalculation = uiSubtotal + uiTax;

        if (Math.abs(calculatedSubtotal - uiSubtotal) > 0.01) {
            throw new Error("Item total calculation mismatch!");
        }

        if (Math.abs(finalCalculation - uiTotal) > 0.01) {
            throw new Error(`Tax calculation mismatch! Expected: ${finalCalculation}, but UI shows: ${uiTotal}`);
        }

        console.log(`Verified! Subtotal: $${uiSubtotal}, Tax: $${uiTax}, Final Total: $${uiTotal}`);
    }

    async clickFinish() {
        await this.locators.finishBtn.click();
    }

    async logout() {
        await this.locators.menuBtn.click();
        await this.locators.logoutBtn.click();
    }
}