import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import firebase from 'firebase';
import {NotificationService} from '../../../services/notification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isVisible = true;
  user: any | null | undefined;

  @Output() visibility = new EventEmitter<boolean>();

  constructor(public authService: AuthService, private notificationService: NotificationService, private routerService: Router) {
  }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.user = JSON.parse(localStorage.getItem('user') as string);
    }
  }

  ShowNavbar(visibility: boolean): void {
    this.visibility.emit(visibility);
  }

  logout(): void {
    if (this.authService.isLoggedIn() && this.authService.logout()) {
      this.notificationService.showSuccess('Sesión cerrada con éxito.', 'Ok');
      setTimeout(() => {
        this.routerService.navigate(['/']).then(() => {
          window.location.reload();
        });
      }, 3000);
    }
  }


}
