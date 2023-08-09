import { Component } from '@angular/core';
import { Dog } from '../dog';
import { Level } from '../dog';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent {
  dogs: Dog[] = [];
  displayedColumns: string[] = ["name", "level", "isHouseBroken", "underHumaneInvestigation", "location", "kennelNumber", "edit"];
  showButtonForDog: any;

  constructor(private dogService: DogService) {}

  onRowMouseEnter(dog: any) {
    this.showButtonForDog = dog;
  }

  onRowMouseLeave() {
      this.showButtonForDog = null;
  }

  ngOnInit(): void {
    this.getDogs();
  }

  getDogs(): void {
    this.dogService.getDogs()
      .subscribe(dogs => this.dogs = dogs);
  }

  getFontColor(value: Level): string{
    switch(value){
      case Level.Blue:
        return "blue";
      case Level.BlueGreen:
        return "teal";
      case Level.Green:
        return "green";
      case Level.Yellow:
        return "yellow";
      case Level.Red:
        return "red";
    }
  }
}
