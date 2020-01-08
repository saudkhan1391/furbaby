const puppeteer = require('puppeteer');
const Common = require("../utils/index");
const config = require('../config/config');
const assert = require('assert');

describe('Integration test', () => {
    test('Update tracker component', async () => {
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

        //Click single item
        await page.waitForSelector('div#abc');
        await contentloader;
        await page.click('div#abc');
        await contentloader;

        //Change trackers
        await page.waitForSelector('img.inline.markers');
        await contentloader;
        await page.click('img.inline.markers');
        await page.click('img.inline.markers');

        // Update tracker
        await page.click('button.update-btn');
        await contentloader;
        await Common.delay(5000);


        await contentloader;
        await browser.close();

    }, 9000000);

    test('Add tracker component', async () => {
        let browser = await puppeteer.launch({
            headless: false,
            ignoreHTTPSErrors: true,
            args: [`--window-size=1920,1080`, '--no-sandbox'],
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

        //Click single item
        await page.waitForSelector('div#abc');
        await contentloader;
        await page.click('div#abc');
        await contentloader;

        //Click on edit trackers
        await page.waitForSelector('button.activity-popup-small');
        await contentloader;
        await page.click('button.activity-popup-small');
        await contentloader;


        // Select dropdown value
        await page.waitForSelector('.inputvision select');
        await page.select('.inputvision select', 'Weight')
        await contentloader;

        //Text area data
        await page.click('.fotText-area textarea');
        await contentloader;
        await page.type('.fotText-area textarea', 'Lorem ipsum');
        await contentloader;

        //Update tracker 
        await page.waitForSelector('.activityBtn-popup');
        await contentloader;
        await page.click('.activityBtn-popup');
        await Common.delay(5000);

        await contentloader;
        await browser.close();

    }, 9000000);

    test('Delete tracker component', async () => {
        let browser = await puppeteer.launch({
            headless: false,
            ignoreHTTPSErrors: true,
            args: [`--window-size=1920,1080`, '--no-sandbox'],
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

        //Click single item
        await page.waitForSelector('div#abc');
        await contentloader;
        await page.click('div#abc');
        await contentloader;

        //Click on edit trackers
        await page.waitForSelector('button.activity-popup-small');
        await contentloader;
        await page.click('button.activity-popup-small');
        await contentloader;


        // Uncheck checkboxes
        await page.waitForSelector('.main-check-container input');
        await page.click('.main-check-container input')
        await contentloader;

        //Update tracker 
        await page.waitForSelector('.activityBtn-popup');
        await contentloader;
        await page.click('.activityBtn-popup');
        await Common.delay(5000);

        await contentloader;
        await browser.close();

    }, 9000000);
});