import { createAction, props } from '@ngrx/store';

export const changeText = createAction(
    '[Home] Change text',
  props<{ text: string }>(),
);