import { login } from '../helpers/loginHelper.js';

describe("List Management", () => {

    beforeEach(async () => {
        await login();
    });

    afterEach(async () => {
        await browser.reloadSession();
    });

    it('should add a list to a board', async () => {
        // Access the board management
        const boardButton = await $('a[href="/b/oPUdotrg/list-managment"]');
        await boardButton.click();

        await browser.waitUntil(async () => {
            const currentUrl = await browser.getUrl();
            return currentUrl.includes('/list-managment');
        }, { timeout: 10000, timeoutMsg: 'The expected URL was not found.' });

        const addListButton = await $('button[data-testid="list-composer-button"]');
        await addListButton.click();

        const textareaList = await $('form.vVqwaYKVgTygrk textarea[data-testid="list-name-textarea"]');
        const list = 'New List';
        await textareaList.setValue('');
        await textareaList.setValue(list);

        const addElementButton = await $('button[data-testid="list-composer-add-list-button"]');
        await addElementButton.click();

        const text = await $('div.mKJWg6W_CLHoiO h2[data-testid="list-name"]').getText();

        expect(text).toBe(list);
    }); 
 
    it('should add a card to a list', async () => {
        // Access the board management
        const boardButton = await $('a[href="/b/oPUdotrg/list-managment"]');
        await boardButton.click();
    
        await browser.waitUntil(async () => {
            const currentUrl = await browser.getUrl();
            return currentUrl.includes('/list-managment');
        }, { timeout: 10000, timeoutMsg: 'The expected URL was not found.' });
    
        const addNewCardButton = await $('button[data-testid="list-add-card-button"]');
        await addNewCardButton.click();
    
        const textareaCard = await $('textarea[data-testid="list-card-composer-textarea"]');
        const cardText = 'New card';
        await textareaCard.setValue(cardText);
    
        const addCardButton = await $('button[data-testid="list-card-composer-add-card-button"]');
        await addCardButton.click();
    
        await browser.waitUntil(async () => {
            return await $('a[data-testid="card-name"]').isDisplayed();
        }, { timeout: 5000, timeoutMsg: 'The card was not added to the list.' });
    
        const cardTitle = await $('a[data-testid="card-name"]').getText();
        expect(cardTitle).toBe(cardText);
    }); 


    it('should filter a card', async () => {
        // Access the board management
        const boardButton = await $('a[href="/b/oPUdotrg/list-managment"]');
        await boardButton.click();
    
        await browser.waitUntil(async () => {
            const currentUrl = await browser.getUrl();
            return currentUrl.includes('/list-managment');
        }, { timeout: 10000, timeoutMsg: 'The expected URL was not found.' });

        const filterElementsButton = await $('button[data-testid="filter-popover-button"]');
        await filterElementsButton.click();

        const searchInput = await $('input.nch-textfield__input.lsOhPsHuxEMYEb');
        const filterString = 'WebDriverIO';
        await searchInput.setValue(filterString);

        const filteringElements = await $('div[data-testid="filter-popover-button-filter-count"] span').getText();

        expect(filteringElements).toBe("1");
    });

});
