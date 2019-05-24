import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchUserFormComponent } from './search-user-form/search-user-form.component';
import { FormsModule } from '@angular/forms';
import { GithubContainerComponent } from './github-container.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ReposListComponent } from './repos-list/repos-list.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    GithubContainerComponent,
    SearchUserFormComponent,
    UserDetailsComponent,
    ReposListComponent
  ]
})
export class GithubModule {}
