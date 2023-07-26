import { Component } from '@angular/core';
import { DOGS } from '../mock-dogs';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent {
  dogs = DOGS;
}
