import { SesionComponent } from './login/sesion/sesion.component';
import { SearchreadComponent } from './searchread/searchread.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordComponent } from './login/password/password.component';
import { InforecetaComponent } from './searchread/inforeceta/inforeceta.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserModule } from '@angular/platform-browser';
 

const routes: Routes = [
  { path: 'passw', component: PasswordComponent },
  { path: 'searchre', component: SearchreadComponent },
  { path: 'login', component: SesionComponent },
  { path: 'infore', component: InforecetaComponent }
  ];

@NgModule({
  imports: [
    BrowserModule, FormsModule, NgbModule,CommonModule, ReactiveFormsModule,
    RouterModule.forRoot(routes, {
      enableTracing: true
    })],
    
  exports: [RouterModule]
})
export class AppRoutingModule { }
