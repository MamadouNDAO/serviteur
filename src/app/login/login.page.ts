import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formValue = {phoneNumber: '', password: ''};
  form!: FormGroup;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      phoneNumber: new FormControl({
        value: this.formValue.phoneNumber,
        disabled: false
      }),
      password: new FormControl({
        value: this.formValue.password,
        disabled: false
      })
    });
  }

}
