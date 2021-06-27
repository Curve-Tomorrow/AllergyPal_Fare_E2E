import BasePage from '../../utils/base.page';
const ADD_RECIPE_BTN_SELECTOR = '.float-right > .btn';
const RECIPE_TITLE_SELECTOR = '#recipe_name';
const RECIPE_SUMMARY_TEXT_BOX_SELECTOR = '#recipe_summary_ifr';
const RECIPE_NOTES_TEXT_BOX_SELECTOR = '#recipe_notes_ifr';
const RECIPE_COOKING_METHOD_UK_BUTTON_SELECTOR = ':nth-child(1) > .nav-link';
const RECIPE_COOKING_METHOD_UK_TEXT_BOX_SELECTOR = '#recipe_cooking_methods_attributes_0_description_ifr';
const RECIPE_COOKING_METHOD_US_BUTTON_SELECTOR = ':nth-child(2) > .nav-link';
const RECIPE_COOKING_METHOD_US_TEXT_BOX_SELECTOR = '#recipe_cooking_methods_attributes_1_description_ifr';
const RECIPE_COOKING_METHOD_AUS_BUTTON_SELECTOR = ':nth-child(3) > .nav-link';
const RECIPE_COOKING_METHOD_AUS_TEXT_BOX_SELECTOR = '#recipe_cooking_methods_attributes_2_description_ifr';
const RECIPE_PREP_HR_TEXT_BOX_SELECTOR = '#recipe_prep_hour';
const RECIPE_PREP_MIN_TEXT_BOX_SELECTOR = '#recipe_prep_min';
const RECIPE_COOKING_HR_TEXT_BOX_SELECTOR = '#recipe_cook_hour';
const RECIPE_COOKING_MIN_TEXT_BOX_SELECTOR = '#recipe_cook_min';
const RECIPE_SERVING_TEXT_BOX_SELECTOR = '#recipe_serving';
const RECIPE_CALORIES_PER_SERVE_TEXT_BOX_SELECTOR = '#recipe_calories';
const RECIPE_CARBOHYDRATE_TEXT_BOX_SELECTOR = '#recipe_carbs';
const RECIPE_PROTEIN_TEXT_BOX_SELECTOR = '#recipe_protein';
const RECIPE_FAT_TEXT_BOX_SELECTOR = '#recipe_fat';
const RECIPE_FIBRE_TEXT_BOX_SELECTOR = '#recipe_fibre';
const RECIPE_SAVE_BTN_SELECTOR = '.btn-brand';
const RECIPE_CANCEL_BTN_SELECTOR = '.btn-outline-brand';
const RECIPE_TAG_ID_SELECTOR = '#recipe_tag_ids';
const RECIPE_INGREDIENT_NOTES = '#recipe_recipe_ingredients_attributes_0_notes';
const RECIPE_INGREDIENT_NOTES_SECOND = "//label[contains(text(),'Notes')]//following-sibling::input";
const RECIPES_PAGE_VALIDATION = "//h1[contains(text(),'Recipes')]";
const RECIPE_IFRAME_INPUT_SELECTOR = '#tinymce';
const RECIPE_ADD_INGREDIENT_AMOUNT_UNIT_BTN_SELECTOR = '//h3//a/i';
const RECIPE_FIRST_INGREDIENT_AMOUNT_TEXT_BOX_SELECTOR = "//input[@placeholder= 'Amount']";
const RECIPE_FIRST_INGREDIENT_UNIT_DROPDOWN_SELECTOR = "//label[contains(text(),'Unit')]//following-sibling::select";
const RECIPE_ADD_INGREDIENT_BTN_SELECTOR = '//h3//a/i';
const RECIPE_SELECT_INGREDIENT_DROPDOWN_SELECTOR =
  "//label[contains(text(),'SELECT INGREDIENT')]//following-sibling::select";
const RECIPE_ALTERNATE_RECIPE_DROPDOWN_SELECTOR =
  "//label[contains(text(),'Alternative recipe')]//following-sibling::select";

export interface RecipeModel {
  title: string;
  summary: string;
  notes: string;
  cookingMethodUK: string;
  cookingMethodUS: string;
  cookingMethodAUS: string;
  prepHour: number;
  prepMin: number;
  cookingHour: number;
  cookingMin: number;
  recipeServing: number;
  recipeCaloriesPerServe: number;
  recipeCarbohydrate: number;
  recipeProtein: number;
  recipeFat: number;
  recipeFibre: number;
  recipeTag: number;
  recipeIngredient: number;
  recipeIngredient2: number;
  recipeIngredientNotes: string;
  recipeIngredientNotes2: string;
  firstIngredientImperialAmount: string;
  firstIngredientMetricAmount: string;
  firstIngredientImperialUnit: number;
  firstIngredientMetricUnit: number;
  secondIngredientAmount: string;
  secondIngredientUnit: number;
  alternateRecipe: number;
}

export class AdminRecipePage extends BasePage {
  constructor() {
    super();
  }

  verifyRecipePage() {
    cy.xpath(RECIPES_PAGE_VALIDATION);
    cy.get(ADD_RECIPE_BTN_SELECTOR);
  }

  clickOnAddRecipeBtn() {
    this.click(ADD_RECIPE_BTN_SELECTOR);
  }

  addNewRecipeTitle(tag: string) {
    this.type(RECIPE_TITLE_SELECTOR, tag);
  }

  saveNewRecipe() {
    this.click(RECIPE_SAVE_BTN_SELECTOR);
  }

  cancelNewRecipe() {
    this.click(RECIPE_CANCEL_BTN_SELECTOR);
  }

  addNewRecipeSummary(summary: string) {
    this.addInsideIframe(RECIPE_SUMMARY_TEXT_BOX_SELECTOR, RECIPE_IFRAME_INPUT_SELECTOR, summary);
  }

  addNewRecipeNotes(notes: string) {
    this.addInsideIframe(RECIPE_SUMMARY_TEXT_BOX_SELECTOR, RECIPE_IFRAME_INPUT_SELECTOR, notes);
  }

  clickOnUkCookingMethodButton() {
    this.click(RECIPE_COOKING_METHOD_UK_BUTTON_SELECTOR);
  }

  addNewUKCookingMethod(cookingMethod: string) {
    this.addInsideIframe(RECIPE_COOKING_METHOD_UK_TEXT_BOX_SELECTOR, RECIPE_IFRAME_INPUT_SELECTOR, cookingMethod);
  }

  clickOnUSCookingMethodButton() {
    this.click(RECIPE_COOKING_METHOD_US_BUTTON_SELECTOR);
  }

  addNewUSCookingMethod(cookingMethod: string) {
    this.addInsideIframe(RECIPE_COOKING_METHOD_US_TEXT_BOX_SELECTOR, RECIPE_IFRAME_INPUT_SELECTOR, cookingMethod);
  }

  clickOnAUSCookingMethodButton() {
    this.click(RECIPE_COOKING_METHOD_AUS_BUTTON_SELECTOR);
  }

  addNewAUSCookingMethod(cookingMethod: string) {
    this.addInsideIframe(RECIPE_COOKING_METHOD_AUS_TEXT_BOX_SELECTOR, RECIPE_IFRAME_INPUT_SELECTOR, cookingMethod);
  }

  providePrepHour(hour: number) {
    this.type(RECIPE_PREP_HR_TEXT_BOX_SELECTOR, hour);
  }

  providePrepMin(min: number) {
    this.type(RECIPE_PREP_MIN_TEXT_BOX_SELECTOR, min);
  }

  provideCookingHour(hour: number) {
    this.type(RECIPE_COOKING_HR_TEXT_BOX_SELECTOR, hour);
  }

  provideCookingMin(min: number) {
    this.type(RECIPE_COOKING_MIN_TEXT_BOX_SELECTOR, min);
  }

  provideRecipeServing(num: number) {
    this.type(RECIPE_SERVING_TEXT_BOX_SELECTOR, num);
  }

  provideRecipeCaloriesPerServe(cal: number) {
    this.type(RECIPE_CALORIES_PER_SERVE_TEXT_BOX_SELECTOR, cal);
  }

  provideRecipeCarbohydrate(carb: number) {
    this.type(RECIPE_CARBOHYDRATE_TEXT_BOX_SELECTOR, carb);
  }

  provideRecipeProtein(protein: number) {
    this.type(RECIPE_PROTEIN_TEXT_BOX_SELECTOR, protein);
  }

  provideRecipeFat(fat: number) {
    this.type(RECIPE_FAT_TEXT_BOX_SELECTOR, fat);
  }

  provideRecipeFibre(fibre: number) {
    this.type(RECIPE_FIBRE_TEXT_BOX_SELECTOR, fibre);
  }

  selectTagId(val: number) {
    cy.get(RECIPE_TAG_ID_SELECTOR).invoke('val', val).trigger('ionChange');
  }

  provideIngredientNotes(notes: string) {
    this.type(RECIPE_INGREDIENT_NOTES, notes);
  }

  clickOnAddIngredientBtn() {
    this.click(RECIPE_ADD_INGREDIENT_AMOUNT_UNIT_BTN_SELECTOR);
  }

  provideFirstIngredientAmount(amount: string) {
    // @ts-ignore
    cy.type(RECIPE_FIRST_INGREDIENT_AMOUNT_TEXT_BOX_SELECTOR, amount).first();
  }

  selectFirstIngredientUnit(unit: number) {
    cy.xpath(RECIPE_FIRST_INGREDIENT_UNIT_DROPDOWN_SELECTOR).last().invoke('val', unit).trigger('ionChange');
  }

  clickOnAddIngredientButton() {
    cy.get(RECIPE_ADD_INGREDIENT_BTN_SELECTOR).last().click();
  }

  selectAlternateRecipe(altRcp: number) {
    cy.xpath(RECIPE_ALTERNATE_RECIPE_DROPDOWN_SELECTOR).first().invoke('val', altRcp).trigger('ionChange');
  }

  addNewRecipe(recipe: RecipeModel) {
    this.click(ADD_RECIPE_BTN_SELECTOR);
    this.type(RECIPE_TITLE_SELECTOR, recipe.title);
    this.addInsideIframe(RECIPE_SUMMARY_TEXT_BOX_SELECTOR, RECIPE_IFRAME_INPUT_SELECTOR, recipe.summary);
    this.addInsideIframe(RECIPE_NOTES_TEXT_BOX_SELECTOR, RECIPE_IFRAME_INPUT_SELECTOR, recipe.notes);
    this.click(RECIPE_COOKING_METHOD_UK_BUTTON_SELECTOR);
    this.addInsideIframe(
      RECIPE_COOKING_METHOD_UK_TEXT_BOX_SELECTOR,
      RECIPE_IFRAME_INPUT_SELECTOR,
      recipe.cookingMethodUK
    );
    this.click(RECIPE_COOKING_METHOD_US_BUTTON_SELECTOR);
    this.addInsideIframe(
      RECIPE_COOKING_METHOD_US_TEXT_BOX_SELECTOR,
      RECIPE_IFRAME_INPUT_SELECTOR,
      recipe.cookingMethodUS
    );
    this.click(RECIPE_COOKING_METHOD_AUS_BUTTON_SELECTOR);
    this.addInsideIframe(
      RECIPE_COOKING_METHOD_AUS_TEXT_BOX_SELECTOR,
      RECIPE_IFRAME_INPUT_SELECTOR,
      recipe.cookingMethodAUS
    );
    this.type(RECIPE_PREP_HR_TEXT_BOX_SELECTOR, recipe.prepHour);
    this.type(RECIPE_PREP_MIN_TEXT_BOX_SELECTOR, recipe.prepMin);
    this.type(RECIPE_COOKING_HR_TEXT_BOX_SELECTOR, recipe.cookingHour);
    this.type(RECIPE_COOKING_MIN_TEXT_BOX_SELECTOR, recipe.cookingMin);
    // this.type(RECIPE_SERVING_TEXT_BOX_SELECTOR, recipe.recipeServing);
    this.type(RECIPE_CALORIES_PER_SERVE_TEXT_BOX_SELECTOR, recipe.recipeCaloriesPerServe);
    this.type(RECIPE_CARBOHYDRATE_TEXT_BOX_SELECTOR, recipe.recipeCarbohydrate);
    this.type(RECIPE_PROTEIN_TEXT_BOX_SELECTOR, recipe.recipeProtein);
    this.type(RECIPE_FAT_TEXT_BOX_SELECTOR, recipe.recipeFat);
    this.type(RECIPE_FIBRE_TEXT_BOX_SELECTOR, recipe.recipeFibre);
    cy.get(RECIPE_TAG_ID_SELECTOR).invoke('val', recipe.recipeTag).trigger('ionChange');
    this.type(RECIPE_INGREDIENT_NOTES, recipe.recipeIngredientNotes);
    cy.xpath(RECIPE_ADD_INGREDIENT_AMOUNT_UNIT_BTN_SELECTOR).first().click();
    // @ts-ignore
    cy.xpath(RECIPE_FIRST_INGREDIENT_AMOUNT_TEXT_BOX_SELECTOR).first().type(recipe.firstIngredientImperialAmount);
    cy.xpath(RECIPE_FIRST_INGREDIENT_UNIT_DROPDOWN_SELECTOR)
      .invoke('val', recipe.firstIngredientImperialUnit)
      .trigger('ionChange');
    cy.xpath(RECIPE_ADD_INGREDIENT_AMOUNT_UNIT_BTN_SELECTOR).first().click();
    cy.xpath(RECIPE_FIRST_INGREDIENT_AMOUNT_TEXT_BOX_SELECTOR).last().type(recipe.firstIngredientMetricAmount);
    cy.xpath(RECIPE_FIRST_INGREDIENT_UNIT_DROPDOWN_SELECTOR)
      .last()
      .invoke('val', recipe.firstIngredientMetricUnit)
      .trigger('ionChange');
    cy.xpath(RECIPE_ADD_INGREDIENT_BTN_SELECTOR).last().click();
    cy.xpath(RECIPE_SELECT_INGREDIENT_DROPDOWN_SELECTOR)
      .last()
      .invoke('val', recipe.recipeIngredient2)
      .trigger('ionChange');
    this.type(RECIPE_INGREDIENT_NOTES, recipe.recipeIngredientNotes);
    cy.xpath(RECIPE_INGREDIENT_NOTES_SECOND).last().type(recipe.recipeIngredientNotes2);
    cy.xpath(RECIPE_ALTERNATE_RECIPE_DROPDOWN_SELECTOR)
      .first()
      .invoke('val', recipe.alternateRecipe)
      .trigger('ionChange');
    this.click(RECIPE_SAVE_BTN_SELECTOR);
  }
}
