const puppeteer = require('puppeteer');
const Common = require("../utils/index");
const testingPath = require('../config/config');
describe('Forms', () => {
    test('Login test', async () => {
        let browser = await puppeteer.launch({
            headless: false,
            ignoreHTTPSErrors: true,
            args: [`--window-size=1920,1080`,'--no-sandbox'], // new option
        });

        let obj = {
            timeout: 300000,
        };

        let page = await browser.newPage();

        let contentloader = Common.waitForDocuemntLoad(page);

        await page.setViewport({width: 1366, height: 588})
        await page.goto(testingPath, obj);
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
        await page.type('input.emInput', 'development@redsqware.com');
        await contentloader;

        // Password
        await page.click('input.paInput');
        await contentloader;
        await page.type('input.paInput', 'aqkhan88');
        await contentloader;


        // Login
        await page.click('button.btn-blue');
        await contentloader;
        await Common.delay(5000);

        // level one check
        // await page.waitForSelector('.nav-width > .header-nav > .mainulnav > .d-flex:nth-child(2) > a')
        // await page.hover('.nav-width > .header-nav > .mainulnav > .d-flex:nth-child(2) > a')
        // await page.click('.nav-width > .header-nav > .mainulnav > .d-flex:nth-child(2) > a')


        await contentloader;
        await browser.close();

    }, 9000000);
});