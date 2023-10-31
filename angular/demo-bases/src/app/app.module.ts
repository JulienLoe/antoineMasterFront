import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './components/first-component/demo.component';
import { DemoBisComponent } from './demo-bis/demo-bis.component';
import { DemoTerComponent } from './components/demo-ter/demo-ter.component';
import { DemoQuadComponent } from './components/demo-quad/demo-quad.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConditionalComponent } from './components/conditional/conditional.component';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { ChildComponent } from './components/child/child.component';
import { FormContactComponent } from './exo4/form-contact/form-contact.component';
import { ListingContactComponent } from './exo4/listing-contact/listing-contact.component';
import { ContactDeleteComponent } from './exo4/contact-delete/contact-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DemoBisComponent,
    DemoTerComponent,
    DemoQuadComponent,
    FirstComponent,
    SecondComponent,
    ConditionalComponent,
    FormGroupComponent,
    ChildComponent,
    FormContactComponent,
    ListingContactComponent,
    ContactDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
