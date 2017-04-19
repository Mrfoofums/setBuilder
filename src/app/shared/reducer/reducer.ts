import { AppState, ACTIONS,Item, ItemSet, initialState } from '../interface/models';
import { ActionReducer, Action } from '@ngrx/store';

type ReadonlyAppState = Readonly<AppState>;

export function reducer(state: AppState = initialState, action: Action ): AppState {
    let returnState: AppState = state;
    let itemToAdd: Item;

    switch (action.type) {
        case ACTIONS.ADD_ITEM:
            itemToAdd = {
                name:action.payload.name,
                id: state.items.length
            };
        returnState = {
            items: [...state.items, itemToAdd]
        };
        break;
           default:
           returnState = state;
     }
        console.log(returnState.items);
        return Object.freeze(returnState);
}
