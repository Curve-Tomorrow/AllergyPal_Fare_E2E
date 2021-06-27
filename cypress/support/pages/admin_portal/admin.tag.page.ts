import BasePage from '../../utils/base.page';
const ADD_TAG_BTN_SELECTOR = '.float-right > .btn';
const TAG_GROUP_DROPDOWN_SELECTOR = '#tag_tag_group_id';
const TAG_NAME_SELECTOR = '#tag_name';
const TAG_SAVE_BTN_SELECTOR = '.btn-brand';
const TAG_CANCEL_BTN_SELECTOR = '.btn-outline-brand';
const TAGS_PAGE_VALIDATION = "//h1[contains(text(),'Tags')]";

export interface TagModel {
  tagName: string;
  tagGroup: number;
}

export class AdminTagPage extends BasePage {
  constructor() {
    super();
  }

  verifyTagPage() {
    cy.xpath(TAGS_PAGE_VALIDATION);
    cy.get(ADD_TAG_BTN_SELECTOR);
  }

  clickOnAddTagBtn() {
    this.click(ADD_TAG_BTN_SELECTOR);
  }

  addNewTagName(tag: string) {
    this.type(TAG_NAME_SELECTOR, tag);
  }

  selectTagGroup(val: number) {
    cy.get(TAG_GROUP_DROPDOWN_SELECTOR).invoke('val', val).trigger('ionChange');
  }

  saveNewTag() {
    this.click(TAG_SAVE_BTN_SELECTOR);
  }

  cancelNewTag() {
    this.click(TAG_CANCEL_BTN_SELECTOR);
  }

  createTag(tag: TagModel) {
    this.waitForXpathElementToAppear(TAGS_PAGE_VALIDATION);
    this.waitForElementToAppear(ADD_TAG_BTN_SELECTOR);
    this.click(ADD_TAG_BTN_SELECTOR);
    this.waitForElementToAppear(TAG_NAME_SELECTOR);
    this.type(TAG_NAME_SELECTOR, tag.tagName);
    cy.get(TAG_GROUP_DROPDOWN_SELECTOR).invoke('val', tag.tagGroup).trigger('ionChange');
    this.click(TAG_SAVE_BTN_SELECTOR);
    this.waitForXpathElementToAppear(TAGS_PAGE_VALIDATION);
    this.waitForElementToAppear(ADD_TAG_BTN_SELECTOR);
  }
}
