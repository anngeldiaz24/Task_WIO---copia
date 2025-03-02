import { login } from '../helpers/loginHelper.js';
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

//Initialize should object
chai.should();


describe("User Profile Management", () => {

    beforeEach(async () => {
        await login();
    });

    afterEach(async () => {
        await browser.reloadSession();
    });

    it('should modify profile details successfully using Should', async () => {
        // Access the profile management
        const profileButton = await $('[data-testid="header-member-menu-button"]');
        await profileButton.click();

        const visibilityButton = await $('a[href="/u/angeldiaz229/profile"]');
        await visibilityButton.click();        

        await browser.waitUntil(async () => {
            const currentUrl = await browser.getUrl();
            return currentUrl.includes('u/angeldiaz229');
        }, { timeout: 10000, timeoutMsg: 'Expected URL to include user profile path' });

        const UsernameInput = await $('input#username');
        await UsernameInput.setValue(''); 
        await UsernameInput.setValue('angeldiaz229');

        const submitButton = await $('button.JhBc38JIAKzHAt');
        await submitButton.click();

        const toastMessage = await $('[role="alert"]');
        await toastMessage.waitForDisplayed({ timeout: 5000, timeoutMsg: 'Toast did not appear in time' });

        const isToastDisplayed = await toastMessage.isDisplayed();

        isToastDisplayed.should.be.true; 
    });

    it('should modify profile details successfully using Expect', async () => {
        // Access the profile management
        const profileButton = await $('[data-testid="header-member-menu-button"]');
        await profileButton.click();

        const visibilityButton = await $('a[href="/u/angeldiaz229/profile"]');
        await visibilityButton.click();        

        await browser.waitUntil(async () => {
            const currentUrl = await browser.getUrl();
            return currentUrl.includes('u/angeldiaz229');
        }, { timeout: 10000, timeoutMsg: 'Expected URL to include user profile path' });

        const UsernameInput = await $('input#username');
        await UsernameInput.setValue(''); 
        await UsernameInput.setValue('angeldiaz229');

        const submitButton = await $('button.JhBc38JIAKzHAt');
        await submitButton.click();

        const toastMessage = await $('[role="alert"]');
        await toastMessage.waitForDisplayed({ timeout: 5000, timeoutMsg: 'Toast did not appear in time' });

        const isToastDisplayed = await toastMessage.isDisplayed();
        expect(isToastDisplayed).to.be.true;
    });

    it('should modify profile details successfully using Assert', async () => {
        // Access the profile management
        const profileButton = await $('[data-testid="header-member-menu-button"]');
        await profileButton.click();

        const visibilityButton = await $('a[href="/u/angeldiaz229/profile"]');
        await visibilityButton.click();        

        await browser.waitUntil(async () => {
            const currentUrl = await browser.getUrl();
            return currentUrl.includes('u/angeldiaz229');
        }, { timeout: 10000, timeoutMsg: 'Expected URL to include user profile path' });

        const UsernameInput = await $('input#username');
        await UsernameInput.setValue(''); 
        await UsernameInput.setValue('angeldiaz229');

        const submitButton = await $('button.JhBc38JIAKzHAt');
        await submitButton.click();

        const toastMessage = await $('[role="alert"]');
        await toastMessage.waitForDisplayed({ timeout: 5000, timeoutMsg: 'Toast did not appear in time' });

        const isToastDisplayed = await toastMessage.isDisplayed();

        assert.strictEqual(isToastDisplayed, true, 'Toast message should be displayed');
    });
});
