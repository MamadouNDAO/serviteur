import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from '../Api/api.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.page.html',
  styleUrls: ['./phone.page.scss'],
})
export class PhonePage implements OnInit {
  formValue = {phoneNumber: '', test: ''};
  form!: FormGroup;
  subsOtp: Subscription = new Subscription
  codeOtp: string = ""
  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.form = new FormGroup({
      telephone: new FormControl({
        value: this.formValue.phoneNumber,
        disabled: false
      })
    });
  }
   onSubmit(){
    //this.router.navigate(['/otp'])
    let data = this.form.value
    var regex = /(\d+)/g;
    data.telephone = (data.telephone.split(/[0-9]+/).join("") + data.telephone.match(regex).join('')).trim()
    
    console.log(data)

    this.subsOtp = this.api.getOtp(data).subscribe(
      resp => {
        console.log(resp)
        /*if(resp.status == true && resp.code == 200){

        }*/
      },
      err => {
        console.log(err)
      }
    )
   }


   ngOnDestroy(): void {
    if(this.subsOtp){
      this.subsOtp.unsubscribe()
    }
    
  }
}
