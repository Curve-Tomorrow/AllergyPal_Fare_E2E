import {RecipeModel} from '../pages/admin_portal/admin.recipe.page';
import {LocationModel} from '../pages/admin_portal/admin.location.page';
import {IngredientModel} from '../pages/admin_portal/admin.ingredient.page';
import {UnitModel} from '../pages/admin_portal/admin.unit.page';
import {TagModel} from '../pages/admin_portal/admin.tag.page';
import {MealPlanModel} from '../pages/admin_portal/admin.edit.meal.plan.page';
import {ExerciseModel} from '../pages/admin_portal/admin.exercise.page';
import {WorkoutModel} from '../pages/admin_portal/admin.workout.page';
import {FitnessLevelModel} from '../pages/admin_portal/admin.fitness_levels.page';

//Recipes

export const recipe1: RecipeModel = {
  title: 'New Recipe Breakfast',
  summary: 'New Recipe summary 1',
  notes: 'New Recipe Notes 1',
  cookingMethodUK: 'UK Cooking Method 1',
  cookingMethodUS: 'US Cooking Method 1',
  cookingMethodAUS: 'AUS Cooking Method 1',
  prepHour: 1,
  prepMin: 10,
  cookingHour: 1,
  cookingMin: 10,
  recipeServing: 1,
  recipeCaloriesPerServe: 110,
  recipeCarbohydrate: 12,
  recipeProtein: 12,
  recipeFat: 23,
  recipeFibre: 34,
  recipeTag: 1,
  recipeIngredient: 1,
  recipeIngredientNotes: '1st Ingredient Notes 1',
  firstIngredientImperialAmount: 'IMP 12',
  firstIngredientImperialUnit: 1,
  firstIngredientMetricAmount: 'MTR 12',
  firstIngredientMetricUnit: 2,
  recipeIngredient2: 2,
  recipeIngredientNotes2: '2nd Ingredient Notes 1',
  secondIngredientAmount: 'Amt 14',
  secondIngredientUnit: 3,
  alternateRecipe: 1,
};

export const recipe2: RecipeModel = {
  title: 'New Recipe Lunch',
  summary: 'New Recipe summary 2',
  notes: 'New Recipe Notes 2',
  cookingMethodUK: 'UK Cooking Method 2',
  cookingMethodUS: 'US Cooking Method 2',
  cookingMethodAUS: 'AUS Cooking Method 2',
  prepHour: 2,
  prepMin: 20,
  cookingHour: 2,
  cookingMin: 20,
  recipeServing: 1,
  recipeCaloriesPerServe: 210,
  recipeCarbohydrate: 21,
  recipeProtein: 21,
  recipeFat: 23,
  recipeFibre: 34,
  recipeTag: 2,
  recipeIngredient: 1,
  recipeIngredientNotes: '1st Ingredient Notes 2',
  firstIngredientImperialAmount: 'IMP 23',
  firstIngredientImperialUnit: 1,
  firstIngredientMetricAmount: 'MTR 23',
  firstIngredientMetricUnit: 2,
  recipeIngredient2: 2,
  recipeIngredientNotes2: '2nd Ingredient Notes 2',
  secondIngredientAmount: 'Amt 14',
  secondIngredientUnit: 3,
  alternateRecipe: 1,
};

export const recipe3: RecipeModel = {
  title: 'New Recipe Dinner',
  summary: 'New Recipe summary 3',
  notes: 'New Recipe Notes 3',
  cookingMethodUK: 'UK Cooking Method 3',
  cookingMethodUS: 'US Cooking Method 3',
  cookingMethodAUS: 'AUS Cooking Method 3',
  prepHour: 3,
  prepMin: 30,
  cookingHour: 3,
  cookingMin: 30,
  recipeServing: 1,
  recipeCaloriesPerServe: 310,
  recipeCarbohydrate: 31,
  recipeProtein: 31,
  recipeFat: 33,
  recipeFibre: 44,
  recipeTag: 3,
  recipeIngredient: 1,
  recipeIngredientNotes: '1st Ingredient Notes 3',
  firstIngredientImperialAmount: 'IMP 34',
  firstIngredientImperialUnit: 1,
  firstIngredientMetricAmount: 'MTR 34',
  firstIngredientMetricUnit: 2,
  recipeIngredient2: 2,
  recipeIngredientNotes2: '2nd Ingredient Notes 3',
  secondIngredientAmount: 'Amt 34',
  secondIngredientUnit: 3,
  alternateRecipe: 2,
};

export const recipeWithAlternateOption: RecipeModel = {
  title: 'New Recipe Other',
  summary: 'New Recipe summary 1',
  notes: 'New Recipe Notes 1',
  cookingMethodUK: 'UK Cooking Method 1',
  cookingMethodUS: 'US Cooking Method 1',
  cookingMethodAUS: 'AUS Cooking Method 1',
  prepHour: 1,
  prepMin: 10,
  cookingHour: 1,
  cookingMin: 10,
  recipeServing: 1,
  recipeCaloriesPerServe: 110,
  recipeCarbohydrate: 12,
  recipeProtein: 12,
  recipeFat: 23,
  recipeFibre: 34,
  recipeTag: 1,
  recipeIngredient: 1,
  recipeIngredientNotes: '1st Ingredient Notes 1',
  firstIngredientImperialAmount: 'IMP 12',
  firstIngredientImperialUnit: 1,
  firstIngredientMetricAmount: 'MTR 12',
  firstIngredientMetricUnit: 2,
  recipeIngredient2: 2,
  recipeIngredientNotes2: '2nd Ingredient Notes 1',
  secondIngredientAmount: 'Amt 14',
  secondIngredientUnit: 3,
  alternateRecipe: 3,
};

// Locations

export const location1: LocationModel = {
  locationName: 'New Location 1',
};

export const location2: LocationModel = {
  locationName: 'New Location 2',
};

export const location3: LocationModel = {
  locationName: 'New Location 3',
};

// Ingredients

export const ingredient1: IngredientModel = {
  ukName: 'UK Ingredient 1',
  usName: 'US Ingredient 1',
  ausName: 'AUS Ingredient 1',
  location: 1,
};

export const ingredient2: IngredientModel = {
  ukName: 'UK Ingredient 2',
  usName: 'US Ingredient 2',
  ausName: 'AUS Ingredient 2',
  location: 2,
};

export const ingredient3: IngredientModel = {
  ukName: 'UK Ingredient 3',
  usName: 'US Ingredient 3',
  ausName: 'AUS Ingredient 3',
  location: 3,
};

// Units

export const unit1: UnitModel = {
  unitName: 'New Unit 1',
  unitSystem: 'imperial',
};

export const unit2: UnitModel = {
  unitName: 'New Unit 2',
  unitSystem: 'metric',
};

export const unit3: UnitModel = {
  unitName: 'New Unit 3',
  unitSystem: 'imperial',
};

// Tags
export const tag1: TagModel = {
  tagName: 'New Tag 1',
  tagGroup: 3,
};

export const tag2: TagModel = {
  tagName: 'New Tag 2',
  tagGroup: 5,
};

export const tag3: TagModel = {
  tagName: 'New Tag 3',
  tagGroup: 6,
};

// Meal Plan

export const mealPlaner1: MealPlanModel = generateDefaultMealPlan();
export const mealPlaner2: MealPlanModel = generateDefaultMealPlan();
mealPlaner2.weeks[0][0].meals = [3, 2, 1];

function generateDefaultMealPlan() {
  return {
    weeks: [
      [
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
      ],

      [
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
      ],

      [
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
      ],

      [
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
      ],
      [
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
      ],

      [
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
      ],

      [
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
      ],

      [
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
      ],

      [
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
      ],

      [
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
      ],

      [
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
      ],

      [
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
      ],

      [
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
        {fastingDay: false, meals: [1, 2, 3]},
      ],
    ],
  };
}

// Exercise

export const exercise1: ExerciseModel = {
  name: 'New Exercise 1',
  description: 'New Description 1',
  alternativeText: 'New Alternative Text 1',
  videoUrl: 'https://www.youtube.com/watch?v=90AABclAL1M',
  exerciseSteps: 'The steps are written here 1',
};

export const exercise2: ExerciseModel = {
  name: 'New Exercise 2',
  description: 'New Description 2',
  alternativeText: 'New Alternative Text 2',
  videoUrl: 'https://www.youtube.com/watch?v=90AABclAL1M',
  exerciseSteps: 'The steps are written here 2',
};

export const exercise3: ExerciseModel = {
  name: 'New Exercise 3',
  description: 'New Description 3',
  alternativeText: 'New Alternative Text 3',
  videoUrl: 'https://www.youtube.com/watch?v=90AABclAL1M',
  exerciseSteps: 'The steps are written here 3',
};

export const exercise4: ExerciseModel = {
  name: 'New Exercise 4',
  description: 'New Description 4',
  alternativeText: 'New Alternative Text 4',
  videoUrl: 'https://www.youtube.com/watch?v=90AABclAL1M',
  exerciseSteps: 'The steps are written here 4',
};

// Workouts

export const workout1: WorkoutModel = {
  title: 'Workout Title 1',
  summary: 'Workout Summary 1',
  type: 'HIIT',
  description: 'Workout Description 1',
  video_url: 'https://www.youtube.com/watch?v=oAPCPjnU1wA',
  audio_url: 'https://music.youtube.com/watch?v=9XaS93WMRQQ&list=RDAMVM9XaS93WMRQQ',
  duration_min: 30,
  difficulty_level: 'beginner',

  first_exercise_select: 1,
  first_exercise_no: 1,
  first_exercise_work_time: 10,
  first_exercise_rest_time: 5,

  second_exercise_select: 2,
  second_exercise_no: 2,
  second_exercise_work_time: 20,
  second_exercise_rest_time: 5,

  third_exercise_select: 3,
  third_exercise_no: 3,
  third_exercise_work_time: 30,
  third_exercise_rest_time: 10,
};

export const workout2: WorkoutModel = {
  title: 'Workout Title 2',
  summary: 'Workout Summary 2',
  type: 'Resistance',
  description: 'Workout Description 2',
  video_url: 'https://www.youtube.com/watch?v=oAPCPjnU1wA',
  audio_url: 'https://music.youtube.com/watch?v=9XaS93WMRQQ&list=RDAMVM9XaS93WMRQQ',
  duration_min: 50,
  difficulty_level: 'intermediate',

  first_exercise_select: 3,
  first_exercise_no: 1,
  first_exercise_work_time: 15,
  first_exercise_rest_time: 5,

  second_exercise_select: 2,
  second_exercise_no: 2,
  second_exercise_work_time: 30,
  second_exercise_rest_time: 10,

  third_exercise_select: 4,
  third_exercise_no: 3,
  third_exercise_work_time: 45,
  third_exercise_rest_time: 15,
};

export const workout3: WorkoutModel = {
  title: 'Workout Title 3',
  summary: 'Workout Summary 3',
  type: 'Pilates',
  description: 'Workout Description 3',
  video_url: 'https://www.youtube.com/watch?v=oAPCPjnU1wA',
  audio_url: 'https://music.youtube.com/watch?v=9XaS93WMRQQ&list=RDAMVM9XaS93WMRQQ',
  duration_min: 90,
  difficulty_level: 'advanced',

  first_exercise_select: 2,
  first_exercise_no: 1,
  first_exercise_work_time: 20,
  first_exercise_rest_time: 5,

  second_exercise_select: 1,
  second_exercise_no: 2,
  second_exercise_work_time: 15,
  second_exercise_rest_time: 10,

  third_exercise_select: 3,
  third_exercise_no: 3,
  third_exercise_work_time: 30,
  third_exercise_rest_time: 10,
};

export const workout4: WorkoutModel = {
  title: 'Workout Title 4',
  summary: 'Workout Summary 4',
  type: 'Stretching',
  description: 'Workout Description 4',
  video_url: 'https://www.youtube.com/watch?v=oAPCPjnU1wA',
  audio_url: 'https://music.youtube.com/watch?v=9XaS93WMRQQ&list=RDAMVM9XaS93WMRQQ',
  duration_min: 60,
  difficulty_level: 'advanced',

  first_exercise_select: 4,
  first_exercise_no: 1,
  first_exercise_work_time: 10,
  first_exercise_rest_time: 5,

  second_exercise_select: 3,
  second_exercise_no: 2,
  second_exercise_work_time: 15,
  second_exercise_rest_time: 10,

  third_exercise_select: 2,
  third_exercise_no: 3,
  third_exercise_work_time: 30,
  third_exercise_rest_time: 10,
};

// Fitness level

export const fitnessPlan1: FitnessLevelModel = generateFitnessLevelOne();
function generateFitnessLevelOne() {
  return {
    fitnessName: 'Fitness Name 1',
    level: 1,
    programName: 'Program name 1',
    programDescription: 'Program description 1',
    weeks: [
      [
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
      ],

      [
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
      ],

      [
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
      ],

      [
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
      ],

      [
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
      ],

      [
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
      ],

      [
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
      ],

      [
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
      ],

      [
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
      ],

      [
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
      ],

      [
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
      ],

      [
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
      ],

      [
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
      ],
    ],
  };
}

export const fitnessPlan2: FitnessLevelModel = generateFitnessLevelTwo();
function generateFitnessLevelTwo() {
  return {
    fitnessName: 'Fitness Name 2',
    level: 2,
    programName: 'Program name 2',
    programDescription: 'Program description 2',
    weeks: [
      [
        {restDay: false, workout: 4},
        {restDay: false, workout: 3},
        {restDay: false, workout: 2},
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
      ],

      [
        {restDay: false, workout: 4},
        {restDay: false, workout: 3},
        {restDay: false, workout: 2},
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
      ],

      [
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
      ],

      [
        {restDay: false, workout: 4},
        {restDay: false, workout: 3},
        {restDay: false, workout: 2},
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
      ],

      [
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
      ],

      [
        {restDay: false, workout: 4},
        {restDay: false, workout: 3},
        {restDay: false, workout: 2},
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
      ],
      [
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
      ],

      [
        {restDay: false, workout: 4},
        {restDay: false, workout: 3},
        {restDay: false, workout: 2},
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
      ],

      [
        {restDay: false, workout: 4},
        {restDay: false, workout: 3},
        {restDay: false, workout: 2},
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
      ],

      [
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
      ],

      [
        {restDay: false, workout: 4},
        {restDay: false, workout: 3},
        {restDay: false, workout: 2},
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
      ],

      [
        {restDay: false, workout: 4},
        {restDay: false, workout: 3},
        {restDay: false, workout: 2},
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
      ],

      [
        {restDay: false, workout: 4},
        {restDay: false, workout: 3},
        {restDay: false, workout: 2},
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
      ],
    ],
  };
}

export const fitnessPlan3: FitnessLevelModel = generateFitnessLevelThree();
function generateFitnessLevelThree() {
  return {
    fitnessName: 'Fitness Name 3',
    level: 3,
    programName: 'Program name 3',
    programDescription: 'Program description 3',
    weeks: [
      [
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
      ],

      [
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
      ],

      [
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
      ],

      [
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
      ],
      [
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
      ],

      [
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
      ],
      [
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
      ],
      [
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
      ],
      [
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
      ],
      [
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
      ],
      [
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
      ],
      [
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
      ],
      [
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
        {restDay: false, workout: 2},
        {restDay: false, workout: 3},
        {restDay: false, workout: 4},
        {restDay: false, workout: 1},
      ],
    ],
  };
}
