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

// import puppeteer from 'puppeteer';

// Otest('h1 loads correctly', async () => {
//     let browser = await puppeteer.launch({
//         headless: false
//     })
//     let page = await browser.newpage()

//     await page.goto('http://localhost:3000/')
//     const html = await page.$eval('p.para1', e => e.innerHtml)
//     expect(html).toBe('PEACE OF MIND, WHEN THEY NEED IT MOST')
//     browser.close()
// });