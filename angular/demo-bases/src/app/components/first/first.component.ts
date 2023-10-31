import { Component, ViewEncapsulation } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-first',
  template: `<form  [formGroup]="form" (ngSubmit)="onSubmit()">
  <label for="emailInput">Inscrivez-vous !</label>
  <input type="text" formControlName="nom">
<input type="text" formControlName="prenom">
<input type="text" formControlName="age">
  <button type="submit">OK!</button>
</form>`, 
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  // public nom: string;
  
  // public age: string;

  // constructor(@Inject('nom') nom: string, @Inject('prenom') prenom: string, @Inject('age') age: string  ) {
  //   this.nom = nom
  //   this.prenom = prenom
  //   this.age = age
  //  }
  
  

  monTexte = "je suis la valeur";
  url = "https://upload.wikimedia.org/wikipedia/commons/4/4c/Bus.svg"
  sayHello(){
    console.log("Hello")
  }

  form: FormGroup = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    age: new FormControl('')
  });

  constructor() {}

  
  onSubmit() {
    const formData = this.form.value;
  console.log(formData)
  }

  
}
