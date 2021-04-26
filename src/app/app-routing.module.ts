import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from '../app/components/contact-details/contact-details.component';
import { ContactFavouritesComponent } from './components/contact-favourites/contact-favourites.component';
import { ContactsComponent } from './components/contacts/contacts.component';

const routes: Routes = [
  { path: '', redirectTo: 'contacts', pathMatch: 'full'},
  { path: 'favourites', component: ContactFavouritesComponent},
  { path: 'favourites/:id', component: ContactDetailsComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'contacts/:id', component: ContactDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
