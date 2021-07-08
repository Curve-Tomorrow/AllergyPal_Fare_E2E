import BasePage from '../utils/base.page';
const FIRST_NAME_TEXT_BOX_SELECTOR = '#firstName > .native-input';
const LAST_NAME_TEXT_BOX_SELECTOR ='#lastName > .native-input';
const EMAIL_TEXT_BOX_SELECTOR ='#email > .native-input';
const PHONE_NUMBER_TEXT_BOX_SELECTOR ='#phoneNumber > .native-input';
const ZIP_CODE_TEXT_BOX_SELECTOR ='#zipCode > .native-input';
const CONTINUE_BTN_SELECTOR ='#continueButton';

const PASSWORD_TEXT_BOX_SELECTOR = '#password > .native-input';
const CONFIRM_PASSWORD_TEXT_BOX_SELECTOR = '#confirmPassword > .native-input';
const TERMS_AND_CONDITIONS_CHECKBOX_SELECTOR = '.ion-activatable > .ng-untouched';
const SIGN_UP_BTN_SELECTOR = '#signUpButton';

export interface FareRegisterModel {
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: number;
  zipCode: number;
  password: string;
  confirm_password: string
}

export class FareRegisterPage extends BasePage {
  constructor() {
    super();
  }

  provideFirstName(firstName:string){
    this.type(FIRST_NAME_TEXT_BOX_SELECTOR,firstName);
  }
  provideLastName(lastName:string){
    this.type(LAST_NAME_TEXT_BOX_SELECTOR,lastName);
  }

  provideEmail(email:string){
    this.type(EMAIL_TEXT_BOX_SELECTOR,email);
  }

  providePhoneNumber(phoneNumber:number){
    this.type(PHONE_NUMBER_TEXT_BOX_SELECTOR,phoneNumber);
  }

  provideZipCode(zipCode:number){
    this.type(ZIP_CODE_TEXT_BOX_SELECTOR,zipCode);
  }

  clickOnContinueBtn(){
    this.click(CONTINUE_BTN_SELECTOR);
  }

  providePassword(password:string){
    this.type(PASSWORD_TEXT_BOX_SELECTOR,password);
  }

  provideConfirmPassword(confirm_password:string){
    this.type(CONFIRM_PASSWORD_TEXT_BOX_SELECTOR,confirm_password);
  }

  checkTermsAndConditions(){
    this.click(TERMS_AND_CONDITIONS_CHECKBOX_SELECTOR);
  }

  clickOnSignUPBtn(){
    this.click(SIGN_UP_BTN_SELECTOR);
  }
  createNewUser(registration: FareRegisterModel) {
    this.type(FIRST_NAME_TEXT_BOX_SELECTOR,registration.firstName);
    this.type(LAST_NAME_TEXT_BOX_SELECTOR,registration.lastName);
    this.type(EMAIL_TEXT_BOX_SELECTOR,registration.email);
    this.type(PHONE_NUMBER_TEXT_BOX_SELECTOR,registration.phoneNumber);
    this.type(ZIP_CODE_TEXT_BOX_SELECTOR,registration.zipCode);
    this.click(CONTINUE_BTN_SELECTOR);

    this.type(PASSWORD_TEXT_BOX_SELECTOR,registration.password);
    this.type(CONFIRM_PASSWORD_TEXT_BOX_SELECTOR,registration.confirm_password);
    this.click(TERMS_AND_CONDITIONS_CHECKBOX_SELECTOR);
    this.click(SIGN_UP_BTN_SELECTOR);
  }
}
