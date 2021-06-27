import BasePage from '../utils/base.page';

const FIRST_TR_SELECTOR = 'table tbody tr:first-child';
const FIRST_ROW_VALUE_SELECTOR = `${FIRST_TR_SELECTOR} td:first-child b`;
const FIRST_ROW_DATE_SELECTOR = `${FIRST_TR_SELECTOR} td:nth-child(2)`;
const TABLE_ROW_VALUE_SELECTOR = 'table tbody tr td b';
const GOAL_VALUE_SELECTOR = 'app-track[text="Your Goal"] .track__value';
const CHANGE_STATUS_SELECTOR = 'app-track[text="Change"] .track__status';
const TRACK_VALUE_SELECTOR = 'app-track .track__value small';
const TRACK_STATUS_SELECTOR = '.track__status';

export interface WeightModel {
  unit: WeightUnit;
  value?: number;
  weight_stone?: number;
  weight_lbs?: number;
}
export interface WaistModel {
  unit: WaistUnit;
  value: number;
}

export interface HBA1cModel {
  unit: HBA1cUnit;
  value: number;
}

export interface SleepModel {
  time: number;
  quality: number;
}

export interface MoodModel {
  quality: number;
}

export type TrackTab = 'Weight' | 'Waist' | 'HBA1c' | 'Sleep' | 'Mood' | 'Photo';
export type WeightUnit = 'kg' | 'lbs' | 'stone';
export type WaistUnit = 'cm' | 'in';
export type HBA1cUnit = '%' | 'mmol/mol';
type Action = 'Add' | 'Update';

type TrackModels = WeightModel | WaistModel | HBA1cModel;
type TrackUnits = WeightUnit | WaistUnit | HBA1cUnit;
export class WebAppTrackPage extends BasePage {
  VALUE_SELECTOR = this.getFormInputSelector('value');
  VALUE2_SELECTOR = this.getFormInputSelector('value2');
  SLEEP_TIME_SELECTOR = this.getFormInputSelector('time_slept_in_minutes');
  UNIT_SELECTOR = this.getFormSelector('unit');
  DATE_SELECTOR = this.getFormSelector('date');
  QUALITY_SELECTOR = this.getFormSelector('quality');

  constructor() {
    super();
  }

  clickSubTab(tab: TrackTab) {
    this.clickBtnWithText(tab);
  }

  selectUnitAndDate(model: TrackModels, action: Action = 'Add') {
    this.select(this.UNIT_SELECTOR, model.unit);
    if (action === 'Add') {
      this.selectTodaysDate(this.DATE_SELECTOR);
    }
  }

  addEntry(model: TrackModels, action: Action = 'Add') {
    this.selectUnitAndDate(model, action);
    this.type(this.VALUE_SELECTOR, model.value);
    this.clickAdd(action);
  }

  addWeightEntry(model: WeightModel, action: Action) {
    this.selectUnitAndDate(model, action);
    if (model.value) {
      this.type(this.VALUE_SELECTOR, model.value);
    } else if (model.weight_stone) {
      this.type(this.VALUE_SELECTOR, model.weight_stone);
      this.type(this.VALUE2_SELECTOR, model.weight_lbs || 0);
    }
    this.clickAdd(action);
  }

  addWaistEntry(model: WaistModel, action: Action = 'Add') {
    this.addEntry(model, action);
  }

  addHAB1cEntry(model: HBA1cModel) {
    this.addEntry(model);
  }

  addQualityAndSubmit(model: MoodModel | SleepModel) {
    this.select(this.QUALITY_SELECTOR, model.quality);
    this.selectTodaysDate(this.DATE_SELECTOR);
    this.clickAdd('Add');
  }
  addSleepEntry(model: SleepModel) {
    this.type(this.SLEEP_TIME_SELECTOR, model.time);
    this.addQualityAndSubmit(model);
  }

  addMoodEntry(model: MoodModel) {
    this.addQualityAndSubmit(model);
  }

  addPhotoEntry(filename: string) {
    this.uploadPhoto('input[type="file"]', filename);
    this.selectTodaysDate(this.DATE_SELECTOR);
    this.clickAdd('Add');
  }

  checkLength(length: number) {
    cy.get('tbody tr').should('have.length', 1);
  }

  clickAdd(action: Action) {
    cy.get('app-track-modal, app-goal-modal').within((el) => {
      this.clickBtnWithText(action);
    });
    this.waitForElementToNotAppear('app-track-modal');
  }

  checkLatestValue(val: string) {
    // If I create account today and add weight/waist for today, that becomes my starting value
    // and the one I added while doing quiz becomes latest value: bug?
    // cy.get(LATEST_WEIGHT_SELECTOR).should('contain.text', val);
    this.checkLatestValueInTable(val);
  }

  checkLatestValueInTable(val: string) {
    // todo fix
    cy.wait(500);
    const today = new Date();
    cy.get(FIRST_ROW_VALUE_SELECTOR).should('contain.text', val);
    cy.get(FIRST_ROW_DATE_SELECTOR).should('contain.text', today.toLocaleDateString());
  }

  checkGoalValue(goalValue: string) {
    cy.get(GOAL_VALUE_SELECTOR).should('contain.text', goalValue);
  }

  checkGoalWeight(goalValue: string) {
    this.checkGoalValue(goalValue);
    // If I create account today and add weight/waist for today, that becomes my starting value
    // and the one I added while doing quiz becomes latest value: bug?
    this.checkChangeStatus('Still need 18.31 kg to reach your goal');
  }

  checkGoalWaist(goalValue: string) {
    this.checkGoalValue(goalValue);
    // If I create account today and add weight/waist for today, that becomes my starting value
    // and the one I added while doing quiz becomes latest value: bug?
    this.checkChangeStatus('Still need 5.08 cm to reach your goal');
  }

  checkChangeStatus(changeText: string) {
    // todo 10.31 should be 10, bug
    cy.get(CHANGE_STATUS_SELECTOR).should('contain.text', changeText);
  }

  switchUnit(unit: TrackUnits) {
    cy.get('.filter-bar ion-segment-button').contains(unit).click();
    // todo fix this
    cy.wait(1000);
  }

  checkCurrentUnit(unit: WeightUnit | WaistUnit) {
    cy.get(TRACK_VALUE_SELECTOR).each(($el) => expect($el.text().trim()).equal(unit));
    cy.get(TRACK_STATUS_SELECTOR).each(($el) => {
      cy.wrap($el).contains(unit);
    });
    this.checkCurrentUnitInTable(unit);
  }

  checkCurrentUnitInTable(unit: TrackUnits) {
    cy.get(TABLE_ROW_VALUE_SELECTOR).each(($el) => {
      cy.wrap($el).contains(unit);
    });
  }
}
