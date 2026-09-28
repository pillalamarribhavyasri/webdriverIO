describe("browser commands", () => {
    it("practising browser commands and navigations", async () => {
        await browser.url("https://www.google.com")
        await browser.pause(2000)
        await browser.maximizeWindow()

        await console.log("title is ===", await browser.getTitle())
        await console.log("url is", await browser.getUrl())
        await console.log("page source", await browser.getPageSource())

        await browser.pause(2000)

        // browser navigation
        await browser.url("https://www.amazon.in")
        await browser.pause(2000)

        await console.log("title is ===", await browser.getTitle())
        await console.log("url is", await browser.getUrl())

        // back
        await browser.back()
        await browser.pause(2000)

        await console.log("after back url is", await browser.getUrl())

        // forward
        await browser.forward()
        await browser.pause(2000)

        await console.log("after forward url is", await browser.getUrl())

        // refresh
        await browser.refresh()
        await browser.pause(2000)

        await console.log("after refresh url is", await browser.getUrl())
    })
})