import { State } from './state/tasks/task.reducers';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import * as fromTask from './state/tasks/task.reducers';
import { EffectsModule } from '@ngrx/effects';
import {TaskEffects} from "./state/tasks/task.effects";
import { TaskComponent } from './components/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({tasks: fromTask.reducer}),
    EffectsModule.forRoot([TaskEffects]),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
