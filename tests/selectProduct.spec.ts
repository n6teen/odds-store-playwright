import { test, expect } from '@playwright/test';

test('ตรวจสอบการเลือกสินค้า', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000/products');
  await page.getByRole('link', { name: 'ดินสอ' }).click();
  await expect(page.getByRole('heading', { name: 'ดินสอ' })).toBeVisible();
  await expect(page.getByText('Price: 10.00 ฿')).toBeVisible();

  await expect(page.getByRole('heading', { name: 'Customer Details' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Full Name' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Phone Number' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'ยืนยันคำสั่งซื้อ' })).toBeVisible();
});
