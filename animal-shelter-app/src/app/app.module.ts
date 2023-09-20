import { NgModule } from '@angular/core';
import {NgFor} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table'
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';  
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DogsComponent } from './dogs/dogs.component';
import { AppRoutingModule } from './app-routing.module';
import { DogDetailsComponent } from './dog-details/dog-details.component';
import { DogAddComponent } from './dog-add/dog-add.component';

@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    DogDetailsComponent,
    DogAddComponent
  ],
  imports: [
    NgFor,
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
