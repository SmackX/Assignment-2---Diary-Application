import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { Parent1ComponentComponent } from './parent1-component/parent1-component.component';
import { Parent2ComponentComponent } from './parent2-component/parent2-component.component';
import { Child1ComponentComponent } from './parent1-component/child1-component/child1-component.component';
import { Child2ComponentComponent } from './parent1-component/child2-component/child2-component.component';
import { Child3ComponentComponent } from './parent2-component/child3-component/child3-component.component';
import {SharedServiceService} from './shared-service.service';


const appRouter: Routes = [
  { path: '', component: AppComponent },
  { path: 'Parent1', component: AppComponent },
  { path: 'Parent2', component: AppComponent },
  { path: 'Child1', component: AppComponent },
  { path: 'Child2', component: AppComponent },
  { path: 'Child3', component: AppComponent },
  ]

@NgModule({
  declarations: [
    AppComponent,
    Parent1ComponentComponent,
    Parent2ComponentComponent,
    Child1ComponentComponent,
    Child2ComponentComponent,
    Child3ComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SharedServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
