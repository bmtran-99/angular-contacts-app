import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { FavouritesService } from 'src/app/services/favourites.service';

@Component({
  selector: 'app-contact-favourites',
  templateUrl: './contact-favourites.component.html',
  styleUrls: ['./contact-favourites.component.css']
})
export class ContactFavouritesComponent implements OnInit {
  favourites: Contact[] = []; 
  constructor(private service: FavouritesService) { }

  ngOnInit(): void {
    this.favourites = this.service.getFavouriteContacts();
  }

  deleteContact(item: Contact) {
    this.favourites = this.favourites.filter(i => i.id !== item.id);
    this.service.deleteFavourite(item);
  }

  isEmpty() {
    return this.favourites.length == 0;
  }
}
