import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-user-details',
  templateUrl: './user.details.component.html'
})
export class UserDetailsComponent {
  @Input() user: IUser;
}
