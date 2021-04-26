import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { DetailService } from 'src/app/services/detail.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  item: Contact = new Contact();

  constructor(private route: ActivatedRoute, private service: DetailService, private router: Router) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id') || '');
    this.service.getUser(id).subscribe(contact => this.item = contact);
  }

  onClick() {
    let url = this.route.snapshot.url;
    let path = url[0].path;
    
    if (path == 'contacts')
      this.router.navigate(['/contacts']);
    if (path == 'favourites')
      this.router.navigate(['/favourites']);
  }

}
