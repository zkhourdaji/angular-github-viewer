import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchUserFormComponent } from './SearchUserForm/search-user-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [SearchUserFormComponent],
  declarations: [SearchUserFormComponent]
})
export class GithubModule {}
