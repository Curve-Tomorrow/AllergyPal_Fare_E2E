import BasePage from '../../utils/base.page';
import {RecipeModel} from './admin.recipe.page';
const ADD_LOCATION_BTN_SELECTOR = '.float-right > .btn';
const LOCATION_NAME_TEXTBOX_SELECTOR = '#location_name';
const LOCATION_SAVE_BTN_SELECTOR = '.btn-brand';
const LOCATION_CANCEL_BTN_SELECTOR = '.btn-outline-brand';
const LOCATIONS_PAGE_VALIDATION = "//h1[contains(text(),'Locations')]";

export interface LocationModel {
  locationName: string;
}

export class AdminLocationPage extends BasePage {
  constructor() {
    super();
  }

  verifyLocationPage() {
    cy.xpath(LOCATIONS_PAGE_VALIDATION);
    cy.get(ADD_LOCATION_BTN_SELECTOR);
  }
  clickOnAddLocationBtn() {
    this.click(ADD_LOCATION_BTN_SELECTOR);
  }

  addNewLocationName(location: string) {
    this.type(LOCATION_NAME_TEXTBOX_SELECTOR, location);
  }

  saveNewLocation() {
    this.click(LOCATION_SAVE_BTN_SELECTOR);
  }

  cancelNewLocation() {
    this.click(LOCATION_CANCEL_BTN_SELECTOR);
  }

  addNewLocation(location: LocationModel) {
    cy.xpath(LOCATIONS_PAGE_VALIDATION);
    cy.get(ADD_LOCATION_BTN_SELECTOR);
    this.click(ADD_LOCATION_BTN_SELECTOR);
    this.type(LOCATION_NAME_TEXTBOX_SELECTOR, location.locationName);
    this.click(LOCATION_SAVE_BTN_SELECTOR);
  }
}
