import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {NotificationService} from '../../../services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authService: AuthService, private notificationService: NotificationService, private routerService: Router) {
  }

  ngOnInit(): void {
  }

  onLogin(): void {
    const {email, password} = this.loginForm.value;
    this.authService.login(email, password)
      .then((r: any) => this.handleLogin(r, email));
  }

  public autoLogin(userTestId: string): void {
    const email = `test_utn${userTestId}@test.com`;
    const password = `test_utn${userTestId}`;
    this.notificationService.showSuccess('Iniciando sesión...', `${email}`);
    this.authService.login(email, password)
      .then((r: any) => {
        setTimeout(() => {
          this.handleLogin(r, email);
        }, 1000);
      });
  }

  private handleLogin(response: any, email: string): void {
    if (!response.isNewUser && response.user.email === email) {
      setTimeout(() => {
        this.routerService.navigate(['/']).then(() => {
          window.location.reload();
        });
      }, 3000);
    }
  }

}
