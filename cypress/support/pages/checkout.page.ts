import BasePage, {FormItem} from '../utils/base.page';

export interface Address {
  country: string;
  street: string;
  town_city: string;
  state_county: string;
  postcode_zip: string;
}

export interface Card {
  number: string;
  expiry: string;
  cvv: string;
}

export type Currency = 'AUD' | 'GBP' | 'USD';

export class CheckoutPage extends BasePage {
  COUNTRY_SELECTOR = 'ion-input-2';
  STREET_SELECTOR = this.getFormInputSelector('street_address', 'textarea');
  TOWN_CITY_SELECTOR = this.getFormInputSelector('locality');
  STATE_COUNTY_SELECTOR = this.getFormInputSelector('region');
  POSTCODE_ZIP_SELECTOR = this.getFormInputSelector('postal_code');
  TC_SELECTOR_1 = this.getFormSelector('not_under_18');
  TC_SELECTOR_2 = this.getFormSelector('medication');
  TC_SELECTOR_3 = this.getFormSelector('terms');
  CARD_NUMBER_SELECTOR = '#credit-card-number';
  EXPIRY_DATE_SELECTOR = '#expiration';
  CVV_SELECTOR = '#cvv';

  constructor() {
    super();
  }

  fillAddressForm(address: Address) {
    const {country, street, town_city, state_county, postcode_zip} = address;
    this.selectDropdown(this.COUNTRY_SELECTOR, country);
    this.type(this.STREET_SELECTOR, street);
    this.type(this.TOWN_CITY_SELECTOR, town_city);
    this.type(this.STATE_COUNTY_SELECTOR, state_county);
    this.type(this.POSTCODE_ZIP_SELECTOR, postcode_zip);
  }

  acceptAllTermsAndConditions() {
    this.click(this.TC_SELECTOR_1);
    this.click(this.TC_SELECTOR_2);
    this.click(this.TC_SELECTOR_3);
  }

  selectCurrency(currency: Currency) {
    this.checkCustomRadio('currency', currency);
  }

  fillCardDetails(card: Card) {
    const {number, expiry, cvv} = card;
    const model: FormItem[] = [
      {selector: this.CARD_NUMBER_SELECTOR, value: number},
      {selector: this.EXPIRY_DATE_SELECTOR, value: expiry},
      {selector: this.CVV_SELECTOR, value: cvv},
    ];
    this.fillFormInsideIframe(model);
  }

  placeOrder() {
    this.clickBtnWithText('Place Order');
    this.waitForElementToAppear('div.braintree-dropin.braintree-loaded');
    this.waitForElementToNotAppear('app-checkout');
  }
}
