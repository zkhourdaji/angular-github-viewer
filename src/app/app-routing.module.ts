import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchUserFormComponent } from './github/search-user-form/search-user-form.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PhonebookComponent } from './phonebook/phonebook.component';
import { GithubContainerComponent } from './github/github-container.component';

const appRoutes: Routes = [
  { path: 'github', component: GithubContainerComponent },
  { path: 'phonebook', component: PhonebookComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
