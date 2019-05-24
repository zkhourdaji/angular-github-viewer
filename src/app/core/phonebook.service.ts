import { Injectable } from '@angular/core';
import { IContact } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PhonebookService {
  public contacts: IContact[] = [];

  getContacts(): IContact[] {
    return this.contacts;
  }

  addContact(name: string, phone: string): void {
    const newId = this.getNewId();
    const newContact = {
      name: name,
      phone: phone,
      id: newId
    };
    this.contacts.push(newContact);
    console.log(this.contacts);
  }

  editContact(id: number, name: string, phone: string): void {
    let existingContact = this.contacts.find(c => c.id == id);
    existingContact.name = name;
    existingContact.phone = phone;
  }

  deleteContact(id): void {
    console.log('deleting contact with id: ' + id);
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

  getContactById(id: number): IContact {
    return this.contacts.find(c => c.id == id);
  }
}
