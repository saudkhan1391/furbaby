const puppeteer = require('puppeteer');
const Common = require("../utils/index");
const testingPath = require('../config/config');
const assert = require('assert');

describe('Integration test', () => {
    test('Schedule Furbaby', async () => {
        let browser = await puppeteer.launch({
            headless: false,
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

        // Check dashboard is open
        const url = await page.url();
        assert(url === testingPath+'dashboard');
        await contentloader;

        // Click on schedule furbaby 
        await page.waitForSelector('button.chk-btn-background')
        await page.click('button.chk-btn-background');
        await contentloader;

        // Check for url
        const scheduleUrl = await page.url();
        assert(scheduleUrl === testingPath+'schedule')
        await contentloader;

        await page.waitForSelector('.react-calendar__month-view__days > button:nth-child(4)');
        await contentloader;
        await page.click('.react-calendar__month-view__days button:nth-child(4)');
        await contentloader;

        // Hover to show controls
        await page.waitForSelector('.mainWrapper')
        await page.hover('.mainWrapper');
        await page.waitForSelector('.extension > p')

        // Click on visit
        await page.click('.extension > p > span');

        //Change status\
        await page.waitForSelector('.inputvision select')
        await page.select('.inputvision select', 'Confirmed');
        
        //Save changes
        await page.click('button.saveBtn');
        await contentloader;
        await Common.delay(5000);

        
        await contentloader;
        await browser.close()

    }, 9000000);
});