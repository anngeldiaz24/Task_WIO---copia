export default class FilterComponent {
    get filterElementsButton() {
        return $('button[data-testid="filter-popover-button"]');
    }

    get searchInput() {
        return $('input.nch-textfield__input.lsOhPsHuxEMYEb');
    }

    get filteringElementsCount() {
        return $('div[data-testid="filter-popover-button-filter-count"] span');
    }

    async openFilter() {
        await this.filterElementsButton.click();
    }

    // Aplicar el filtro
    async filterByString(filterString) {
        await this.openFilter();
        await this.searchInput.setValue(filterString);
    }

    async getFilterCount() {
        return await this.filteringElementsCount.getText();
    }
}
