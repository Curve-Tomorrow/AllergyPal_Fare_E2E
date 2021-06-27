import BasePage from '../../utils/base.page';
import {mealPlaner1, mealPlaner2} from '../../utils/dataSet';
const DIETS_TEXT_SELECTOR = "//h1[contains(text(),'Diets')]";
const MEAL_PLAN_SAVE_BTN_SELECTOR = '.btn-brand';

export function getMealPlanField(week: number, day: number, meal: number) {
  return `#diet_meal_plans_attributes_0_default_meal_plan_weeks_attributes_${week}_default_meal_plan_days_attributes_${day}_default_meal_plan_meals_attributes_${meal}_recipe_id`;
}

export function getBreakfastPlanField(weekNumber: number, day: number) {
  return `#diet_meal_plans_attributes_0_default_meal_plan_weeks_attributes_${weekNumber}_default_meal_plan_days_attributes_${day}_default_meal_plan_meals_attributes_0_recipe_id`;
}

export function getLunchPlanField(weekNumber: number, day: number) {
  return `#diet_meal_plans_attributes_0_default_meal_plan_weeks_attributes_${weekNumber}_default_meal_plan_days_attributes_${day}_default_meal_plan_meals_attributes_1_recipe_id`;
}

export function getDinnerPlanField(weekNumber: number, day: number) {
  return `#diet_meal_plans_attributes_0_default_meal_plan_weeks_attributes_${weekNumber}_default_meal_plan_days_attributes_${day}_default_meal_plan_meals_attributes_2_recipe_id`;
}

export interface MealPlanModel {
  weeks: {meals: number[]; fastingDay: boolean}[][];
}

export class AdminDietPage extends BasePage {
  constructor() {
    super();
  }

  verifyDietsPage() {
    this.waitForXpathElementToAppear(DIETS_TEXT_SELECTOR, 9000);
  }

  clickOnDietEditButton(dietName: string) {
    cy.xpath(`//div[contains(text(),'${dietName}')]//following-sibling::div[2]/span/a/i`).click();
  }

  mealPlanField(week: number, day: number, meal: number, recipe: number) {
    cy.get(getMealPlanField(week, day, meal)).invoke('val', recipe).trigger('ionChange');
  }

  clickOnMealSaveButton() {
    this.click(MEAL_PLAN_SAVE_BTN_SELECTOR);
  }

  updateBreakfast(weekNumber: number, day: number, recipe: number) {
    cy.get(getBreakfastPlanField(day, weekNumber)).invoke('val', recipe).trigger('ionChange');
  }
  updateLunch(weekNumber: number, day: number, recipe: number) {
    cy.get(getLunchPlanField(day, weekNumber)).invoke('val', recipe).trigger('ionChange');
  }
  updateDinner(weekNumber: number, day: number, recipe: number) {
    cy.get(getDinnerPlanField(day, weekNumber)).invoke('val', recipe).trigger('ionChange');
  }

  updateDefaultDietPlan(dietName: string) {
    this.clickOnDietEditButton(dietName);
    mealPlaner1.weeks.forEach((week, weekIndex) => {
      week.forEach((day, dayIndex) => {
        day.meals.forEach((meal, mealIndex) => {
          cy.get(getMealPlanField(weekIndex, dayIndex, mealIndex)).invoke('val', meal).trigger('ionChange');
        });
      });
    });
  }
}
