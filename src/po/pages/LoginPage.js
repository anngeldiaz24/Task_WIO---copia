export default class LoginPage {
    constructor() {
        this.loginUpButton = $('a[href*="login?application=trello"]');
        this.emailInput = $('input#username');
        this.submitButton = $('button#login-submit');
        this.passwordInput = $('input#password');
    }

    async open() {
        await browser.url('/home');
    }

    async clickLoginButton() {
        await this.loginUpButton.click();
        await browser.waitUntil(async () => {
            const currentUrl = await browser.getUrl();
            return currentUrl.includes('login?application=trello');
        }, { timeout: 10000, timeoutMsg: 'expected URL to include login' });
    }

    async enterEmail(email) {
        await this.emailInput.setValue(email);
        await this.submitButton.click();
    }

    async enterPassword(password) {
        await this.passwordInput.waitForEnabled({ timeout: 10000 });
        await this.passwordInput.setValue(password);
        await this.submitButton.click();
    }

    async waitForDashboard() {
        await browser.waitUntil(async () => {
            const currentUrl = await browser.getUrl();
            return currentUrl.includes('boards');
        }, { timeout: 10000, timeoutMsg: 'expected URL to change to the boards page' });
    }

    async login(email, password) {
        await this.open();
        await this.clickLoginButton();
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.waitForDashboard();
    }
}
