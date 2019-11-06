import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PasswordComponent } from './login/password/password.component';
import { SesionComponent } from './login/sesion/sesion.component';
import { NavbarComponent } from './login/navbar/navbar.component';
import { SearchreadComponent } from './searchread/searchread.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InforecetaComponent } from './searchread/inforeceta/inforeceta.component';



@NgModule({
  declarations: [
    AppComponent,
    PasswordComponent,
    SearchreadComponent,
    SesionComponent,
    NavbarComponent,
    InforecetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
