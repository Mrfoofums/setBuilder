import { Component, OnInit } from '@angular/core';
import { AppState, Item} from '../shared/interface';
import { Store } from '@ngrx/store';
import { ADD_ITEM, SELECT_ITEM , VIEW_HISTORY } from '../shared/reducer';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  itemtoAdd: Item;
  selectedItem: Item;
  constructor(private store: Store<AppState>) { 
  }

  ngOnInit() {
  }

  addItem() {
    this.store.dispatch(ADD_ITEM(this.itemtoAdd));
  }

  selectItem() {
    this.store.dispatch(SELECT_ITEM(this.selectedItem.id));
  }
}
