export interface Item {
    name: string;
    id: number;
    meta: any;
}

export interface AppState {
    items: Item [];
    numberOfItems: number;
}

export const ACTIONS = {
  ADD_ITEM: 'ADD ITEM',
  REMOVE_ITEM: 'REMOVE ITEM'
}