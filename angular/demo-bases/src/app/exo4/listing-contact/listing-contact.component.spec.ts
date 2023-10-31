import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingContactComponent } from './listing-contact.component';

describe('ListingContactComponent', () => {
  let component: ListingContactComponent;
  let fixture: ComponentFixture<ListingContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListingContactComponent]
    });
    fixture = TestBed.createComponent(ListingContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
