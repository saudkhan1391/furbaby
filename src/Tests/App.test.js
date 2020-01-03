const assert = require('assert'),
    puppeteer = require('puppeteer');
let browser, page;
beforeEach(async () => {
    browser = await puppeteer.launch({
        headless: false
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
})
afterEach(async () => {
    await browser.close();
})

test("test homepage url", async () => {
    const url = await page.url();
    assert(url === 'http://localhost:3000/');
})
