import { Component, Input } from '@angular/core';
import { IRepo } from 'src/app/shared/interfaces';

@Component({
    selector: 'app-repos-list',
    templateUrl: './repos-list.component.html'
})
export class ReposListComponent {

    @Input() repos: IRepo[];

};