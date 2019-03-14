import {Action} from '@ngrx/store';
export enum CustomerActionTypes {
  Add = '[Customer Component] Add',
  Remove = '[Customer Component] Remove'
}
export class ActionEx implements Action {
  readonly type;
  payload: any;
}
export class CustomerAdd implements ActionEx {
  readonly type = CustomerActionTypes.Add;
  constructor(public payload: any) {
  }
}
export class CustomerRemove implements ActionEx {
  readonly type = CustomerActionTypes.Remove;
  constructor(public payload: any) {
  }
}
