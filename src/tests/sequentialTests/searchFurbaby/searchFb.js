const puppeteer = require('puppeteer');
const Common = require("../../utils/index");
const assert = require('assert');
const config = require('../../config/config');

module.exports=( searchFb = () => describe('Integration test', () => {
    test('Search test', async () => {
        let browser = await puppeteer.launch({
            headless: true,
            ignoreHTTPSErrors: true,
            args: [`--window-size=1920,1080`, '--no-sandbox'], // new option
        });

        let obj = {
            timeout: 300000,
        };

        let page = await browser.newPage();

        let contentloader = Common.waitForDocumentLoad(page);

        await page.setViewport({
            width: 1366,
            height: 588
        })
        await page.goto(config.path, obj);
        await contentloader;

        // Close Notification overlay start
        // await page.waitForSelector('.container > .cnt-wrp > div > .i-container > img');
        // await contentloader;
        // await page.click('.container > .cnt-wrp > div > .i-container > img');
        // await contentloader;

        // Click on login button
        await page.waitForSelector('button.btn-blue');
        await contentloader;
        await page.click('button.btn-blue');
        await contentloader;

        // Username
        await page.waitForSelector('input.emInput');
        await contentloader;
        await page.click('input.emInput');
        await contentloader;
        await page.type('input.emInput', config.email);
        await contentloader;

        // Password
        await page.click('input.paInput');
        await contentloader;
        await page.type('input.paInput', config.pass);
        await contentloader;


        // Login
        await page.click('button.btn-blue');
        await contentloader;
        await Common.delay(5000);

        // Check dashboard is open
        const url = await page.url();
        assert(url === config.path+'dashboard');
        await contentloader;

        //Goto database
        await page.goto(config.path+'baby-database');
        await page.waitForSelector('input');
        await contentloader;


        //Search
        await page.tap('input');
        await page.type('input', 'Smith');
        await contentloader;
        await page.keyboard.press(String.fromCharCode(13));
        await contentloader;
        await new Promise(res => setTimeout(() => {
            expect(true).toBe(true)
            res()
        }, 37000));


        await contentloader;
        await browser.close();

    }, 9000000);
}));