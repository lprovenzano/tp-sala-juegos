import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  onRegister(): void {
    console.log('Form =>', this.registerForm.value);
  }

}
