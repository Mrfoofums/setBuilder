import { Action } from '@ngrx/store';
export interface Item {
    name: string;
    id?: number;
    setId?: number;
    meta?: any;
};

export interface ItemSet {
    name?: string;
    id: number;
}

export interface AppState {
    items: Array<Item>;
    selectedItemId?: number;
    itemSets?: Array<ItemSet>;
}

const defaultSet:ItemSet ={
    name: 'default',
    id: 1
};

export const initialState: AppState = {
    items: [],
    itemSets:[defaultSet]
};

export const ACTIONS = {
  ADD_ITEM: '[ITEM]ADD ITEM',
  REMOVE_ITEM: '[NUMBER]REMOVE ITEM',
  SELECT_ITEM: '[NUMBER] SELECT_ITEM',
  DELETE_ITEM: '[ID] DELETE_ITEM' 
};






