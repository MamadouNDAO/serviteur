import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { SimpleMaskModule } from 'ngx-ion-simple-mask';
import { NgOtpInputModule } from 'ng-otp-input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    SimpleMaskModule,
    ReactiveFormsModule,
    NgOtpInputModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
