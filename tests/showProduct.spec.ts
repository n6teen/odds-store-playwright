import { test, expect } from '@playwright/test';

test('ตรวจสอบจำนวนสินค้าและลำดับการเรียง', async ({ page }) => {
  // ไปที่หน้าสินค้า
  await page.goto('http://127.0.0.1:3000/products');

  // ค้นหาสินค้าทั้งหมด
  const productElements = await page.locator('.bg-white.shadow-md.rounded.p-4').all();

  // ตรวจสอบว่ามีสินค้า 16 รายการ
  await expect(productElements).toHaveLength(16);

  const productNames: string[] = await Promise.all(
    productElements.map(async (el) => {
      const text = await el.locator('p.text-xl.font-medium.text-blue-500').textContent();
      return (text ?? '').replace(/^\d+\.\s*/, '').trim(); // ลบหมายเลขลำดับออก
    })
  );

  console.log('รายการสินค้า:', productNames);

  //ตรวจสอบว่าชื่อสินค้าเรียงตามตัวอักษร ก-ฮ
  const sortedProductNames = [...productNames].sort((a, b) => (a.charAt(0) ?? '').localeCompare(b.charAt(0) ?? '', 'th'));
  console.log('รายการสินค้าเรียงตามตัวอักษร:', sortedProductNames);

  expect(productNames).toEqual(sortedProductNames);
});
