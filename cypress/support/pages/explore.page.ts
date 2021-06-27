import BasePage from '../utils/base.page';

const SEARCH_INPUT_SELECTOR = '#search-input';
const FAV_BTN_SELECTOR = 'app-favourite button';
const CLEAR_COMMAND = '{selectall}{backspace}';
const SEARCH_BTN = 'form.search-form button';

export type ExploreTab = 'recipe' | 'workout' | 'mindfulness' | 'learning' | 'success' | 'article';
const DOCUMENTS = ['mindfulness', 'learning', 'success', 'article'];
const TAB_WITHOUT_S = ['mindfulness', 'learning', 'success'];

export class WebAppExplorePage extends BasePage {
  constructor() {
    super();
  }

  clickShowFiltersBtn() {
    this.clickElementWithText('Show filters');
  }

  searchBy(text: string) {
    this.type(SEARCH_INPUT_SELECTOR, text);
    this.click(SEARCH_BTN);
    this.waitForElementToNotAppear('app-loader');
  }

  clearSearchResult() {
    this.typeCommand(SEARCH_INPUT_SELECTOR, CLEAR_COMMAND);
    this.waitForElementToNotAppear('app-loader');
  }

  checkSearchResult(tab: ExploreTab, text: string) {
    // fix me
    this.wait(1000);
    const HEADER_SELECTOR = DOCUMENTS.includes(tab) ? `app-explore` : `app-${tab} h3`;
    this.shouldAllContainText(HEADER_SELECTOR, text);
  }

  checkFavResult(tab: ExploreTab) {
    cy.get(`${this._getComponentName(tab)}:nth-of-type(1) app-favourite`)
      .invoke('attr', 'ng-reflect-favourite')
      .should('eq', 'true');
  }

  clickFavBtn(tab: ExploreTab) {
    this.click(`ion-col:first-child ${this._getComponentName(tab)} ${FAV_BTN_SELECTOR}`);
  }

  clickSubTab(tab: ExploreTab) {
    this.clickBtnWithText(TAB_WITHOUT_S.includes(tab) ? tab : `${tab}s`);
    this.waitForElementToNotAppear('app-loader');
  }

  clickTagWithText(tag: string) {
    cy.get('.filter__tag').contains(tag).click();
  }

  // recipe and workout has app-recipe and app-workout, other page uses app-explore component
  private _getComponentName(tab: ExploreTab) {
    return DOCUMENTS.includes(tab) ? `app-explore` : `app-${tab}`;
  }
}
