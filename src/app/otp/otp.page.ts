import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
  formValue = {phoneNumber: '', test: ''};
  form!: FormGroup;
  maxTime: any=5
  hidevalue: boolean = false
  timer: any
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      phoneNumber: new FormControl({
        value: this.formValue.phoneNumber,
        disabled: false
      })
    });

    this.StartTimer()
  }

  StartTimer(){
    this.timer = setTimeout(x => 
      {
          if(this.maxTime <= 0) { }
          this.maxTime -= 1;

          if(this.maxTime>0){
            this.hidevalue = false;
            this.StartTimer();
          }
          
          else{
              this.hidevalue = true;
          }

      }, 1000);
  }

  reSend(){
    console.log("vpe")
  }
}
