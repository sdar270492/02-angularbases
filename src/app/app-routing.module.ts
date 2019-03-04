import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

const route: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
// tslint:disable-next-line: semicolon
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( route )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
