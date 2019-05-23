import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../../shared/interfaces';
import { IRepo } from '../../shared/interfaces';
import { GithubService } from '../../core/github.service';

@Component({
  selector: 'app-search-user-form',
  templateUrl: './search-user-form.component.html'
})
export class SearchUserFormComponent {
  constructor() {}

  username = '';
  user: IUser;
  repos: IRepo;

  onSubmit(): void {
    this.githubService.getUserDetails(this.username).subscribe(data => {
      this.user = data;
      this.githubService.getRepos(data.repos_url).subscribe(repos => {
        this.repos = repos;
        console.log(repos);
      });
    });
    return;
  }
}
