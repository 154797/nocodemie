import test, { expect } from '@playwright/test';
import { Chance } from 'chance';
import { ExamUtils } from '../page-models/test';
import { appSettings } from '../app-settings';
import { url } from '../app-settings.json';

const chance = new Chance();
const newPageTitle = "Home";

test.beforeEach(async ({ page }) => {
  const newPageUrl = url + "/" + newPageTitle.toLocaleLowerCase();
  await page.goto(newPageUrl);
});

test.describe('case management', async () => {
    test('1.1 Create a new blank page and name it ${newPageTitle}', async ({
      page,
    }) => {
      const loginUtils = new ExamUtils(page);
      // // Betty Blocks inloggen
      // // await page.goto('https://my.bettyblocks.com/');
      // await page.type('input[name="loginId"]', appSettings.bettyuser.username);
      // // await page.keyboard.press('Enter');
      // await page.type('input[name="password"]', appSettings.bettyuser.password);
      // await page.keyboard.press('Enter');
      // await page.waitForTimeout(3000);
      // const caseoverviewUtils = new ExamUtils(page);
      // await caseoverviewUtils.goto(page, '/home');
      // await page.waitForTimeout(3000);
      // expect(page.url()).toMatch('/home');

      const rootElement = page.locator("id=app");
      await expect(rootElement, "page is create and compiled").toBeDefined();
    });

    test('1.2 Drag a ‘1 Column’ component onto your page', async ({
      page,
    }) => {
      const loginUtils = new ExamUtils(page);
     
      // // Betty Blocks inloggen
      // // await page.goto('https://my.bettyblocks.com/');
      // await page.type('input[name="loginId"]', appSettings.bettyuser.username);
      // // await page.keyboard.press('Enter');
      // await page.type('input[name="password"]', appSettings.bettyuser.password);
      // await page.keyboard.press('Enter');
      // await page.waitForTimeout(3000);
      // const caseoverviewUtils = new ExamUtils(page);
      // await caseoverviewUtils.goto(page, '/home');
      // await page.waitForTimeout(3000);
      // expect(page.url()).toMatch('/home');

      const row = await page.locator(`[data-component=Row]`).nth(0);
      await expect(row, "row should be in document").toBeVisible();

      await expect(
        row.locator(`[data-component=Column]`).nth(0),
        "column should be in document"
      ).toBeVisible();
      
      await page.waitForTimeout(4000);
    });

    test('1.3 Drag a ‘Text’ component into your ‘1 Column’ component', async ({
      page,
    }) => {
      const loginUtils = new ExamUtils(page);
     
      // // Betty Blocks inloggen
      // // await page.goto('https://my.bettyblocks.com/');
      // await page.type('input[name="loginId"]', appSettings.bettyuser.username);
      // // await page.keyboard.press('Enter');
      // await page.type('input[name="password"]', appSettings.bettyuser.password);
      // await page.keyboard.press('Enter');
      // await page.waitForTimeout(3000);
      // const caseoverviewUtils = new ExamUtils(page);
      // await caseoverviewUtils.goto(page, '/home');
      // await page.waitForTimeout(3000);
      // expect(page.url()).toMatch('/home');

      const column = page.locator(`[data-component=Column]`).nth(0);
      await expect(column, "column should be in document").toBeVisible();
    
      await expect(
        column.locator(`[data-component=Text]`).nth(0),
        "text should be in document"
      ).toBeVisible();

      await page.waitForTimeout(4000);
    });

    const textContent = `My first page`;

    test('1.4 Have the ‘Text’ component display the following text: ${textContent}', async ({
      page,
    }) => {
      const loginUtils = new ExamUtils(page);
     
      // // Betty Blocks inloggen
      // // await page.goto('https://my.bettyblocks.com/');
      // await page.type('input[name="loginId"]', appSettings.bettyuser.username);
      // // await page.keyboard.press('Enter');
      // await page.type('input[name="password"]', appSettings.bettyuser.password);
      // await page.keyboard.press('Enter');
      // await page.waitForTimeout(3000);
      // const caseoverviewUtils = new ExamUtils(page);
      // await caseoverviewUtils.goto(page, '/home');
      // await page.waitForTimeout(3000);
      // expect(page.url()).toMatch('/home');

      const column = page.locator(`[data-component=Column]`).nth(0);
      await expect(column, "coulmn should be in document").toBeVisible();
      const text = await column
        .locator(`[data-component=Text]`)
        .nth(0)
        .textContent();
    
      await expect(text, `text should be: `).toBe(textContent);

      await page.waitForTimeout(4000);
    });
});
