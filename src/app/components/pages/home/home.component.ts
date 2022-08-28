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
    },
    {
      image_url: '/assets/images/games/higherorlower/higherorlower-tghumbnail.jpeg',
      title: 'Mayor o menor',
      description: 'El juego consiste en adivinar si la próxima carta del mazo es mayor o menor. Sumás un punto por cada tiro correcto.',
      path: '/games/higherorlower'
    }, {
      image_url: '/assets/images/games/preguntados/preguntados-thumbnail.jpeg',
      title: 'Preguntados',
      description: 'La sala de jugos pregunta, vos respondes. Sumas puntos por cada respuesta correcta!',
      path: '/games/preguntados'
    },
    {
      image_url: '/assets/images/games/twentyone/veintiuno.png',
      title: 'Veintiuno',
      description: 'El que llega a 21 o el que esté más cerca, gana.',
      path: '/games/twentyone'
    }
  ];

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
  }

}
