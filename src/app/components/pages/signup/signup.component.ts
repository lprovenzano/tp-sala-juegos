import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  onRegister(): void {
    const {email, password} = this.registerForm.value;
    this.authService.signUp(email, password)
      .then(r => {
        if (r.additionalUserInfo.isNewUser) {
          this.authService.login(email, password);
        }
      });
  }

}
