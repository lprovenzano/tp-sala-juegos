import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import firebase from 'firebase';
import User = firebase.User;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isVisible = true;
  isUserLogged = false;
  user: any | null | undefined;

  @Output() visibility = new EventEmitter<boolean>();

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.isUserLogged = this.authService.isLoggedIn();
    if (this.isUserLogged) {
      this.user = JSON.parse(<string> localStorage.getItem('user'));
    }
  }

  ShowNavbar(visibility: boolean): void {
    this.visibility.emit(visibility);
  }

  logout(): void {
    if (this.isUserLogged) {
      this.authService.logout()
        .then(r => console.log('logout ok', r));
    }
  }


}
