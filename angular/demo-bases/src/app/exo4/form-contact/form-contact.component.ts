import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

type Contact =  {
  id: number;
  nom: string ;
prenom: string ;
age: number
}

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent {


  id: number = 0
  nom: string = ''
  prenom: string = ''
  age: number = 0

  tabContact: Contact [] = []

  @Output('contact')
  unEvenement = new EventEmitter<Contact>()

  onSubmit(event: Event) {
    const contact = {
      id: this.id++,
      nom : this.nom,
      prenom : this.prenom,
      age : this.age
    }
    this.tabContact.push(contact)
    this.unEvenement.emit(contact)
  }

  
}
