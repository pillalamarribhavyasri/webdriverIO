describe('WebdriverIO Element Practice', () => {

    it('should practice all element operations', async () => {

        // Open application
        await browser.url('https://the-internet.herokuapp.com/');

        // =========================
        // 1. Find single element - $
        // =========================

        const formAuthentication = await $('a[href="/login"]');

        // =========================
        // 2. Check element exists
        // =========================

        console.log(
            'Exists:',
            await formAuthentication.isExisting()
        );
        // 3. Click
        await formAuthentication.click();

        // =========================
        // 4. Find username/password
        // =========================

        const username = await $('#username');
        const password = await $('#password');
        const loginButton = await $('button[type="submit"]');

        // =========================
        // 5. Wait for element
        // =========================

        await username.waitForDisplayed();
        await password.waitForDisplayed();

        // 6. Check displayed
      
        console.log(
            'Username displayed:',
            await username.isDisplayed()
        );

        // 7. Check enabled
       
        console.log(
            'Username enabled:',
            await username.isEnabled()
        );

      
        // 8. Get attribute
        const usernameType = await username.getAttribute('type');

        console.log(
            'Username type:',
            usernameType
        );

       
        // 9. Set value
      

        await username.setValue('tomsmith');
        await password.setValue('SuperSecretPassword!');

        // 10. Get property

        const enteredUsername =
            await username.getProperty('value');

        console.log(
            'Entered username:',
            enteredUsername
        );

      
        // 11. Clear value
        await username.clearValue();

        // Enter again
        await username.setValue('tomsmith');

        await loginButton.waitForClickable();
        await loginButton.click();
        const flashMessage = await $('#flash');

        await flashMessage.waitForDisplayed();

        const message = await flashMessage.getText();

        console.log(
            'Message:',
            message
        );

        // =========================
        // 15. Find multiple elements
        // =========================

        await browser.url('https://the-internet.herokuapp.com/');

        const links = await $$('a');

        console.log(
            'Number of links:',
            links.length
        );

        // =========================
        // 16. Loop through elements
        // =========================

        for (const link of links) {

            const text = await link.getText();

            console.log(
                'Link text:',
                text
            );
        }

        // =========================
        // 17. Element inside another element
        // =========================

        await browser.url(
            'https://the-internet.herokuapp.com/login'
        );

        const loginForm = await $('form');

        const usernameInsideForm =
            await loginForm.$('#username');

        console.log(
            'Username exists inside form:',
            await usernameInsideForm.isExisting()
        );

        await usernameInsideForm.setValue('tomsmith');

        // =========================
        // 18. Checkbox practice
        // =========================

        await browser.url(
            'https://the-internet.herokuapp.com/checkboxes'
        );

        const checkboxes = await $$(
            'input[type="checkbox"]'
        );

        console.log(
            'Number of checkboxes:',
            checkboxes.length
        );

        const firstCheckbox = checkboxes[0];

        // Check current state
        console.log(
            'Selected:',
            await firstCheckbox.isSelected()
        );

        // Click checkbox
        await firstCheckbox.click();

        console.log(
            'Selected after click:',
            await firstCheckbox.isSelected()
        );

        // =========================
        // 19. Dropdown practice
        // =========================

        await browser.url(
            'https://the-internet.herokuapp.com/dropdown'
        );

        const dropdown = await $('#dropdown');

        // Select by visible text
        await dropdown.selectByVisibleText('Option 1');

        console.log(
            'Dropdown selected'
        );

        // Select by attribute
        await dropdown.selectByAttribute(
            'value',
            '2'
        );

        console.log(
            'Dropdown changed to Option 2'
        );
    });
});