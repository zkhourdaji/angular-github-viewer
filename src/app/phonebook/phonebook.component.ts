import { Component } from '@angular/core';
import { IContact } from '../shared/interfaces';
import { PhonebookService } from '../core/phonebook.service';

@Component({
  templateUrl: './phonebook.component.html'
})
export class PhonebookComponent {
  name: string;
  phone: string;

  constructor(public phonebookService: PhonebookService) {}

  editMode: boolean = false;
  editId: number;

  edit(id: number): void {
    this.editMode = true;
    this.editId = id;
    let editingContact = this.phonebookService.getContactById(id);
    this.name = editingContact.name;
    this.phone = editingContact.phone;
  }

  onAddOrEdit(editing: boolean): void {
    editing
      ? this.phonebookService.editContact(this.editId, this.name, this.phone)
      : this.phonebookService.addContact(this.name, this.phone);

    this.editMode = false;
    this.phone = '';
    this.name = '';
  }
}
