import BoardComponent from '../../po/components/BoardComponent.js';
import ListComponent from '../../po/components/ListComponent.js';
import CardComponent from '../../po/components/CardComponent.js';
import FilterComponent from '../../po/components/FilterComponent.js';

export default class ListManagementPage {
    constructor() {
        // Inicializing components
        this.boardComponent = new BoardComponent();
        this.listComponent = new ListComponent();
        this.cardComponent = new CardComponent();
        this.filterComponent = new FilterComponent();
    }

    // Método para navegar al tablero
    async navigateToBoard() {
        await this.boardComponent.navigateToBoard();
    }

    // Método para agregar una lista
    async addList(listName) {
        await this.listComponent.addList(listName);
    }

    // Método para obtener el nombre de la lista
    async getListName() {
        return await this.listComponent.getListName();
    }

    // Método para agregar una tarjeta
    async addCard(cardText) {
        await this.cardComponent.addCard(cardText);
    }

    // Método para verificar si una tarjeta está visible
    async isCardDisplayed() {
        return await this.cardComponent.isCardDisplayed();
    }

    // Método para filtrar una tarjeta
    async filterCard(filterString) {
        await this.filterComponent.filterByString(filterString);
    }

    // Método para obtener el número de tarjetas filtradas
    async getFilterCount() {
        return await this.filterComponent.getFilterCount();
    }

    
}
