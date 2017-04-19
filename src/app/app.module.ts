import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BuilderComponent } from './builder/builder.component';
import { StoreModule } from '@ngrx/store';
import {reducer} from './shared/reducer/reducer';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(reducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
