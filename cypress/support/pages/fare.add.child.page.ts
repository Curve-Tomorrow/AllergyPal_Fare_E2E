import BasePage from '../utils/base.page';
const FIRST_NAME_CHILD_TEXT_BOX_SELECTOR =
  ':nth-child(3) > :nth-child(1) > .item-interactive > .ng-untouched > .native-input';
const LAST_NAME_CHILD_TEXT_BOX_SELECTOR =':nth-child(2) > .item-interactive > .ng-untouched > .native-input';
const DOB_FIELD_SELECTOR =':nth-child(4) > .md > .item > ion-datetime';
const DOB_FIELD_DONE_BUTTON_SELECTOR =':nth-child(2) > .picker-button';

const DOB_FIELD_MONTH_BUTTON_SELECTOR ='.picker-opts-right > .picker-opts > .picker-opt-selected';
const DOB_FIELD_DATE_BUTTON_SELECTOR ='[style="max-width: 34px;"] > .picker-opts > .picker-opt-selected';
const DOB_FIELD_YEAR_BUTTON_SELECTOR ='.picker-opts-left > .picker-opts > .picker-opt-selected';

const ZIP_CODE_TEXT_BOX_SELECTOR =':nth-child(5) > .md > .item-interactive > .ng-untouched > .native-input';
const EMERGENCY_CONTACT_NAME_SELECTOR =':nth-child(7) > .md > .item-interactive > .ng-untouched > .native-input';
const EMERGENCY_CONTACT_NUMBER_SELECTOR ='.has-phone-number-prefix > .ng-untouched > .native-input';

const CANCEL_BUTTON_SELECTOR = '.buttons-first-slot > .ng-star-inserted';
const NEXT_BUTTON_SELECTOR = 'strong';
const PIC_UPLOAD_BUTTON_SELECTOR = '.ion-padding > .ios > .md';

const PEANUT_IMAGE_SELECTOR = ':nth-child(1) > app-allergen-list-item > .allergen-checkbox > label';
const TREE_NUTS_IMAGE_SELECTOR = ':nth-child(2) > app-allergen-list-item > .allergen-checkbox > label';
const SESAME_IMAGE_SELECTOR = ':nth-child(3) > app-allergen-list-item > .allergen-checkbox > label';
const WHEAT_IMAGE_SELECTOR = ':nth-child(4) > app-allergen-list-item > .allergen-checkbox > label';
const SOY_IMAGE_SELECTOR = ':nth-child(5) > app-allergen-list-item > .allergen-checkbox > label';
const MILK_IMAGE_SELECTOR = ':nth-child(6) > app-allergen-list-item > .allergen-checkbox > label';
const EGG_IMAGE_SELECTOR = ':nth-child(7) > app-allergen-list-item > .allergen-checkbox > label';
const FISH_IMAGE_SELECTOR = ':nth-child(8) > app-allergen-list-item > .allergen-checkbox > label';
const SHELFISH_IMAGE_SELECTOR = ':nth-child(9) > app-allergen-list-item > .allergen-checkbox > label';
const FIRST_OTHER_ALLERGEN_IMAGE_SELECTOR = ':nth-child(10) > app-allergen-list-item > .allergen-checkbox > label';
const SECOND_OTHER_ALLERGEN_IMAGE_SELECTOR = ':nth-child(11) > app-allergen-list-item > .allergen-checkbox > label';

export function getAllergen(allergen: number) {
  return `:nth-child(${allergen}) > app-allergen-list-item > .allergen-checkbox > label`;
}

const ADD_ANOTHER_ALLERGEN_BUTTON_SELECTOR = '#add-allergen > span';
const ADD_ANOTHER_ALLERGEN_TEXT_BOX_SELECTOR = '.native-input';
const ADD_ANOTHER_ALLERGEN_CANCEL_BUTTON_SELECTOR = '.buttons > .ion-color-medium';
const ADD_ANOTHER_ALLERGEN_ADD_BUTTON_SELECTOR = '.buttons > .ion-color-primary';
const FIRST_OTHER_ALLERGEN_DELETE_BUTTON_SELECTOR = ':nth-child(10) > app-allergen-list-item > .allergen-checkbox > .close-button';
const SECOND_OTHER_ALLERGEN_DELETE_BUTTON_SELECTOR = ':nth-child(11) > app-allergen-list-item > .allergen-checkbox > .close-button';

const ADD_ANOTHER_INTOLLERANCE_BUTTON_SELECTOR = '#add-intollerance > span';
const ADD_ANOTHER_INTOLLERANCE_TEXTBOX_SELECTOR = '.native-input';
const ADD_ANOTHER_INTOLLERANCE_CANCEL_BUTTON_SELECTOR = '.buttons > .ion-color-medium';
const ADD_ANOTHER_INTOLLERANCE_ADD_BUTTON_SELECTOR = '.buttons > .ion-color-primary';
const FIRST_ANOTHER_INTOLLERANCE_DELETE_BUTTON_SELECTOR = ':nth-child(1) > .list-item > .ion-color';
const SECOND_ANOTHER_INTOLLERANCE_DELETE_BUTTON_SELECTOR = ':nth-child(2) > .list-item > .ion-color';

const MEDICAL_PRACTITIONER_NAME_TEXT_BOX_SELECTOR = '.ng-untouched > .native-input';
const ADD_EPINEPHRINE_MEDICATION_BUTTON_SELECTOR = '#add-epinephrine-medication > span';
const ADD_ANTIHISTAMINE_MEDICATION_BUTTON_SELECTOR = '#add-antihistamine-medication > span';
const ADD_OTHER_MEDICATION_BUTTON_SELECTOR = '#add-other-medication > span';

const ADD_EPINEPHRINE_BRAND_DROPDOWN_SELECTOR = '.item-select > .ng-untouched';
const ADD_EPINEPHRINE_POINT_ONE_MG_RADIO_BUTTON_SELECTOR = '.radio-item > .ng-untouched > :nth-child(1) > .in-item';
const ADD_EPINEPHRINE_POINT_FIFTEEN_MG_RADIO_BUTTON_SELECTOR = ':nth-child(2) > .in-item';
const ADD_EPINEPHRINE_POINT_THREE_MG_RADIO_BUTTON_SELECTOR = ':nth-child(3) > .in-item';
const ADD_EPINEPHRINE_PLACE_TEXT_BOX_SELECTOR = 'form.ng-untouched > .item-input > .ng-untouched > .native-input';
const ADD_EPINEPHRINE_EXPIRATION_DATE_SELECTOR = '.item-datetime > .ng-untouched';
const ADD_EPINEPHRINE_CANCEL_BUTTON_SELECTOR = '.ion-color-medium';
const ADD_EPINEPHRINE_ADD_BUTTON_SELECTOR = '.buttons > .ion-color-primary';
const FIRST_EPINEPHRINE_DELETE_BUTTON_SELECTOR = ':nth-child(1) > .epinephrine-medication-list-item > .ion-color';
const SECOND_EPINEPHRINE_DELETE_BUTTON_SELECTOR = ':nth-child(2) > .epinephrine-medication-list-item > .ion-color';

const ADD_ANTIHISTAMINE_BRAND_DROPDOWN_SELECTOR = '.item-interactive.ion-invalid > .ng-untouched > .native-input';
const ADD_ANTIHISTAMINE_DOSE_TEXT_BOX_SELECTOR = 'form.ng-untouched > .item-interactive.ion-valid > .ng-untouched > .native-input';
const ADD_ANTIHISTAMINE_CANCEL_BUTTON_SELECTOR = '.ion-color-medium';
const ADD_ANTIHISTAMINE_ADD_BUTTON_SELECTOR = '.buttons > .ion-color-primary';
const FIRST_ANTIHISTAMINE_DELETE_BUTTON_SELECTOR = ':nth-child(1) > .antihistamine-medication-list-item > .ion-color';
const SECOND_ANTIHISTAMINE_DELETE_BUTTON_SELECTOR = ':nth-child(2) > .antihistamine-medication-list-item > .ion-color';

const ADD_OTHER_MEDICATION_DESCRIPTION_SELECTOR = 'form.ng-untouched > .item-interactive > .ng-untouched > .native-input';
const ADD_OTHER_MEDICATION_CANCEL_BUTTON_SELECTOR = '.ion-color-medium';
const ADD_OTHER_MEDICATION_ADD_BUTTON_SELECTOR = '.buttons > .ion-color-primary';
const FIRST_OTHER_MEDICATION_DELETE_BUTTON_SELECTOR = ':nth-child(1) > .list-item > .ion-color';
const SECOND_OTHER_MEDICATION_DELETE_BUTTON_SELECTOR = ':nth-child(2) > .list-item > .ion-color';

const ADD_CHILD_DONE_BUTTON_SELECTOR = 'strong';
const ADD_CHILD_BACK_BUTTON_SELECTOR = '.buttons-first-slot > .ng-star-inserted';
const ADD_CHILD_CONFIRMATION_POPUP = '.alert-button-inner';


export interface FareAddChildModel {
  firstName: string;
  lastName: string;
  dob: string;
  zipCode: number;
  emergencyContactName: string;
  emergencyContactNumber: number;
  selectAllergens: number[];
  medicalPractitionerName: string;
}

export class FareAddChildPage extends BasePage {
  constructor() {
    super();
  }

  provideChildFirstName(firstName: string) {
    this.type(FIRST_NAME_CHILD_TEXT_BOX_SELECTOR, firstName);
  }

  provideChildLastName(lastName: string) {
    this.type(LAST_NAME_CHILD_TEXT_BOX_SELECTOR, lastName);
  }

  provideChildDateOfBirthAsToday(){
    this.selectDate(DOB_FIELD_SELECTOR,'2021-09-21');
  }

  provideZipCode(zipCode:String){
    this.type(ZIP_CODE_TEXT_BOX_SELECTOR,zipCode)
  }

  provideFirstEmergencyContactName(fullName:string){
    this.type(EMERGENCY_CONTACT_NAME_SELECTOR,fullName)
  }

  provideFirstEmergencyContactNumber(number:number){
    this.type(EMERGENCY_CONTACT_NUMBER_SELECTOR,number)
  }

  clickOnNextButton(){
    this.click(NEXT_BUTTON_SELECTOR);
  }

  selectAllergens(...allergenIds:number[]){
    allergenIds.forEach((id)=>cy.get(getAllergen(id)).click())

  }

  selectAllergensNew(allergenIds:number[]){
    allergenIds.forEach((id)=>cy.get(getAllergen(id)).click())

  }



  addAnotherAllergen(newAllergen:string){
    this.click(ADD_ANOTHER_ALLERGEN_BUTTON_SELECTOR);
    this.type(ADD_ANOTHER_ALLERGEN_TEXT_BOX_SELECTOR,newAllergen);
    this.click(ADD_ANOTHER_ALLERGEN_ADD_BUTTON_SELECTOR);
  }

  provideMedicalPractitionerName(firstName: string) {
    this.type(MEDICAL_PRACTITIONER_NAME_TEXT_BOX_SELECTOR, firstName);
  }

  clickOnDoneButton(){
    this.click(ADD_CHILD_DONE_BUTTON_SELECTOR);
  }

  clickOnConfirmationPopUp(){
    this.click(ADD_CHILD_CONFIRMATION_POPUP);
  }

  addNewChild(addNewChild:FareAddChildModel){
    this.type(FIRST_NAME_CHILD_TEXT_BOX_SELECTOR, addNewChild.firstName);
    this.type(LAST_NAME_CHILD_TEXT_BOX_SELECTOR, addNewChild.lastName);
    this.selectDate(DOB_FIELD_SELECTOR,addNewChild.dob);
    this.type(ZIP_CODE_TEXT_BOX_SELECTOR,addNewChild.zipCode);
    this.type(EMERGENCY_CONTACT_NAME_SELECTOR,addNewChild.emergencyContactName);
    this.type(EMERGENCY_CONTACT_NUMBER_SELECTOR,addNewChild.emergencyContactNumber);
    this.click(NEXT_BUTTON_SELECTOR);
    this.selectAllergensNew(addNewChild.selectAllergens);
    this.click(NEXT_BUTTON_SELECTOR);
    this.type(MEDICAL_PRACTITIONER_NAME_TEXT_BOX_SELECTOR, addNewChild.medicalPractitionerName);
    this.click(ADD_CHILD_DONE_BUTTON_SELECTOR);
    this.click(ADD_CHILD_CONFIRMATION_POPUP);
  }

}


