import {resetAppData} from '../../utils';
import BasePage from '../../utils/base.page';

export type RANGE_TYPE = 0 | 1 | 2 | 3 | 4 | 5;
export interface QuizModel6 {
  job: string;
  commute: string;
  recreational_sport: RANGE_TYPE;
  walking: RANGE_TYPE;
  cv: RANGE_TYPE;
  resistance: RANGE_TYPE;
  gym: RANGE_TYPE;
}
export class QuizSixPage extends BasePage {
  JOB_SELECTOR = this.getFormSelector('job');
  COMMUTE_SELECTOR = this.getFormSelector('commute');
  RECREATIONAL_SPORT_SELECTOR = 'recreational_sport';
  WALKING_SELECTOR = 'walking';
  CV_SELECTOR = 'cv';
  RESISTANCE_SELECTOR = 'resistance';
  GYM_SELECTOR = 'gym';
  NEXT_BTN_SELECTOR = '#next-button';

  constructor() {
    super();
  }

  completeQuiz(model: QuizModel6) {
    const {job, commute, recreational_sport, walking, cv, resistance, gym} = model;
    this.select(this.JOB_SELECTOR, job);
    this.select(this.COMMUTE_SELECTOR, commute);
    this.checkCustomRadio(this.RECREATIONAL_SPORT_SELECTOR, recreational_sport);
    this.checkCustomRadio(this.WALKING_SELECTOR, walking);
    this.checkCustomRadio(this.CV_SELECTOR, cv);
    this.checkCustomRadio(this.RESISTANCE_SELECTOR, resistance);
    this.checkCustomRadio(this.GYM_SELECTOR, gym);
    this.clickNext();
  }

  clickNext() {
    this.click(this.NEXT_BTN_SELECTOR);
    this.waitForElementToNotAppear(this.JOB_SELECTOR);
  }
}
