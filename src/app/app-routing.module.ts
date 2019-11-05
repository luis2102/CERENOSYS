import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordComponent } from './login/password/password.component';
import { SearchreadComponent } from './searchread/searchread.component';

const routes: Routes = [
  { path: 'passw', component: PasswordComponent },
  { path: 'searchre', component: SearchreadComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
