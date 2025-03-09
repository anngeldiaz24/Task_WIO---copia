import { login } from '../helpers/loginHelper.js';
import ProfilePage from '../../po/pages/ProfilePage.js'; 

describe("User Profile Management", () => {

    beforeEach(async () => {
        await login();
    });

    it('should modify profile details successfully', async () => {
        const profilePage = new ProfilePage();
        await profilePage.modifyUsername();

        const toastMessage = await profilePage.isToastDisplayed();
        expect(await toastMessage).toBe(true);
    });
});
