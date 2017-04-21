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
            items: [...state.items, itemToAdd],
            history:[...state.history, action]
        };
        break;

        case ACTIONS.SELECT_ITEM:
            returnState = {
                ...state,
                selectedItemId: action.payload,
                history:[...state.history, action]
            }
            break;
        case ACTIONS.VIEW_HISTORY:
            returnState = {
                ...state,
                history:[...state.history, action]
            };
            console.log(state.history);
            break;
           default:
           returnState = state;
     }
        return Object.freeze(returnState);
}
