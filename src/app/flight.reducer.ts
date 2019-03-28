import { Action } from '@ngrx/store';
import { ActionTypes } from './flight.actions';

export const initialState = 0;

export function flightReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.AddFlight:
      return state + 1;

    case ActionTypes.RemoveFlight:
      return state - 1;

    default:
      return state;
  }
}
