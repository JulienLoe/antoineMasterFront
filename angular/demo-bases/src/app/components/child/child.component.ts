import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
maVariable = "test texte"

@Input('varA')
trucBidule = "valeur par défaut"
}
