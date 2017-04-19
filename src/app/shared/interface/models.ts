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
    selectedItem?: number;
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
  ADD_ITEM: 'ADD ITEM',
  REMOVE_ITEM: 'REMOVE ITEM',
  SELECT_ITEM: 'SELECT_ITEM'
};


export const SELECT_ITEM = (selectedItem: Item): Action => ({
    type: ACTIONS.SELECT_ITEM,
    payload:{
        item: selectedItem
    }
});

export const ADD_ITEM = (add:Item): Action =>({
    type: ACTIONS.ADD_ITEM,
    payload: {
        item: add
    }
});

