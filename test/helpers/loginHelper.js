export async function login() {
    await browser.url('/home');

    const loginUpButton = await $('a[href*="login?application=trello"]');
    await loginUpButton.click();

    await browser.waitUntil(async () => {
        const currentUrl = await browser.getUrl();
        return currentUrl.includes('login?application=trello');
    }, { timeout: 10000, timeoutMsg: 'expected URL to include login' });

    const emailInput = await $('input#username');
    await emailInput.setValue(process.env.USER_EMAIL);

    const submitButton = await $('button#login-submit');
    await submitButton.click();

    const passwordInput = await $('input#password');
    await passwordInput.waitForEnabled({ timeout: 10000 });

    await passwordInput.setValue(process.env.USER_PASSWORD);
    await submitButton.click();

    // Wait for URL to change to welcome page
    await browser.waitUntil(async () => {
        const currentUrl = await browser.getUrl();
        return currentUrl.includes('angeldiaz229/boards');
    }, { timeout: 10000, timeoutMsg: 'expected URL to change to the boards page' });
}
