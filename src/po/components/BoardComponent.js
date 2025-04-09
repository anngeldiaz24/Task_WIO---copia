export default class BoardComponent {
  get boardButton() {
    return $('a[href="/b/oPUdotrg/list-managment"]');
  }

  async navigateToBoard() {
    const boardComponent = new BoardComponent();
    const boardButton = boardComponent.boardButton;
    await boardButton.click();
    await browser.waitUntil(
      async () => {
        const currentUrl = await browser.getUrl();
        return currentUrl.includes('/list-managment');
      },
      { timeout: 10000, timeoutMsg: 'The expected URL was not found.' },
    );
  }
}
