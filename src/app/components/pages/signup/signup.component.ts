import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {NotificationService} from '../../../services/notification.service';
import {Router} from '@angular/router';

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

  errorMessage: string | null | undefined;

  emailAlreadyInUse = 'auth/email-already-in-use';
  invalidEmail = 'auth/invalid-email';
  invalidPassword = 'auth/weak-password';

  constructor(private authService: AuthService, private nofiticationService: NotificationService, private routerService: Router) {
  }

  ngOnInit(): void {
  }

  onRegister(): void {
    const {email, password} = this.registerForm.value;
    this.authService.signUp(email, password)
      .then(r => {
        if (r.additionalUserInfo.isNewUser) {
          this.authService.login(email, password);
          this.routerService.navigate(['/']).then(() => {
            window.location.reload();
          });
        }
      }).catch(e => {
      if (e.code === this.emailAlreadyInUse) {
        this.errorMessage = 'El email se encuentra registrado.';
      }
      if (e.code === this.invalidEmail) {
        this.errorMessage = 'Email inválido.';
      }
      if (e.code === this.invalidPassword) {
        this.errorMessage = 'La contraseña debe tener más de 6 caracteres.';
      }
    });
  }
}
