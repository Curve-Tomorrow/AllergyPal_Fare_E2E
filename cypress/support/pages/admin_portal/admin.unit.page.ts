import BasePage from '../../utils/base.page';
const ADD_UNIT_BTN_SELECTOR = "//a[contains(text(),'Add Unit')]";
const UNIT_NAME_TEXT_BOX_SELECTOR = '#unit_name';
const UNIT_SYSTEM_DROPDOWN_SELECTOR = '#unit_system';
const UNIT_SAVE_BTN_SELECTOR = '.btn-brand';
const UNIT_CANCEL_BTN_SELECTOR = '.btn-outline-brand';
const UNITS_PAGE_VALIDATION = "//h1[contains(text(),'Units')]";

export interface UnitModel {
  unitName: string;
  unitSystem: string;
}

export class AdminUnitPage extends BasePage {
  constructor() {
    super();
  }

  verifyUnitPage() {
    this.waitForXpathElementToAppear(UNITS_PAGE_VALIDATION);
    this.waitForXpathElementToAppear(ADD_UNIT_BTN_SELECTOR);
  }

  clickOnAddNewUnitBtn() {
    this.clickByXpath(ADD_UNIT_BTN_SELECTOR);
  }

  addNewUnitName(Ingredient: string) {
    this.type(UNIT_NAME_TEXT_BOX_SELECTOR, Ingredient);
  }

  saveNewUnit() {
    this.click(UNIT_SAVE_BTN_SELECTOR);
  }

  cancelNewUnit() {
    this.click(UNIT_CANCEL_BTN_SELECTOR);
  }

  selectUnitSystem(val: number) {
    cy.get(UNIT_SYSTEM_DROPDOWN_SELECTOR).invoke('val', val).trigger('ionChange');
  }

  createUnit(unit: UnitModel) {
    this.waitForXpathElementToAppear(UNITS_PAGE_VALIDATION);
    this.waitForXpathElementToAppear(ADD_UNIT_BTN_SELECTOR);
    this.clickByXpath(ADD_UNIT_BTN_SELECTOR);
    this.waitForElementToAppear(UNIT_NAME_TEXT_BOX_SELECTOR);
    this.type(UNIT_NAME_TEXT_BOX_SELECTOR, unit.unitName);
    cy.get(UNIT_SYSTEM_DROPDOWN_SELECTOR).invoke('val', unit.unitSystem).trigger('ionChange');
    this.click(UNIT_SAVE_BTN_SELECTOR);
    this.waitForXpathElementToAppear(UNITS_PAGE_VALIDATION);
    this.waitForXpathElementToAppear(ADD_UNIT_BTN_SELECTOR);
  }
}
