import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-login',
  templateUrl: 'form-login.component.html',
  styleUrls: ['form-login.component.less']
})
export class FormLoginComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(form) {
    console.log('submit');
    console.log(form.valid);
  }
}
