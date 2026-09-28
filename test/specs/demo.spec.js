
describe("first demo", () => {
    it("example", async () => {
       browser.url("https://www.google.com")
       browser.pause(3000)
       await $('[name="q"]').setValue("nani")
       browser.pause(3000)
       await $('[name="btnK"]').click()
       browser.pause(3000)
    })
})