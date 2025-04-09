import { login } from '../helpers/loginHelper.js';
import ListManagementPage from '../../po/pages/ListManagementPage.js';

describe('List Management', () => {
  let listManagementPage;

  beforeEach(async () => {
    await login();
    listManagementPage = new ListManagementPage();
  });

  afterEach(async () => {
    await browser.reloadSession();
  });

  it('should navigate to the board and add a list', async () => {
    await listManagementPage.navigateToBoard();

    const listName = 'New List';
    await listManagementPage.addList(listName);
    const text = await listManagementPage.getListName();
    expect(text).toBe(listName);
  });

  it('should add a card to a list', async () => {
    const cardText = 'New card';
    await listManagementPage.navigateToBoard();
    await listManagementPage.addCard(cardText);
    const cardTitle = await listManagementPage.isCardDisplayed();
    expect(cardTitle).toBe(true);
  });

  it('should filter a card', async () => {
    const filterString = 'WebDriverIO';
    await listManagementPage.navigateToBoard();
    await listManagementPage.filterCard(filterString);
    const filteringElements = await listManagementPage.getFilterCount();
    expect(filteringElements).toBe('1');
  });
});
