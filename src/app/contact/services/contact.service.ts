import {Injectable} from '@angular/core';
import {Contact} from '../contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[];

  constructor() {
    this.contacts = [];
    this.contacts.push(new Contact(1, 'Valtteri', 'Kettunen'));
    this.contacts.push(new Contact(2, 'En', 'Muista'));
    this.contacts.push(new Contact(3, 'Joku', 'Random'));
  }

  getContacts(): Contact[] {
    return this.contacts;
  }

}
