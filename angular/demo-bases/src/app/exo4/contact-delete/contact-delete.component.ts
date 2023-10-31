import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
type Contact =  {
  id: number;
  nom: string ;
prenom: string ;
age: number
}

@Component({
  selector: 'app-contact-delete',
  templateUrl: './contact-delete.component.html',
  styleUrls: ['./contact-delete.component.css']
})
export class ContactDeleteComponent {

  @Output() 
  delete = new EventEmitter<Contact>();

onDelete() {
  this.delete.emit();
}
}
