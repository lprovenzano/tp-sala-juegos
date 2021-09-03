import { Component, Inject, OnInit } from '@angular/core';
import { GithubUser } from 'src/app/classes/github-user';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})

@Inject
export class AboutmeComponent implements OnInit {

  user!: GithubUser

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.user = this.githubService.getUser('lprovenzano');
    console.log(this.user)
  }

}
