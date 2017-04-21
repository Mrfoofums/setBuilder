import { ACTIONS, Item } from '../interface';
import { Action } from '@ngrx/store';

export const SELECT_ITEM = (selectedItemId: number): Action => ({
    type: ACTIONS.SELECT_ITEM,
    payload: selectedItemId
});

export const ADD_ITEM = (add: Item): Action => ({
    type: ACTIONS.ADD_ITEM,
    payload: add
});

export const VIEW_HISTORY = (): Action => ({
    type:ACTIONS.VIEW_HISTORY
});