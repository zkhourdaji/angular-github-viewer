import { Injectable } from '@angular/core';
import { IContact } from './IContact';

@Injectable({
  providedIn: 'root'
})
export class PhonebookService {
  private contacts: IContact[] = [];

  getContacts(): IContact[] {
    return this.contacts;
  }

  addContact(name: string, phone: string): void {
    //console.log(name + ' ' + phone);
    console.log(this.contacts);
    const newId = this.getNewId();
    const newContact = {
      name: name,
      phone: phone,
      id: newId
    };
    this.contacts.push(newContact);
  }

  deleteContact(id): void {
    this.contacts = this.contacts.filter(c => c.id !== id);
  }

  getNewId(): number {
    if (this.contacts.length > 0) {
      const lastContact = this.contacts[this.contacts.length - 1];
      return lastContact.id + 1;
    } else {
      return 0;
    }
  }
}
