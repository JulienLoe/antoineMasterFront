import { Component } from '@angular/core';


@Component({
  selector: 'app-conditional',
  templateUrl: './conditional.component.html',
  styleUrls: ['./conditional.component.css']
})
export class ConditionalComponent {
  estVrai = true
  age = 11
  mesPrenoms = ["John", "Helene"];

  incrementAge(){
    this.age += 1
    this.mesPrenoms.push("Nouveau" + this.age) 
  }

  firstNameInputHandler(){
    
  }
}
