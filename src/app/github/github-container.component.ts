import { Component } from '@angular/core';
import { GithubService } from '../core/github.service';
import { IUser, IRepo } from '../shared/interfaces';

@Component({
  selector: 'app-github-container-component',
  templateUrl: './github-container.component.html'
})
export class GithubContainerComponent {

  constructor(private githubService: GithubService) {

  }

  user: IUser;
  repos: IRepo[];

  onUserSearch(username: string): void {
    console.log("on user search: " + username);
    this.githubService.getUserDetails(username).subscribe(data => {
      this.user = data;
      this.githubService.getRepos(data.repos_url).subscribe(data => {
          this.repos = data;
      })
    });
  }
}
