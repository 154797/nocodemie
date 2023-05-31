import { test, expect } from "@playwright/test";




test.beforeEach(async ({ page }) => {
  await page.goto('https://codemie-ehab.betty.app/home');
  await page.waitForTimeout(2000);
});

test(`1.1 Create a new blank page and name it Home`, async ({
  page,
}) => {
  await page.goto('https://codemie-ehab.betty.app/home');
  await page.waitForTimeout(2000);
  const rootElement = page.locator("id=app");
  await expect(rootElement, "page is create and compiled").toBeDefined();
  await page.waitForTimeout(2000);
});

test(`1.2 Drag a ‘1 Column’ component onto your page`, async ({ page }) => {
  const row = await page.locator(`[data-component=Row]`).nth(0);
  await expect(row, "row should be in document").toBeVisible();

  await expect(
    row.locator(`[data-component=Column]`).nth(0),
    "column should be in document"
  ).toBeVisible();
  await page.waitForTimeout(2000);
});

test(`1.3 Drag a ‘Text’ component into your ‘1 Column’ component`, async ({
  page,
}) => {
  const column = page.locator(`[data-component=Column]`).nth(0);
  await expect(column, "column should be in document").toBeVisible();

  await expect(
    column.locator(`[data-component=Text]`).nth(0),
    "text should be in document"
  ).toBeVisible();
  await page.waitForTimeout(2000);
});

const textContent = `My first page`;

test(`1.4 Have the ‘Text’ component display the following text: ${textContent}`, async ({
  page,
}) => {
  const column = page.locator(`[data-component=Column]`).nth(0);
  await expect(column, "coulmn should be in document").toBeVisible();
  const text = await column
    .locator(`[data-component=Text]`)
    .nth(0)
    .textContent();

  await expect(text, `text should be: `).toBe(textContent);
  await page.waitForTimeout(2000);
});