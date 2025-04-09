export default class CardComponent {
  get addNewCardButton() {
    return $('button[data-testid="list-add-card-button"]');
  }

  get textareaCard() {
    return $('textarea[data-testid="list-card-composer-textarea"]');
  }

  get addCardButton() {
    return $('button[data-testid="list-card-composer-add-card-button"]');
  }

  get cardName() {
    return $('a[data-testid="card-name"]');
  }

  async addCard(cardText) {
    await this.addNewCardButton.click();
    await this.textareaCard.setValue(cardText);
    await this.addCardButton.click();
  }

  async isCardDisplayed() {
    return await this.cardName.isDisplayed();
  }
}
