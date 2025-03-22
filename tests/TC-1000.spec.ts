import { test, expect } from '@playwright/test';
import { ShowProductsPage } from '../page/showProducts-page';
import { ShowProductDetailPage } from '../page/show-product-detail-page';

test.describe('ตรวจสอบการแสดงรายการสินค้าทั้งหมด', () => {
    test('TC-1001', async ({ page }) => {
      const showProductsPage = new ShowProductsPage(page);

      await showProductsPage.open();
      await showProductsPage.displayProducts();
    
    });
  
}); 

test.describe('ตรวจสอบการเลือกสินค้าและแสดงรายละเอียด', () => {
    test('ผู้ใช้เลือกสินค้า', async ({ page }) => {
        const showProductsPage = new ShowProductsPage(page);
        const showProductDetailPage = new ShowProductDetailPage(page);
    
        await showProductsPage.open();
        await showProductsPage.selectProduct('ดินสอ');
        await showProductDetailPage.displaySelectedProduct('ดินสอ', '10.00');

    });
});

test.describe('ผู้ใช้กรอกข้อมูลลูกค้าและยืนยันคำสั่งซื้อ', () => {
    test('ผู้ใช้ยืนยันคำสั่งซื้อสำเร็จ', async ({ page }) => {
        const showProductDetailPage = new ShowProductDetailPage(page); 
        const showProductsPage = new ShowProductsPage(page);
        const fullName = 'John Doe';
        const phoneNumber = '0812345678';

        await showProductsPage.open();
        await showProductsPage.selectProduct('ดินสอ');
        await showProductDetailPage.confirmOrder(fullName, phoneNumber);
        await showProductDetailPage.displaySuccessStatus(fullName);
    });

    test('ผู้ใช้ยืนยันคำสั่งซื้อไม่สำเร็จ', async ({ page }) => {
        const showProductDetailPage = new ShowProductDetailPage(page); 
        const showProductsPage = new ShowProductsPage(page);
        const fullName = 'John Doe';
        const phoneNumber = '0812345678';

        await showProductsPage.open();
        await showProductsPage.selectProduct('ดินสอ');
        await showProductDetailPage.confirmOrder(' ', ' ');
        await showProductDetailPage.pageNotChange();
    });


});