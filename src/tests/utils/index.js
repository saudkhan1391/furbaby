const CommonFunction = {

    delay: (time) => {
        return new Promise(function (resolve) {
            setTimeout(resolve, time)
        });
    },
    waitForDocumentLoad : (page) => {
        return page.waitForNavigation({
            timeout: 300000,
            waitUntil: "domcontentloaded"
        });

    },
    waitForResponse: (page) => {
        return page.waitForNavigation({
            timeout: 300000,
            waitUntil: "networkidle0"
        });

    }


}
module.exports = CommonFunction

