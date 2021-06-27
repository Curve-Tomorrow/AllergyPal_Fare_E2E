import BasePage from '../../utils/base.page';
const ADD_EXERCISE_BTN_SELECTOR = '.float-right > .btn';
const EXERCISE_TITLE_SELECTOR = "//h1[contains(text(),'Exercises')]";
const EXERCISE_NAME_SELECTOR = '#exercise_name';
const EXERCISE_DESCRIPTION_SELECTOR = '#exercise_description';
const EXERCISE_ALTERNATE_TEXT_SELECTOR = '#exercise_alternative_text';
const EXERCISE_SAVE_BTN_SELECTOR = '.btn-brand';
const EXERCISE_CANCEL_BTN_SELECTOR = '.btn-outline-brand';
const VIDEO_URL_SELECTOR = '#exercise_video_url';
const EXERCISE_STEPS_SELECTOR = '#exercise_steps_ifr';
const EXERCISE_IFRAME_INPUT_SELECTOR = '#tinymce';

export interface ExerciseModel {
  name: string;
  description: string;
  alternativeText: string;
  videoUrl: string;
  exerciseSteps: string;
}

export class AdminExercisePage extends BasePage {
  constructor() {
    super();
  }

  verifyExercisePage() {
    cy.xpath(EXERCISE_TITLE_SELECTOR);
    cy.xpath(ADD_EXERCISE_BTN_SELECTOR);
  }

  clickOnAddExerciseBtn() {
    this.clickByXpath(ADD_EXERCISE_BTN_SELECTOR);
  }

  addNewExerciseName(name: string) {
    this.xpathType(EXERCISE_NAME_SELECTOR, name);
  }

  addNewExerciseDescription(description: string) {
    this.xpathType(EXERCISE_DESCRIPTION_SELECTOR, description);
  }

  addAlternativeText(text: string) {
    this.xpathType(EXERCISE_ALTERNATE_TEXT_SELECTOR, text);
  }

  addNewVideoURL(url: string) {
    this.xpathType(VIDEO_URL_SELECTOR, url);
  }

  addNewExerciseSteps(notes: string) {
    this.addInsideIframe(EXERCISE_STEPS_SELECTOR, EXERCISE_IFRAME_INPUT_SELECTOR, notes);
  }

  saveNewExercise() {
    this.click(EXERCISE_SAVE_BTN_SELECTOR);
  }

  cancelNewExercise() {
    this.click(EXERCISE_CANCEL_BTN_SELECTOR);
  }

  createNewExercise(exercise: ExerciseModel) {
    this.click(ADD_EXERCISE_BTN_SELECTOR);
    this.type(EXERCISE_NAME_SELECTOR, exercise.name);
    this.type(EXERCISE_DESCRIPTION_SELECTOR, exercise.description);
    this.type(EXERCISE_ALTERNATE_TEXT_SELECTOR, exercise.alternativeText);
    this.type(VIDEO_URL_SELECTOR, exercise.videoUrl);
    this.addInsideIframe(EXERCISE_STEPS_SELECTOR, EXERCISE_IFRAME_INPUT_SELECTOR, exercise.exerciseSteps);
    this.click(EXERCISE_SAVE_BTN_SELECTOR);
  }
}
