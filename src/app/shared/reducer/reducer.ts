import { AppState, ACTIONS,Item }from '../interface/models';
import { ActionReducer, Action } from '@ngrx/store';


const initialState: AppState = {
    items: [],
   numberOfItems: 0,
   selectedItem: null
};



export function reducer(state:AppState = initialState, action: Action ):AppState{
    let items: Item[]  = state.items;
    let item: Item;
    let returnState: AppState;
    switch (action.type) {

        case ACTIONS.ADD_ITEM:
            const nextItem: Item = {
                name: action.payload.name ,
                id: state.items.length,
                meta: action.payload.meta
             };
            item = action.payload;
            returnState = {
                items: [...items, nextItem],
                numberOfItems: state.numberOfItems + 1,
                selectedItem: state.selectedItem
            };
            break;

        case ACTIONS.REMOVE_ITEM:
        const removal: number = items.indexOf(action.payload.item);
           returnState = {
               items: items.filter( (curItem) => (items.indexOf(curItem) !== removal)),
               numberOfItems: state.numberOfItems - 1,
               selectedItem:state.selectedItem
           };
           break;

           default:
           returnState = state;
     }
        return Object.freeze(returnState);
}
