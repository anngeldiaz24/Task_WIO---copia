import { login } from '../helpers/loginHelper.js';

describe('User Authentication', () => {
  it('should log in successfully', async () => {
    await login();
  });
});
