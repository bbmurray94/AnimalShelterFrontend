import { Component } from '@angular/core';
import { Dog } from '../dog';
import { Level } from '../dog';
import { Sex } from '../dog';

@Component({
  selector: 'app-dog-add',
  templateUrl: './dog-add.component.html',
  styleUrls: ['./dog-add.component.css']
})
export class DogAddComponent {
  isHouseBroken = false;
  underHumaneInvestigation = false;
  selectedLevel: string = "Blue";
  selectedSex: string = "Unknown";

  addDog()
  {
    console.log(this.createDog());
    //this.createDog
    //call addDog request
  }

  createDog(): Dog
  {
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const dog: Dog = {
      name: (document.getElementById('name') as HTMLInputElement)?.value,
      age: parseInt((document.getElementById('age') as HTMLInputElement)?.value),
      breed: (document.getElementById('breed') as HTMLInputElement)?.value,
      description: (document.getElementById('description') as HTMLInputElement)?.value,
      level: this.selectedLevel as Level,
      sex: this.selectedSex as Sex,
      location: (document.getElementById('location') as HTMLInputElement)?.value,
      kennelNumber: (document.getElementById('kennelNumber') as HTMLInputElement)?.value,
      isHouseBroken: this.isHouseBroken,
      underHumaneInvestigation: this.underHumaneInvestigation
    }
    return dog;
  } 
}
