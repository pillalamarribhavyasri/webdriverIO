describe("dropdown", () => {

    it("dropdown practise", async function () {

        await browser.url(
            "https://demo.automationtesting.in/Register.html"
        );

        // Select dropdown by index
        await browser.pause(2000);

        await $("#country").selectByIndex(2);

        await browser.pause(2000);

        // Select dropdown by visible text
        await $("#country").selectByVisibleText("India");

        await browser.pause(2000);

        // Select dropdown by attribute
        await $("#country").selectByAttribute(
            "value",
            "Australia"
        );

        await browser.pause(2000);

        // Get selected value
        console.log(
            await $("#country").getValue()
        );

        // Get element text
        console.log(
            await $("#country").getText()
        );

        // Check element exists
        console.log(
            "Exists:",
            await $("#country").isExisting()
        );

        // Check element displayed
        console.log(
            "Displayed:",
            await $("#country").isDisplayed()
        );

        // Check element enabled
        console.log(
            "Enabled:",
            await $("#country").isEnabled()
        );

        // Get attribute
        console.log(
            "Class:",
            await $("#country").getAttribute("class")
        );

        await browser.pause(2000);
    });
});