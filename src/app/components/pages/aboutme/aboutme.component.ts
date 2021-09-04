import { Component, Inject, OnInit } from '@angular/core';
import { GithubUser } from 'src/app/classes/github-user';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})

export class AboutmeComponent implements OnInit {

  user!: GithubUser

  constructor(private githubService: GithubService) {

  }

  ngOnInit(): void {
    this.githubService.getUser('lprovenzano')
    .subscribe((resp) => {
      this.user = new GithubUser(
          resp['avatar_url'],
          resp['name'],
          resp['location'],
          "Descripción del juego a desarrollar..."
        )
    });
  }

}
