describe("mouse actions", () => {
    it("mouse actions", async function () {

        await browser.url("https://testautomationpractice.blogspot.com/")
        await browser.maximizeWindow()
        await browser.pause(1000)

        // click
        const copy = await $('//button[text()="Copy Text"]')
        await copy.click()
        await browser.pause(1000)

        // double click
        await copy.doubleClick()
        await browser.pause(1000)
        
        // move to element
        const moved = await $('//a[text()="Home"]')
        await moved.moveTo()
        await browser.pause(2000)

        // drag and drop
        const sour = await $('#draggable')
        const targ = await $('#droppable')
        
        await sour.dragAndDrop(targ)
        await browser.pause(2000)
    })
})