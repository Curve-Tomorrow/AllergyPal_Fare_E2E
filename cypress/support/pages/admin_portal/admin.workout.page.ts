import BasePage from '../../utils/base.page';
const ADD_WORKOUT_BTN_SELECTOR = '.float-right > .btn';
const WORKOUTS_TEXT_SELECTOR = "//h1[contains(text(),'Workouts')]";
const WORKOUT_TITLE_TEXT_BOX_SELECTOR = '#workout_title';
const WORKOUT_SUMMARY_TEXT_BOX_SELECTOR = '#workout_summary';
const WORKOUT_DESCRIPTION_TEXT_BOX_SELECTOR = '#workout_description_ifr';
const WORKOUT_TYPE_DROPDOWN_SELECTOR = '#workout_type';
const WORKOUT_VIDEO_URL_SELECTOR = '#workout_video_url';
const WORKOUT_AUDIO_URL_SELECTOR = '#workout_audio_url';
const WORKOUT_DURATION_MIN_TEXT_BOX_SELECTOR = '#workout_duration';
const WORKOUT_DIFFICULTY_DROPDOWN_SELECTOR = '#workout_difficulty';
const WORKOUT_AVAILABLE_IN_LIBRARY_CHECKBOX_SELECTOR = '#workout_available_in_workout_library';
const WORKOUT_EQUIPMENT_CHECKBOX_SELECTOR = '#workout_equipment';
const WORKOUT_IFRAME_INPUT_SELECTOR = '#tinymce';
const WORKOUT_ADD_EXERCISE_BTN = '.btn > .fa';
const WORKOUT_SELECT_EXERCISE_DROPDOWN = "//label[contains(text(),'SELECT EXERCISE')]/following-sibling::select";
const WORKOUT_EXERCISE_NO_TEXT_BOX_SELECTOR = "//label[contains(text(),'Exercise No')]/following-sibling::input";
const WORKOUT_EXERCISE_WORK_TIME_TEXT_BOX_SELECTOR =
  "//label[contains(text(),'Work time (sec)')]/following-sibling::input";
const WORKOUT_EXERCISE_REST_TIME_TEXT_BOX_SELECTOR =
  "//label[contains(text(),'Rest time (sec)')]/following-sibling::input";
const WORKOUT_SAVE_BTN_SELECTOR = '.btn-brand';

export interface WorkoutModel {
  title: string;
  summary: string;
  type: string;
  description: string;
  video_url: string;
  audio_url: string;
  duration_min: number;
  difficulty_level: string;
  first_exercise_select: number;
  first_exercise_no: number;
  first_exercise_work_time: number;
  first_exercise_rest_time: number;

  second_exercise_select: number;
  second_exercise_no: number;
  second_exercise_work_time: number;
  second_exercise_rest_time: number;

  third_exercise_select: number;
  third_exercise_no: number;
  third_exercise_work_time: number;
  third_exercise_rest_time: number;
}

export class AdminWorkoutPage extends BasePage {
  constructor() {
    super();
  }

  verifyWorkoutPage() {
    this.waitForElementToAppear(ADD_WORKOUT_BTN_SELECTOR);
    this.waitForElementToAppear(WORKOUTS_TEXT_SELECTOR);
  }

  clickOnAddWorkoutBtn() {
    this.click(ADD_WORKOUT_BTN_SELECTOR);
  }

  addNewWorkoutTitle(title: string) {
    this.type(WORKOUT_TITLE_TEXT_BOX_SELECTOR, title);
  }

  addNewWorkoutSummary(title: string) {
    this.type(WORKOUT_SUMMARY_TEXT_BOX_SELECTOR, title);
  }

  selectWorkoutType(type: string) {
    cy.get(WORKOUT_TYPE_DROPDOWN_SELECTOR).invoke('val', type).trigger('ionChange');
  }

  addWorkoutDescription(description: string) {
    this.addInsideIframe(WORKOUT_DESCRIPTION_TEXT_BOX_SELECTOR, WORKOUT_IFRAME_INPUT_SELECTOR, description);
  }

  addWorkoutDuration(min: String) {
    this.type(WORKOUT_DURATION_MIN_TEXT_BOX_SELECTOR, min);
  }

  addWorkoutVideoLink(url: string) {
    this.type(WORKOUT_VIDEO_URL_SELECTOR, url);
  }

  addWorkoutAudioLink(url: string) {
    this.type(WORKOUT_AUDIO_URL_SELECTOR, url);
  }

  selectWorkoutDifficultyLevel(level: string) {
    cy.get(WORKOUT_DIFFICULTY_DROPDOWN_SELECTOR).invoke('val', level).trigger('ionChange');
  }

  clickOnAvailableInWorkoutLibrary() {
    this.click(WORKOUT_AVAILABLE_IN_LIBRARY_CHECKBOX_SELECTOR);
  }

  clickOnEquipment() {
    this.click(WORKOUT_EQUIPMENT_CHECKBOX_SELECTOR);
  }

  clickOnFirstAddExerciseButton() {
    this.click(WORKOUT_ADD_EXERCISE_BTN);
  }

  selectFirstExercise(exercise: number) {
    cy.xpath(WORKOUT_SELECT_EXERCISE_DROPDOWN).invoke('val', exercise).trigger('ionChange');
  }

  provideExerciseNo(exrNo: number) {
    this.xpathType(WORKOUT_EXERCISE_NO_TEXT_BOX_SELECTOR, exrNo);
  }

  provideExerciseWorkTime(workTime: number) {
    this.xpathType(WORKOUT_EXERCISE_WORK_TIME_TEXT_BOX_SELECTOR, workTime);
  }

  provideExerciseRestTime(restTime: number) {
    this.xpathType(WORKOUT_EXERCISE_REST_TIME_TEXT_BOX_SELECTOR, restTime);
  }

  clickOnSaveBtn() {
    this.click(WORKOUT_SAVE_BTN_SELECTOR);
  }
  createWorkout(model: WorkoutModel) {
    this.click(ADD_WORKOUT_BTN_SELECTOR);
    this.type(WORKOUT_TITLE_TEXT_BOX_SELECTOR, model.title);
    this.type(WORKOUT_SUMMARY_TEXT_BOX_SELECTOR, model.summary);
    cy.get(WORKOUT_TYPE_DROPDOWN_SELECTOR).invoke('val', model.type).trigger('ionChange');
    this.addInsideIframe(WORKOUT_DESCRIPTION_TEXT_BOX_SELECTOR, WORKOUT_IFRAME_INPUT_SELECTOR, model.description);
    this.type(WORKOUT_DURATION_MIN_TEXT_BOX_SELECTOR, model.duration_min);
    this.type(WORKOUT_VIDEO_URL_SELECTOR, model.video_url);
    this.type(WORKOUT_AUDIO_URL_SELECTOR, model.audio_url);
    cy.get(WORKOUT_DIFFICULTY_DROPDOWN_SELECTOR).invoke('val', model.difficulty_level).trigger('ionChange');
    this.click(WORKOUT_AVAILABLE_IN_LIBRARY_CHECKBOX_SELECTOR);
    this.click(WORKOUT_EQUIPMENT_CHECKBOX_SELECTOR);

    this.click(WORKOUT_ADD_EXERCISE_BTN);
    cy.xpath(WORKOUT_SELECT_EXERCISE_DROPDOWN).invoke('val', model.first_exercise_select).trigger('ionChange');
    this.xpathType(WORKOUT_EXERCISE_NO_TEXT_BOX_SELECTOR, model.first_exercise_no);
    this.xpathType(WORKOUT_EXERCISE_WORK_TIME_TEXT_BOX_SELECTOR, model.first_exercise_work_time);
    this.xpathType(WORKOUT_EXERCISE_REST_TIME_TEXT_BOX_SELECTOR, model.first_exercise_rest_time);

    this.click(WORKOUT_ADD_EXERCISE_BTN);
    cy.xpath(WORKOUT_SELECT_EXERCISE_DROPDOWN).last().invoke('val', model.second_exercise_select).trigger('ionChange');
    // @ts-ignore
    cy.xpath(WORKOUT_EXERCISE_NO_TEXT_BOX_SELECTOR).last().type(model.second_exercise_no);
    // @ts-ignore
    cy.xpath(WORKOUT_EXERCISE_WORK_TIME_TEXT_BOX_SELECTOR).last().type(model.second_exercise_work_time);
    // @ts-ignore
    cy.xpath(WORKOUT_EXERCISE_REST_TIME_TEXT_BOX_SELECTOR).last().type(model.second_exercise_rest_time);

    this.click(WORKOUT_ADD_EXERCISE_BTN);
    cy.xpath(WORKOUT_SELECT_EXERCISE_DROPDOWN).last().invoke('val', model.third_exercise_select).trigger('ionChange');
    // @ts-ignore
    cy.xpath(WORKOUT_EXERCISE_NO_TEXT_BOX_SELECTOR).last().type(model.third_exercise_no);
    // @ts-ignore
    cy.xpath(WORKOUT_EXERCISE_WORK_TIME_TEXT_BOX_SELECTOR).last().type(model.third_exercise_work_time);
    // @ts-ignore
    cy.xpath(WORKOUT_EXERCISE_REST_TIME_TEXT_BOX_SELECTOR).last().type(model.third_exercise_rest_time);

    this.click(WORKOUT_SAVE_BTN_SELECTOR);
  }
}
