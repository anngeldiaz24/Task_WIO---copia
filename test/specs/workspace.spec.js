import { login } from '../helpers/loginHelper.js';
const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;

//Initialize should object
chai.should();

describe("Workspace Management - Modify workspace details", () => {
    beforeEach(async () => {
        await login();
    });

    afterEach(async () => {
        await browser.reloadSession();
    });

    it('should modify workspace details successfully using Should', async () => {
        // Access the workspace
        const workspaceButton = await $('a[href="/b/JuEbTtBn/webio"]');
        await workspaceButton.click();

        const workspaceSettingsButton1 = await $('button.e1toTuovLTzs35');
        await workspaceSettingsButton1.click();

        const workspaceSettingsButton2 = await $('a[href="/w/mantenimientosrwm/account"]');
        await workspaceSettingsButton2.waitForDisplayed({ timeout: 5000 });
        workspaceSettingsButton2.click();

        await browser.waitUntil(async () => {
            const currentUrl = await browser.getUrl();
            return currentUrl.includes('mantenimientosrwm/account');
        }, { timeout: 10000, timeoutMsg: 'The expected URL was not found' });

        const editWorkspaceButton = await $('button.Ch1Opdvr77xkJp');
        editWorkspaceButton.click();

        const displayNameButton = await $('input#displayName')
        const newText = 'WebDriverio from Test';
        await displayNameButton.setValue(newText);

        const saveButton = await $('button._wJD3QSFJjW4Pb')
        saveButton.click();

        browser.pause(2000);
        
        const titleWorkspace = await $('h2.SiP6d2d_8FAAkC');
        const titleText = await titleWorkspace.getText();

        titleText.should.equal(newText);  
    });

    it('should modify workspace details successfully using Assert', async () => {
        // Access the workspace
        const workspaceButton = await $('a[href="/b/JuEbTtBn/webio"]');
        await workspaceButton.click();

        const workspaceSettingsButton1 = await $('button.e1toTuovLTzs35');
        workspaceSettingsButton1.click();

        const workspaceSettingsButton2 = await $('a[href="/w/mantenimientosrwm/account"]');
        await workspaceSettingsButton2.waitForDisplayed({ timeout: 5000 });
        workspaceSettingsButton2.click();

        await browser.waitUntil(async () => {
            const currentUrl = await browser.getUrl();
            return currentUrl.includes('mantenimientosrwm/account');
        }, { timeout: 10000, timeoutMsg: 'The expected URL was not found' });

        const editWorkspaceButton = await $('button.Ch1Opdvr77xkJp');
        editWorkspaceButton.click();

        const displayNameButton = await $('input#displayName')
        const newText = 'WebDriverio from Test';
        await displayNameButton.setValue(newText);

        const saveButton = await $('button._wJD3QSFJjW4Pb')
        saveButton.click();

        browser.pause(2000);
        
        const titleWorkspace = await $('h2.SiP6d2d_8FAAkC');
        const titleText = await titleWorkspace.getText();

        assert.equal(titleText, newText); 
    });


    it('should modify workspace details successfully using Expect', async () => {
        // Access the workspace
        const workspaceButton = await $('a[href="/b/JuEbTtBn/webio"]');
        await workspaceButton.click();

        const workspaceSettingsButton1 = await $('button.e1toTuovLTzs35');
        workspaceSettingsButton1.click();

        const workspaceSettingsButton2 = await $('a[href="/w/mantenimientosrwm/account"]');
        await workspaceSettingsButton2.waitForDisplayed({ timeout: 5000 });
        workspaceSettingsButton2.click();

        await browser.waitUntil(async () => {
            const currentUrl = await browser.getUrl();
            return currentUrl.includes('mantenimientosrwm/account');
        }, { timeout: 10000, timeoutMsg: 'The expected URL was not found' });

        const editWorkspaceButton = await $('button.Ch1Opdvr77xkJp');
        editWorkspaceButton.click();

        const displayNameButton = await $('input#displayName')
        const newText = 'WebDriverio from Test';
        await displayNameButton.setValue(newText);

        const saveButton = await $('button._wJD3QSFJjW4Pb')
        saveButton.click();

        browser.pause(2000);
        
        const titleWorkspace = await $('h2.SiP6d2d_8FAAkC');
        const titleText = await titleWorkspace.getText();

        expect(titleText).to.equal(newText, 'The title was not set correctly');
        
    });
});
