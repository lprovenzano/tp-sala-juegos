import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  myGames = [
    {
      image_url: '/assets/images/games/hanged/hanged-thumbnail.jpeg',
      title: 'Ahorcado',
      description: 'Es un juego, en el que el objetivo es adivinar una palabra. El jugador deberá ir diciendo letras que le parece que puede contener la palabra. Si acierta, se escriben todas las letras coincidentes, y sino, es un paso más hacia la tan temida horca.',
      path: '/games/hanged'
    }
  ];

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
  }

}
