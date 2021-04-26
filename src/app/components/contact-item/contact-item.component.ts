import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Contact } from '../../models/contact';
import { Router, ActivatedRoute } from '@angular/router';
import { TooltipPosition } from '@angular/material/tooltip';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FavouritesService } from 'src/app/services/favourites.service';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {
  @Input() item: Contact = new Contact();
  @Output() addFavourite: EventEmitter<Contact> = new EventEmitter<Contact>();
  @Output() deleteFavourite: EventEmitter<Contact> = new EventEmitter<Contact>();

  tooltipPosition: TooltipPosition = 'above';
  durationInSeconds = 5;

  constructor(private router: Router, private snackBar: MatSnackBar, private service: FavouritesService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onClick(item: Contact) {
    if (this.route.snapshot.routeConfig?.path == 'contacts')
      this.router.navigate(['/contacts', item.id]);
    if (this.route.snapshot.routeConfig?.path == 'favourites')
      this.router.navigate(['/favourites', item.id]);
  }

  addToFavourites(contact: Contact) {
    if (!this.service.getFavouriteContacts().includes(contact)) {
      this.addFavourite.emit(contact);
      this.snackBar.open(`${contact.name} has became a close friend :)`, 'Perfect!', {duration: this.durationInSeconds * 1000});
    }
    else {
      this.snackBar.open(`${contact.name} is already a close friend :)`, 'I see..', {duration: this.durationInSeconds * 1000});
    }
  }

  deleteContact(contact: Contact) {
    this.deleteFavourite.emit(contact);
  }

  isContactsRoute() {
    if (this.route.snapshot.routeConfig?.path == 'contacts')
      return true;
    return false;
  }
}
