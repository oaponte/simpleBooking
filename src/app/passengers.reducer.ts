import { Action } from '@ngrx/store';
import { ActionTypes } from './passengers.actions';

export const initialState = 0;

export function passengersReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.AddPassengers:
      return state + 1;

    case ActionTypes.RemovePassengers:
      return state - 1;

    default:
      return state;
  }
}
