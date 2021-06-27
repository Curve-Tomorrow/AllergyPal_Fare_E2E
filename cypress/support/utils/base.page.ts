import {ADMIN_BASE_URL, BASE_URL, WAIT_TIMEOUT} from './constant';

type INPUT = 'input' | 'textarea';
export type TAB = 'Home' | 'Track' | 'Explore' | 'Community' | 'Shopping' | 'Profile';

const ION_PICKER_BTN_SELECTOR = 'ion-picker div.picker-toolbar-button button';
const APP_NAVIGATION = 'app-navigation > .navigation';
export interface FormItem {
  selector: string;
  value: string;
}

export default class BasePage {
  constructor() {}

  type(selector: string, text: any) {
    cy.get(selector).type(`{selectall}{backspace}${text}`, {force: true});
  }

  typeCommand(selector: string, command: string) {
    cy.get(selector).type(command);
  }

  uploadPhoto(selector: string, filename: string) {
    cy.get(selector).attachFile(filename);
  }

  xpathType(selector: string, text: any) {
    cy.xpath(selector).type(text);
  }

  select(selector: string, option: any) {
    cy.get(selector).click();
    cy.get('button').contains(option).click();
    cy.get('button').contains('OK').click();
    this.waitForElementToNotAppear('ion-alert');
  }
  /**
   *
   * @param inputName => name of the input field where value can be searched on
   * @param value => value that to be selected
   */
  selectDropdown(inputName: string, value: string) {
    this.type(`app-dropdown-search input[name='${inputName}']`, value);
    cy.get('ion-list ion-item ion-label').contains(value).click();
  }

  selectTodaysDate(selector: string) {
    this.click(selector);
    cy.get(ION_PICKER_BTN_SELECTOR).contains('Done').click();
  }

  check(formControlName: string, option: any) {
    cy.get(`ion-radio-group[formcontrolname='${formControlName}']`).within((elm) => {
      cy.wrap(elm).get(`ion-radio[ng-reflect-value="${option}"]`).click();
    });
  }

  checkCustomRadio(formControlName: string, labelText: string | number) {
    cy.get(`ion-radio-group[formcontrolname='${formControlName}']`).within((elm) => {
      cy.wrap(elm).contains(labelText.toString()).parent().click();
    });
  }

  click(selector: string, params = {}) {
    cy.get(selector).click(params);
  }

  clickTab(tab: TAB, page: string) {
    cy.get(this.getComponentName(page)).within(() => {
      this.clickLinkWithText(tab);
    });
    cy.waitUntil(() => this.getCurrentUrl().then((url) => url.includes(tab.toLowerCase())));
  }

  clickLinkWithText(text: string, options = {}) {
    cy.get('a').contains(text).click(options);
  }

  clickByXpath(selector: string, options = {}) {
    cy.wait(2000);
    cy.xpath(selector, {timeout: 9000});
    cy.xpath(selector).click();
  }

  getElementBySelector(selector: string) {
    return cy.get(selector);
  }

  goToAdminUrl(path: string) {
    cy.visit(ADMIN_BASE_URL + path);
  }

  clickBtnWithText(text: string) {
    cy.get('button, ion-button').contains(text).click();
  }

  clickElementWithText(text: string, params = {}) {
    const el = cy.get('body').contains(text);
    cy.get('body').contains(text).click(params);
  }

  waitForElementToAppear(elementSelector: string, timeout = WAIT_TIMEOUT) {
    cy.get(elementSelector, {timeout}).should('be.visible');
  }

  waitForElementToNotAppear(elementSelector: string, timeout = WAIT_TIMEOUT) {
    cy.get(elementSelector, {timeout}).should('not.exist');
  }

  waitForXpathElementToAppear(elementSelector: string, timeout = WAIT_TIMEOUT) {
    cy.xpath(elementSelector, {timeout}).should('be.visible');
  }

  waitForXpathElementToNotAppear(elementSelector: string, timeout = WAIT_TIMEOUT) {
    cy.xpath(elementSelector, {timeout}).should('not.exist');
  }

  getFormInputSelector(formControlName: string, inputType: INPUT = 'input') {
    return `ion-${inputType}[formcontrolname='${formControlName}'] ${inputType}`;
  }

  getFormSelector(formControlName: string) {
    return `[formcontrolname='${formControlName}']`;
  }

  fillFormInsideIframe(model: FormItem[]) {
    this.waitForElementToAppear('iframe');
    cy.get('iframe').within(($iframe) => {
      const $content = $iframe.contents();
      model.forEach((m) => {
        const elm = $content.find(m.selector);
        cy.wrap(elm).clear().type(m.value);
      });
    });
  }

  getElement(selector: string) {
    return cy.get(selector);
  }

  goToUrl(path: string) {
    cy.visit(BASE_URL + path);
  }

  getCurrentUrl() {
    return cy.url();
  }

  // todo get current path after root
  getCurrentPath() {
    return cy.location('pathname');
  }

  wait(millisecond: number) {
    cy.wait(millisecond);
  }

  shouldContainText(selector: string, text: string) {
    cy.get(selector).should('contain.text', text);
  }

  shouldHaveText(selector: string, text: string) {
    cy.get(selector).should(($elm) => {
      expect($elm.text().trim()).equal(text);
    });
  }

  shouldAllContainText(selector: string, text: string) {
    cy.get(selector).each(($elm) => {
      cy.wrap($elm).should('contain.text', text);
    });
  }

  getEnv(key: string) {
    return Cypress.env(key);
  }

  private getComponentName(page: string) {
    const component = ['home', 'recipes', 'profile'];
    const pageComponent = page.toLowerCase().replace(/\s/g, '-');
    const componentName = component.includes(pageComponent) ? `app-${pageComponent}` : `app-${pageComponent}-page`;
    return componentName;
  }
  addInsideIframe(iframeSelector: string, inputSelector: string, value: string) {
    cy.get(iframeSelector).then(($iframe) => {
      const iframe = $iframe.contents();
      const input = iframe.find(inputSelector);
      cy.wrap(input).type(value);
    });
  }
}
