import { BrowserModule } from '@angular/platform-browser';
import { Component,NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { GaugeModule } from 'angular-gauge';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProfileComponent } from './profile/profile.component';
import {MainComponent} from './admin/dashboard/main/main.component';
import { HttpClientModule } from '@angular/common/http';


import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';



import { NgxEchartsModule } from 'ngx-echarts';
import { NgApexchartsModule } from 'ng-apexcharts';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { Dashboard2Component } from 'src/app/admin/dashboard/dashboard2/dashboard2.component';
import { BlankComponent } from 'src/app/extra-pages/blank/blank.component'
@NgModule({
  declarations: [
    Dashboard2Component,
    AppComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    SignInComponent,
    ProfileComponent,
    MainComponent,
    BlankComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    GaugeModule.forRoot(),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    // NgxEchartsModule.forRoot({
      // echarts: () => import('echarts'),
    // }),
    NgApexchartsModule,
    HttpClientModule

    
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
