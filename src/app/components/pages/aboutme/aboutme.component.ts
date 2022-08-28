import {Component, Inject, OnInit} from '@angular/core';
import {GithubUser} from 'src/app/classes/github-user';
import {GithubService} from 'src/app/services/github.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})

export class AboutmeComponent implements OnInit {

  user!: GithubUser;

  constructor(private githubService: GithubService) {

  }

  ngOnInit(): void {
    const gameDescription = 'El veintiuno, es un juego de aproximación con cartas en donde quien más cerca esté de la cifra, gana. Cualquier coincidencia con el blackjack, es mera casualidad.';
    const userId = 'lprovenzano';
    this.githubService.getUser(userId)
      .subscribe((resp) => {
        this.user = new GithubUser(
          resp.avatar_url,
          resp.name,
          resp.location,
          resp.bio,
          resp.html_url,
          gameDescription
        );
      });
  }

}
