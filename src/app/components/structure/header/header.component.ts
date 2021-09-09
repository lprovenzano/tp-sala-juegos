import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isVisible = true;
  isUserLogged = false;

  @Output() visibility = new EventEmitter<boolean>();

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    const user = this.authService.getCurrentUser();
    if (user) {
      this.isUserLogged = true;
      console.log(user);
    }

  }

  ShowNavbar(visibility: boolean): void {
    this.visibility.emit(visibility);
  }

  logout(): void {
    if (this.isUserLogged) {
      this.authService.logout();
      console.log("logout");
    }
  }


}
