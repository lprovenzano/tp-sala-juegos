import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isUserLogged = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.isUserLogged = this.authService.isLoggedIn();
  }

}
