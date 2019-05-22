import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from './IUser';
import { IRepo } from './IRepo';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private url = 'https://api.github.com/users/';

  constructor(private http: HttpClient) {}

  getUserDetails(username: string): Observable<IUser> {
    return this.http.get<IUser>(this.url + username);
  }

  getRepos(reposUrl: string): Observable<IRepo> {
    return this.http.get<IRepo>(reposUrl);
  }
}
