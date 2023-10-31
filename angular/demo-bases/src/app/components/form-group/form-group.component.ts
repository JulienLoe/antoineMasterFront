import { Component } from '@angular/core';

type Car =  {
  id: number;
  marque: string;
model: string ;
origine: string
}

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})


export class FormGroupComponent {

  
  id: number = 0
  marque: string = ''
  model: string = ''
  origine: string = ''

  

  
   

  tabCar: Car [] = []

  color: string = ""

  onSubmit() {
    const car = {
      id: this.id++,
      marque : this.marque,
      model : this.model,
      origine : this.origine
    }
    this.tabCar.push(car)
    
  }

  onView(id: number){
    this.tabCar.splice(id, 1)
  }

  getStyle(id: number){
    return  {'color': id % 2 == 1  ? 'green' : 
    'black'}
  }
}
