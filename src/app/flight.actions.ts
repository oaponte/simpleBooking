import { Action } from '@ngrx/store';

export enum ActionTypes {
  AddFlight = '[Counter Component] AddFlight',
  RemoveFlight = '[Counter Component] RemoveFlight',
}

export class AddFlight implements Action {
  readonly type = ActionTypes.AddFlight;
}

export class RemoveFlight implements Action {
  readonly type = ActionTypes.RemoveFlight;
}

