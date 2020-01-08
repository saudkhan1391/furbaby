const puppeteer = require('puppeteer');
const Common = require("../utils/index");
const assert = require('assert');
const config = require('../config/config');

describe('Integration test', () => {
    test('Furbaby Checkin test', async () => {
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

        // Click on login button
        await page.waitForSelector('button.btn-blue');
        await contentloader;
        await page.click('button.btn-blue');
        await contentloader;

        // Email
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

        // Goto Database
        await page.goto(config.path+'baby-database')
        await contentloader;
        await page.waitForSelector('button.manuallyBtn');
        await contentloader;
        await page.click('button.manuallyBtn');
        await contentloader;

        //Fill form data

        // Owner email
        await page.waitForSelector('input#ownerMail');
        await contentloader;
        await page.click('input#ownerMail');
        await contentloader;
        await page.type('input#ownerMail', 'test@test.com');
        await contentloader;

        // Owner first name
        await page.waitForSelector('input#ownerFirst');
        await contentloader;
        await page.click('input#ownerFirst');
        await new Promise(res => setTimeout(() => {
            expect(true).toBe(true)
            res()
        }, 1700));
        await contentloader;
        await page.type('input#ownerFirst', 'Test');
        await contentloader;

        // Owner last name
        await page.waitForSelector('input#ownerLast');
        await contentloader;
        await page.click('input#ownerLast');
        await contentloader;
        await page.type('input#ownerLast', 'User');
        await contentloader;

        // Owner phone number
        await page.waitForSelector('input#pNumber');
        await contentloader;
        await page.click('input#pNumber');
        await contentloader;
        await page.type('input#pNumber', '0123456789');
        await contentloader;

        // Furbaby name
        await page.waitForSelector('input#furBabyName');
        await contentloader;
        await page.click('input#furBabyName');
        await contentloader;
        await page.type('input#furBabyName', 'Pony');
        await contentloader;

        // Pick date
        await page.click('.firstDate');
        await contentloader;
        await page.click('button.react-calendar__tile.react-calendar__month-view__days__day.react-calendar__month-view__days__day--neighboringMonth');
        await contentloader;

        // Furbaby specie
        await page.waitForSelector('input#furBabySpec');
        await contentloader;
        await page.click('input#furBabySpec');
        await contentloader;
        await page.type('input#furBabySpec', 'Dog');
        await contentloader;

        // Furbaby breed
        await page.waitForSelector('input#furBabyBreed');
        await contentloader;
        await page.click('input#furBabyBreed');
        await contentloader;
        await page.type('input#furBabyBreed', 'Molluscus');
        await contentloader;

        // Pick reason
        await page.select('#reasonFb', 'Ear Problem')
        await contentloader;

        // Submit form
        await page.click('button.addBtn');
        await contentloader;
        await Common.delay(5000);

        //Check for url
        await page.goto(config.path+'schedule')
        await contentloader;
        await page.waitForSelector('p.bluePress');
        const paraValue = await page.$eval('p.bluePress', e => e.innerHTML)
        expect(paraValue).toBe('CHECK IN')
        await browser.close();

    }, 9000000);
});