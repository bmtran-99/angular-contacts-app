import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  private favouriteList: Contact[] = [];
  constructor() { }

  getFavouriteContacts() {
    return this.favouriteList;
  }

  addFavourite(item: Contact) {
    this.favouriteList.push(item);
  }

  deleteFavourite(item: Contact) {
    this.favouriteList = this.favouriteList.filter(i => i.id !== item.id);
  }
}
