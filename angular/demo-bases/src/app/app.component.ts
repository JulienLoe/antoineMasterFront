import { Component, Input } from '@angular/core';

type Contact =  {
  id: number;
  nom: string ;
prenom: string ;
age: number
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input({
    alias: 'contact',
    required: true
  })

  title = 'demo-bases';

  variableParent = "John"

  tabContact: Contact [] = []

  

  changeVariable(contact: Contact) {
    this.tabContact.push(contact)
    console.log(this.tabContact)
  }
}
