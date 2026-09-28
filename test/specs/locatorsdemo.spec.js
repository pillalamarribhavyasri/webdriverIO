describe("sample locators",function(){
    it("practising locators",async()=>{
browser.url("https://the-internet.herokuapp.com/login")
await browser.pause(2000)
$('#username').setValue("tomsmith")
await browser.pause(2000)    

})
})