import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../../shared/interfaces';
import { IRepo } from '../../shared/interfaces';
import { GithubService } from '../../core/github.service';

@Component({
  selector: 'app-search-user-form',
  templateUrl: './search-user-form.component.html'
})
export class SearchUserFormComponent {

  @Output() search = new EventEmitter<string>();
  usernameInputField = '';

  onSubmit(): void {
    this.search.emit(this.usernameInputField);
  }
}
