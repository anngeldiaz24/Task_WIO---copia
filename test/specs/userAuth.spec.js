import { login } from '../helpers/loginHelper.js';

describe('User Authentication', () => {
    it('should login successfully with existing credentials', async () => {
        await login();
    });
});
