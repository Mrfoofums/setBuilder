import { Component, OnInit } from '@angular/core';
import { Item, AppState, ACTIONS } from '../shared/interface/models';
import { Store} from '@ngrx/store';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {
  items: Observable<Item[]>;
  selectedItem: Observable<Item>;
  constructor(private store: Store<AppState>) { 
    this.items = store.select(state => state.items);
    this.selectedItem = store.select(state => state.selectedItem);
  }

  ngOnInit() {
  }


  clicked() {
    console.log('clicked');
    this.store.dispatch({type: ACTIONS.ADD_ITEM,
    payload:{name:"first one",
      meta:{
        info:"I made this"
       }}});
  }
}
