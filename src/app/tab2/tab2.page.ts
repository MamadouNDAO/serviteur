import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  formValue = {phoneNumber: '', montant: ''};
  form!: FormGroup;
  isStart: boolean = true;
  isCashin: boolean = false;
  isCashout: boolean = false;
  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      phoneNumber: new FormControl({
        value: this.formValue.phoneNumber,
        disabled: false
      }),
      montant: new FormControl({
        value: this.formValue.montant,
        disabled: false
      })
    });
  }

  onCashin(){
    this.isStart = false
    this.isCashin = true
    this.isCashout = false
  }

  onCashout(){
    this.isStart = false
    this.isCashin = false
    this.isCashout = true
  }

  onStart(){
    this.isStart = true
    this.isCashin = false
    this.isCashout = false
  }

}
