import { login } from '../helpers/loginHelper.js';

describe("Workspace Management - Modify workspace details", () => {
    
    beforeEach(async () => {
        await login();
    });

    it('should modify workspace details successfully', async () => {
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
        expect(titleText).toBe(newText);

    });
});
