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
            ...state,
            items: [...state.items, itemToAdd]
        };
        break;

        case ACTIONS.SELECT_ITEM:
        console.log("payload is");
        console.log(action.payload);
            returnState = {
                ...state,
                selectedItemId: action.payload
            }
            break;
           default:
           returnState = state;
     }
        return Object.freeze(returnState);
}
