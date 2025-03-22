import { expect, type Locator, type Page } from '@playwright/test';

export class ShowProductDetailPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async displaySelectedProduct(productName: string, price: string) {
        await expect(this.page.getByRole('heading', { name: productName })).toBeVisible();
        await expect(this.page.getByText(`Price: ${price} ฿`)).toBeVisible();

        await expect(this.page.getByRole('heading', { name: 'Customer Details' })).toBeVisible();
        await expect(this.page.getByRole('textbox', { name: 'Full Name' })).toBeVisible();
        await expect(this.page.getByRole('textbox', { name: 'Phone Number' })).toBeVisible();
        await expect(this.page.getByRole('button', { name: 'ยืนยันคำสั่งซื้อ' })).toBeVisible();
    }

    async confirmOrder(fullName: string, phoneNumber: string) {
        await this.page.getByRole('textbox', { name: 'Full Name' }).click();
        await this.page.getByRole('textbox', { name: 'Full Name' }).fill(fullName);
        await this.page.getByRole('textbox', { name: 'Phone Number' }).click();
        await this.page.getByRole('textbox', { name: 'Phone Number' }).fill(phoneNumber);
        await this.page.getByRole('button', { name: 'ยืนยันคำสั่งซื้อ' }).click();
    }
    

    async displaySuccessStatus(name: string) {
        await expect(this.page.getByRole('heading', { name: `ขอบคุณ ${name}` })).toBeVisible();
       
    }

    async pageNotChange() {
        await expect(this.page.getByRole('heading', { name: 'Customer Details' })).toBeVisible();
    }

  
}