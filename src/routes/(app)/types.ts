export type Recipe = {
  id: number;
  name: string;
  ingredients: string[];
  rating: number;
  times_done: number;
};

export type DayPlan = {
  id: number;
  name: string;
  items: Recipe[];
};

export type WeekPlan = {
  id: number;
  name: string;
  days: DayPlan[];
};
