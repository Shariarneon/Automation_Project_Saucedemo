export class SauceObjects {
    constructor(page) {
        this.page = page;


        this.userInput = this.page.locator("//input[@placeholder='Username']");
        this.passInput = this.page.locator("//input[@placeholder='Password']");
        this.loginBtn = this.page.locator("//input[@id='login-button']");
        this.errorBox = this.page.locator("[data-test='error']");
        this.menuBtn = this.page.locator("//button[@id='react-burger-menu-btn']");
        this.resetBtn = this.page.locator("//a[@id='reset_sidebar_link']");
        this.logoutBtn = this.page.locator("//a[@id='logout_sidebar_link']");


        this.inventoryBtns = this.page.locator(".btn_inventory");
        this.inventoryItemName = this.page.locator(".inventory_item_name");
        this.inventoryItemPrice = this.page.locator(".inventory_item_price");
        this.sortDropdown = this.page.locator(".product_sort_container");


        this.cartIcon = this.page.locator("//a[@class='shopping_cart_link']");
        this.checkoutBtn = this.page.locator("//button[@name='checkout']");
        this.firstName = this.page.locator("//input[@placeholder='First Name']");
        this.lastName = this.page.locator("//input[@placeholder='Last Name']");
        this.zipCode = this.page.locator("//input[@placeholder='Zip/Postal Code']");
        this.continueBtn = this.page.locator("//input[@id='continue']");
        this.finishBtn = this.page.locator("//button[@id='finish']");
        this.successHeader = this.page.locator(".complete-header");


        this.summaryItemNames = this.page.locator(".inventory_item_name");
        this.summaryItemPrices = this.page.locator(".inventory_item_price");
        this.subtotalLabel = this.page.locator(".summary_subtotal_label");
        this.taxLabel = this.page.locator(".summary_tax_label");
        this.totalLabel = this.page.locator(".summary_total_label");
    }
}