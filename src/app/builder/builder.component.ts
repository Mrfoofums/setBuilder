import { Component, OnInit } from '@angular/core';
import { Item,AppState,ACTIONS } from '../shared/interface/models';
import { Store} from '@ngrx/store';
@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {
  items: Item[] = [];
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

}
