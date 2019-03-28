import { Action } from '@ngrx/store';

export enum ActionTypes {
  AddPassengers = '[Counter Component] AddPassengers',
  RemovePassengers = '[Counter Component] RemovePassengers',
}

export class AddPassengers implements Action {
  readonly type = ActionTypes.AddPassengers;
}

export class RemovePassengers implements Action {
  readonly type = ActionTypes.RemovePassengers;
}

