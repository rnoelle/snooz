import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ProfileComponent } from './views/profile/profile.component';

import { PersonalDataComponent } from './features/personalDataComponent/personalData.component';
import { AddTaskComponent } from './features/addTask/addTask.component';

import { RouterModule, Routes } from '@angular/router';

const viewRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot(viewRoutes),
    FormsModule
   ],
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    PersonalDataComponent,
    AddTaskComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
