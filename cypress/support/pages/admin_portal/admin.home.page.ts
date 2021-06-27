import BasePage from '../../utils/base.page';
const PROFILE_SELECTOR = "//span[contains(text(),'Profile')]";
const PROFILE_PAGE_VALIDATION = "//h4[contains(text(),'Edit Profile')]";

const USERS_SELECTOR = "//span[contains(text(),'Users')]";
const USERS_PAGE_VALIDATION = "//h1[contains(text(),'Users')]";

const COUPONS_SELECTOR = ':nth-child(3) > .kt-menu__link > .kt-menu__link-text';
const COUPONS_PAGE_VALIDATION = "//h1[contains(text(),'Coupons')]";

const MEDIBANK_COUPONS_SELECTOR = ':nth-child(4) > .kt-menu__link > .kt-menu__link-text';
const MEDIBANK_COUPONS_PAGE_VALIDATION = "//h1[contains(text(),'Medibank Coupons')]";

const DIETS_SELECTOR = "//span[contains(text(),'Diets')]";
const DIETS_PAGE_VALIDATION = "//h1[contains(text(),'Diets')]";

const INGREDIENTS_SELECTOR = "//span[contains(text(),'Ingredients')]";

const RECIPES_SELECTOR = "//span[contains(text(),'Recipes')]";

const TAGS_SELECTOR = "//span[contains(text(),'Tags')]";

const UNITS_SELECTOR = "//span[contains(text(),'Units')]";

const LOCATIONS_SELECTOR = "//span[contains(text(),'Locations')]";

const EXERCISE_SELECTOR = "//span[contains(text(),'Exercises')]";
const EXERCISES_PAGE_VALIDATION = "//h1[contains(text(),'Exercises')]";

const FITNESS_LEVEL_SELECTOR = "//span[contains(text(),'Fitness Levels')]";
const FITNESS_PAGE_VALIDATION = "//h1[contains(text(),'Fitness Levels')]";

const WORKOUTS_SELECTOR = "//span[contains(text(),'Workouts')]";
const WORKOUTS_PAGE_VALIDATION = "//h1[contains(text(),'Workouts')]";

const DOCUMENTS_SELECTOR = "//span[contains(text(),'Documents')]";
const DOCUMENTS_PAGE_VALIDATION = "//h1[contains(text(),'Documents')]";

const FAQS_SELECTOR = "//span[contains(text(),'FAQs')]";
const FAQ_PAGE_VALIDATION = "//h1[contains(text(),'Faqs')]";

const FAQ_TOPICS_SELECTOR = "//span[contains(text(),'FAQ topics')]";
const FAQ_TOPICS_PAGE_VALIDATION = "//h1[contains(text(),'Faqs')]";

const MEMBERS_SELECTORS = ':nth-child(17) > .kt-menu__link > .kt-menu__link-text';
const MEMBERS_PAGE_VALIDATION = "//h1[contains(text(),'Members')]";

const MEMBERS_DASHBOARD_SELECTORS = "//span[contains(text(),'Members Dashboard')]";
const MEMBERS_DASHBOARD_PAGE_VALIDATION = "//h1[contains(text(),'Members dashboard')]";

export class AdminHomePage extends BasePage {
  constructor() {
    super();
  }

  clickOnProfile() {
    this.clickByXpath(PROFILE_SELECTOR);
  }

  clickOnUsers() {
    this.clickByXpath(USERS_SELECTOR);
  }

  clickOnCoupons() {
    this.click(COUPONS_SELECTOR);
  }

  clickOnMediBankCoupons() {
    this.clickByXpath(MEDIBANK_COUPONS_SELECTOR);
  }

  clickOnDiets() {
    this.clickByXpath(DIETS_SELECTOR);
  }

  clickOnIngredients() {
    this.clickByXpath(INGREDIENTS_SELECTOR);
  }

  clickOnRecipes() {
    this.clickByXpath(RECIPES_SELECTOR);
  }

  clickOnTags() {
    this.clickByXpath(TAGS_SELECTOR);
  }

  clickOnUnits() {
    this.clickByXpath(UNITS_SELECTOR);
  }

  clickOnLocations() {
    this.clickByXpath(LOCATIONS_SELECTOR);
  }

  clickOnExercises() {
    this.clickByXpath(EXERCISE_SELECTOR);
  }

  clickOnFitnessLevels() {
    this.clickByXpath(FITNESS_LEVEL_SELECTOR);
  }

  clickOnWorkouts() {
    this.clickByXpath(WORKOUTS_SELECTOR);
  }

  clickOnDocuments() {
    this.clickByXpath(DOCUMENTS_SELECTOR);
  }

  clickOnFaq() {
    this.clickByXpath(FAQS_SELECTOR);
  }

  clickOnFaqTopics() {
    this.click(FAQ_TOPICS_SELECTOR);
  }

  clickOnMembers() {
    this.click(MEMBERS_SELECTORS);
  }

  clickOnMembersDashboard() {
    this.clickByXpath(MEMBERS_DASHBOARD_SELECTORS);
  }
}
