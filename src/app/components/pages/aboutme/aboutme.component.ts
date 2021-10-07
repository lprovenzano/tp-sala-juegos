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
    const gameDescription = 'Do not fall! es un juego en el que tenes que ir sorteando obtáculos sin caerte.';
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
