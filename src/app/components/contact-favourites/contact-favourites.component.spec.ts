import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFavouritesComponent } from './contact-favourites.component';

describe('ContactFavouritesComponent', () => {
  let component: ContactFavouritesComponent;
  let fixture: ComponentFixture<ContactFavouritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFavouritesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
