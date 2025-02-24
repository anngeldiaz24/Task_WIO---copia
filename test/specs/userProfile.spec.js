import { login } from '../helpers/loginHelper.js';

describe("User Profile Management", () => {

    beforeEach(async () => {
        await login();
    });

    it('should modify profile details successfully', async () => {
        // Access the profile managment
        const profileButton = await $('[data-testid="header-member-menu-button"]');
        await profileButton.click();

        const visibilityButton = await $('a[href="/u/angeldiaz229/profile"]');
        await visibilityButton.click();        

        await browser.waitUntil(async () => {
            const currentUrl = await browser.getUrl();
            return currentUrl.includes('u/angeldiaz229');
        }, { timeout: 10000, timeoutMsg: 'expected URL to include login' });

        const UsernameInput = await $('input#username');
        await UsernameInput.setValue(''); 
        await UsernameInput.setValue('angeldiaz229');


        const submitButton = await $('button.JhBc38JIAKzHAt');
        submitButton.click();

        const toastMessage = await $('[role="alert"]');
        await toastMessage.waitForDisplayed({ timeout: 5000, timeoutMsg: 'Toast did not appear in time' });

        // Verificar que el toast efectivamente está visible
        expect(await toastMessage.isDisplayed()).toBe(true);
    });
});
