import LoginPage from '../../po/pages/LoginPage.js'; 

export async function login() {
    const loginPage = new LoginPage();
    await loginPage.login(process.env.USER_EMAIL, process.env.USER_PASSWORD);
}
