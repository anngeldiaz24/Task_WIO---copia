export default class WorkspacePage {
    get workspaceButton() {
        return $('a[href="/b/JuEbTtBn/webio"]');
    }

    get workspaceSettingsButton1() {
        return $('button.e1toTuovLTzs35');
    }

    get workspaceSettingsButton2() {
        return $('a[href="/w/mantenimientosrwm/account"]');
    }

    get editWorkspaceButton() {
        return $('button.Ch1Opdvr77xkJp');
    }

    get displayNameInput() {
        return $('input#displayName');
    }

    get saveButton() {
        return $('button._wJD3QSFJjW4Pb');
    }

    get titleWorkspace() {
        return $('h2.SiP6d2d_8FAAkC');
    }

    // Navegar al workspace
    async navigateToWorkspace() {
        await this.workspaceButton.click();
    }

    // Acceder a la configuración del workspace
    async openWorkspaceSettings() {
        await this.workspaceSettingsButton1.click();
        await this.workspaceSettingsButton2.waitForDisplayed({ timeout: 5000 });
        await this.workspaceSettingsButton2.click();
    }

    async editWorkspaceDetails(newName) {
        await this.editWorkspaceButton.click();
        await this.displayNameInput.clearValue(); 
        await this.displayNameInput.setValue(newName);
        await this.saveButton.click();
    }

    async getWorkspaceTitle() {
        return await this.titleWorkspace.getText();
    }
}
