import { createAction, props } from '@ngrx/store';

export const SHOW_ALERT = '[show alert] show alert';
export const EMPTY_ALERT = '[empty alert] empty alert';

export const showAlert = createAction(SHOW_ALERT, props<{ message: string, alertType:string }>());
export const emptyAlert = createAction(EMPTY_ALERT);
