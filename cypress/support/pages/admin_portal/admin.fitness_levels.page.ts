import BasePage from '../../utils/base.page';
import {fitnessPlan1} from '../../utils/dataSet';

const FITNESS_LEVELS_TEXT_SELECTOR = "//h1[contains(text(),'Fitness Levels')]";
const FITNESS_LEVELS_SAVE_BTN_SELECTOR = '.btn-brand';

const ADD_FITNESS_LEVEL_BTN_SELECTOR = "//a[contains(text(),'Add Fitness Level')]";
const FITNESS_LEVEL_NAME_SELECTOR = '#fitness_level_name';
const FITNESS_LEVEL_PROGRESSION_LEVEL_SELECTOR = '#fitness_level_progression_level_id';
const FITNESS_LEVEL_EXERCISE_PROGRAM_NAME_SELECTOR = '#fitness_level_exercise_program_attributes_name';
const FITNESS_LEVEL_EXERCISE_PROGRAM_DESCRIPTION_SELECTOR = '#fitness_level_exercise_program_attributes_description';

export function getFitnessLevelDayField(week: number, day: number) {
  return `#fitness_level_exercise_program_attributes_default_workout_weeks_attributes_${week}_default_workout_days_attributes_${day}_default_workout_plan_attributes_workout_id`;
}

export interface FitnessLevelModel {
  weeks: {restDay: boolean; workout: number}[][];
  fitnessName: string;
  level: number;
  programName: string;
  programDescription: string;
}

export class AdminFitnessLevelsPage extends BasePage {
  constructor() {
    super();
  }

  verifyFitnessLevelPAge() {
    this.waitForXpathElementToAppear(FITNESS_LEVELS_TEXT_SELECTOR, 9000);
  }

  clickOnFitnessLevelEditButton(levelName: string) {
    cy.xpath(`//div[contains(text(),'${levelName}')]//following-sibling::div[2]/span/a/i`).first().click();
  }

  clickOnAddFitnessLevelBtn() {
    this.clickByXpath(ADD_FITNESS_LEVEL_BTN_SELECTOR);
  }

  provideFitnessLevelName(fitnessName: string) {
    this.type(FITNESS_LEVEL_NAME_SELECTOR, fitnessName);
  }

  provideProgressionLevel(level: number) {
    cy.get(FITNESS_LEVEL_PROGRESSION_LEVEL_SELECTOR).invoke('val', level).trigger('ionChange');
  }

  provideExerciseProgramName(programName: string) {
    this.type(FITNESS_LEVEL_EXERCISE_PROGRAM_NAME_SELECTOR, programName);
  }

  provideExerciseProgramDescription(programDescription: string) {
    this.type(FITNESS_LEVEL_EXERCISE_PROGRAM_DESCRIPTION_SELECTOR, programDescription);
  }

  clickOnFitnessLevelSaveButton() {
    this.click(FITNESS_LEVELS_SAVE_BTN_SELECTOR);
  }

  updateWorkout(weekIndex: number, dayIndex: number, workout: number) {
    cy.get(getFitnessLevelDayField(weekIndex, dayIndex)).invoke('val', workout).trigger('ionChange');
  }

  updateFitnessPlan(fitnessLevelModel: FitnessLevelModel, levelName: string) {
    this.clickOnFitnessLevelEditButton(levelName);

    this.type(FITNESS_LEVEL_NAME_SELECTOR, fitnessLevelModel.fitnessName);
    cy.get(FITNESS_LEVEL_PROGRESSION_LEVEL_SELECTOR).invoke('val', fitnessLevelModel.level).trigger('ionChange');
    this.type(FITNESS_LEVEL_EXERCISE_PROGRAM_NAME_SELECTOR, fitnessLevelModel.programName);
    this.type(FITNESS_LEVEL_EXERCISE_PROGRAM_DESCRIPTION_SELECTOR, fitnessLevelModel.programDescription);

    fitnessLevelModel.weeks.forEach((week, weekIndex) => {
      week.forEach((day, dayIndex) => {
        cy.get(getFitnessLevelDayField(weekIndex, dayIndex)).invoke('val', day.workout).trigger('ionChange');
      });
    });
    this.click(FITNESS_LEVELS_SAVE_BTN_SELECTOR);
  }

  createNewFitnessPlan(fitnessLevelModel: FitnessLevelModel) {
    this.clickByXpath(ADD_FITNESS_LEVEL_BTN_SELECTOR);
    this.type(FITNESS_LEVEL_NAME_SELECTOR, fitnessLevelModel.fitnessName);
    cy.get(FITNESS_LEVEL_PROGRESSION_LEVEL_SELECTOR).invoke('val', fitnessLevelModel.level).trigger('ionChange');
    this.type(FITNESS_LEVEL_EXERCISE_PROGRAM_NAME_SELECTOR, fitnessLevelModel.programName);
    this.type(FITNESS_LEVEL_EXERCISE_PROGRAM_DESCRIPTION_SELECTOR, fitnessLevelModel.programDescription);

    fitnessLevelModel.weeks.forEach((week, weekIndex) => {
      week.forEach((day, dayIndex) => {
        cy.get(getFitnessLevelDayField(weekIndex, dayIndex)).invoke('val', day.workout).trigger('ionChange');
      });
    });
    this.click(FITNESS_LEVELS_SAVE_BTN_SELECTOR);
  }
}
