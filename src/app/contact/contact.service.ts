import {Injectable} from '@angular/core';
import {Contact} from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[];

  constructor() {
    this.contacts = [];
    this.contacts.push(new Contact('Valtteri', 'Kettunen'));
    this.contacts.push(new Contact('En', 'Muista'));
    this.contacts.push(new Contact('Joku', 'Random'));
  }

  getContacts(): Contact[] {
    return this.contacts;
  }

}
