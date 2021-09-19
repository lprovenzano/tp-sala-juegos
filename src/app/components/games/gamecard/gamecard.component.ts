import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {Igamecard} from '../../../interfaces/igamecard';

@Component({
  selector: 'app-gamecard',
  templateUrl: './gamecard.component.html',
  styleUrls: ['./gamecard.component.scss']
})
export class GamecardComponent implements OnInit {

  buttonTitle = 'Jugar ahora!';

  @Input()
  gameList: Igamecard[] | undefined;

  constructor(public authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  playGame(routeGame: string): void {
    const route = this.authService.isLoggedIn() ? routeGame : 'auth/login';
    console.log(route);
    this.router.navigate([route]);
  }

}
