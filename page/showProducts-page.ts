import { expect, type Locator, type Page } from '@playwright/test';

export class ShowProductsPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async open() {
        await this.page.goto('http://127.0.0.1:3000/products');
    }

    async displayProducts() {  

        const productElements = await this.page.locator('.bg-white.shadow-md.rounded.p-4').all();
        await expect(productElements).toHaveLength(16);
    }

    async selectProduct(productName: string) {
        await this.page.getByRole('link', { name: productName}).click();
    }

  
}