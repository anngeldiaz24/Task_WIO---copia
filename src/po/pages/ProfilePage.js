export default class ProfilePage {
  constructor() {
    this.username = process.env.USER_PROFILE_USERNAME;
  }

  get profileButton() {
    return $('[data-testid="header-member-menu-button"]');
  }

  get visibilityButton() {
    return $('a[href="/u/angeldiaz229/profile"]');
  }

  get usernameInput() {
    return $('input#username');
  }

  get submitButton() {
    return $('button.JhBc38JIAKzHAt');
  }

  get toastMessage() {
    return $('[role="alert"]');
  }

  async modifyUsername() {
    await this.profileButton.click();
    await this.visibilityButton.click();
    await this.usernameInput.setValue('');
    await this.usernameInput.setValue(this.username);
    await this.submitButton.click();
  }

  async isToastDisplayed() {
    return await this.toastMessage.waitForDisplayed({
      timeout: 5000,
      timeoutMsg: 'Toast did not appear in time',
    });
  }
}
