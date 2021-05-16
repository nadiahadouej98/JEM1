import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import { MainComponent} from './admin/dashboard/main/main.component' ;
import { Dashboard2Component} from './admin/dashboard/dashboard2/dashboard2.component' ;
const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  {path:'sign-up', component: SignUpComponent},
  {path:'sign-in', component: SignInComponent},
   {path: 'forgot-password', component:ForgotPasswordComponent},
  {path: 'main', component:MainComponent},
  {path: 'dashboard2', component:Dashboard2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
