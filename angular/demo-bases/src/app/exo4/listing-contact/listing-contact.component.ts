import { Component,Input } from '@angular/core';

type Contact =  {
  id: number;
  nom: string ;
prenom: string ;
age: number
}

@Component({
  selector: 'app-listing-contact',
  templateUrl: './listing-contact.component.html',
  styleUrls: ['./listing-contact.component.css']
})
export class ListingContactComponent {


  @Input('listContact')
  tabContact: Contact [] = []

  delete(i:number) {
    this.tabContact.splice(i, 1)
  }
 
}
