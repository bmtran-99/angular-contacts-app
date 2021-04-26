import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact';
import { FavouritesService } from 'src/app/services/favourites.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts:Contact[] = [];
  constructor(private contactService: ContactService, private favouriteService: FavouritesService) { }

  ngOnInit(): void {
    this.contactService.getContacts().subscribe(contacts =>
       this.contacts = contacts);
  }

  addToFavourites(item: Contact) {
    this.favouriteService.addFavourite(item);
  }
}
