import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() isVisible: any;
  isUserLogged = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.isUserLogged = this.authService.isLoggedIn();
  }

}
