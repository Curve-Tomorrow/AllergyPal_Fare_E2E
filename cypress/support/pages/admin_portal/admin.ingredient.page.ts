import BasePage from '../../utils/base.page';
const ADD_INGREDIENT_BTN_SELECTOR = "//a[contains(text(),'Add Ingredient')]";
const INGREDIENT_UK_NAME_TEXTBOX_SELECTOR = '#ingredient_name';
const INGREDIENT_US_NAME_TEXTBOX_SELECTOR = '#ingredient_us_name';
const INGREDIENT_AUS_NAME_TEXTBOX_SELECTOR = '#ingredient_aus_name';
const INGREDIENT_LOCATION_DROPDOWN_SELECTOR = '#ingredient_location_id';
const INGREDIENT_SAVE_BTN_SELECTOR = '.btn-brand';
const INGREDIENT_CANCEL_BTN_SELECTOR = '.btn-outline-brand';
const INGREDIENTS_PAGE_VALIDATION = "//h1[contains(text(),'Ingredients')]";

export interface IngredientModel {
  ukName: string;
  usName: string;
  ausName: string;
  location: number;
}

export class AdminIngredientPage extends BasePage {
  constructor() {
    super();
  }

  verifyIngredientPage() {
    this.waitForXpathElementToAppear(INGREDIENTS_PAGE_VALIDATION, 9000);
    this.waitForXpathElementToAppear(ADD_INGREDIENT_BTN_SELECTOR, 9000);
  }

  clickOnAddIngredientBtn() {
    this.clickByXpath(ADD_INGREDIENT_BTN_SELECTOR);
  }

  addNewIngredientUKName(Ingredient: string) {
    this.type(INGREDIENT_UK_NAME_TEXTBOX_SELECTOR, Ingredient);
  }

  addNewIngredientUSName(Ingredient: string) {
    this.type(INGREDIENT_US_NAME_TEXTBOX_SELECTOR, Ingredient);
  }

  addNewIngredientAUSName(Ingredient: string) {
    this.type(INGREDIENT_AUS_NAME_TEXTBOX_SELECTOR, Ingredient);
  }

  saveNewIngredient() {
    this.click(INGREDIENT_SAVE_BTN_SELECTOR);
  }

  cancelNewIngredient() {
    this.click(INGREDIENT_CANCEL_BTN_SELECTOR);
  }

  selectLocationDropdown(val: number) {
    cy.get(INGREDIENT_LOCATION_DROPDOWN_SELECTOR).invoke('val', val).trigger('ionChange');
  }

  createNewIngredient(ingredient: IngredientModel) {
    this.clickByXpath(ADD_INGREDIENT_BTN_SELECTOR);
    this.waitForElementToAppear(INGREDIENT_UK_NAME_TEXTBOX_SELECTOR);
    cy.wait(2000);
    this.type(INGREDIENT_UK_NAME_TEXTBOX_SELECTOR, ingredient.ukName);
    this.type(INGREDIENT_US_NAME_TEXTBOX_SELECTOR, ingredient.usName);
    this.type(INGREDIENT_AUS_NAME_TEXTBOX_SELECTOR, ingredient.ausName);
    cy.get(INGREDIENT_LOCATION_DROPDOWN_SELECTOR).invoke('val', ingredient.location).trigger('ionChange');
    this.click(INGREDIENT_SAVE_BTN_SELECTOR);
    this.waitForXpathElementToAppear(INGREDIENTS_PAGE_VALIDATION, 9000);
    this.waitForXpathElementToAppear(ADD_INGREDIENT_BTN_SELECTOR, 9000);
  }
}
