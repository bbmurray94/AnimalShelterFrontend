import { Component } from '@angular/core';
import { Dog } from '../dog';
import { DogService } from '../dog.service';
import { DOGS } from '../mock-dogs';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent {
  dogs: Dog[] = [];

  constructor(private dogService: DogService) {}

  ngOnInit(): void {
    this.getDogs();
  }

  getDogs(): void {
    this.dogService.getDogs()
      .subscribe(dogs => this.dogs = dogs);
  }
}
