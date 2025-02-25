import { login } from '../helpers/loginHelper.js';

describe("Board Management", () => {

    beforeEach(async () => {
        await login();
    });

    afterEach(async () => {
        await browser.reloadSession();
    });

    it('should create a board successfully', async () => {
        // Access the board management
        const createBoardButton = await $('div.board-tile.mod-add');
        await createBoardButton.waitForClickable({ timeout: 5000 });
        await createBoardButton.click();

        const boardTitleInput = await $('input[data-testid="create-board-title-input"].nch-textfield__input');
        const newBoardText = 'New board';

        // Escribir el nombre del nuevo tablero
        await boardTitleInput.setValue(newBoardText);

        //Crear tablero
        const submitButton = await $('button.ijFumaLuInvBrL');
        await submitButton.waitForDisplayed({ timeout: 5000, timeoutMsg: 'Submit button not visible' });
        await submitButton.click();
    }); 

});
