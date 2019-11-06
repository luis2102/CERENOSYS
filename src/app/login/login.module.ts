import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchreadComponent } from './../searchread/searchread.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PasswordComponent } from './password/password.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SesionComponent } from './sesion/sesion.component';



@NgModule({
  declarations: [PasswordComponent, NavbarComponent, SesionComponent],
  imports: [CommonModule, NgbModule, ReactiveFormsModule, FormsModule]
})
export class LoginModule { }
