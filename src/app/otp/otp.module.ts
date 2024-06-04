import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtpPageRoutingModule } from './otp-routing.module';

import { OtpPage } from './otp.page';
import { SimpleMaskModule } from 'ngx-ion-simple-mask';
import { NgOtpInputModule } from 'ng-otp-input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtpPageRoutingModule,
    SimpleMaskModule,
    ReactiveFormsModule,
    NgOtpInputModule
  ],
  declarations: [OtpPage]
})
export class OtpPageModule {}
