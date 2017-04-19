import { Component, OnInit } from '@angular/core';
import { Item, ItemSet, AppState, ADD_ITEM,SELECT_ITEM } from '../shared/interface/models';
import { Store} from '@ngrx/store';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {
  items: Observable<Item[]>;
  selectedItem: Observable<number>;
  constructor(private store: Store<AppState>) { 
    this.items = store.select(state => state.items);
    this.selectedItem = store.select(state => state.selectedItem);
  }

  ngOnInit() {
  }

  clicked() {
    let payload: Item = {
      name: 'test'
    };

    this.store.dispatch(ADD_ITEM(payload));
  }

  select(item:Item) {
    this.store.dispatch(SELECT_ITEM(item));
  }
}
