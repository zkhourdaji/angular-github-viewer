import { Component } from '@angular/core';
import { IContact } from '../shared/interfaces';
import { PhonebookService } from './phonebook.service';

@Component({
  templateUrl: './phonebook.component.html'
})
export class PhonebookComponent {
  name: string;
  phone: string;

  constructor(private phonebookService: PhonebookService) {}

  addContact(): void {
    this.phonebookService.addContact(this.name, this.phone);
  }

  //contacts: IContact[] = this.phonebookService.getContacts();
}
