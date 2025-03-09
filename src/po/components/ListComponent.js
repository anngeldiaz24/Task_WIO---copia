export default class ListComponent {
    get addListButton() {
        return $('button[data-testid="list-composer-button"]');
    }

    get textareaList() {
        return $('form.vVqwaYKVgTygrk textarea[data-testid="list-name-textarea"]');
    }

    get addElementButton() {
        return $('button[data-testid="list-composer-add-list-button"]');
    }

    get listNameText() {
        return $('div.mKJWg6W_CLHoiO h2[data-testid="list-name"]');
    }

    async addList(listName) {
        await this.addListButton.click();
        await this.textareaList.setValue('');
        await this.textareaList.setValue(listName);
        await this.addElementButton.click();
    }

    async getListName() {
        return await this.listNameText.getText();
    }
}
