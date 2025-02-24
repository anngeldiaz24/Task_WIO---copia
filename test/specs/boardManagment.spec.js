import { login } from '../helpers/loginHelper.js';

describe("Board Management", () => {

    beforeEach(async () => {
        await login();
        await browser.refresh(); 
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

        // Hacer clic en el botón de crear
        const submitButton = await $('button.ijFumaLuInvBrL');
        await submitButton.waitForDisplayed({ timeout: 5000, timeoutMsg: 'Submit button not visible' });
        await submitButton.click();

        /* // Esperar a que el título del nuevo tablero se muestre
        const titleBoard = await $('h1.HKTtBLwDyErB_o');
        await titleBoard.waitForDisplayed({ timeout: 5000, timeoutMsg: 'Board title not displayed after creation' });

        // Obtener texto del título del nuevo tablero
        const linkText = await titleBoard.getText();
        expect(linkText).toBe(newBoardText); */

    });

});
