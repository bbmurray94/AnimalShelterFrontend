import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Dog } from '../dog';
import { Level } from '../dog';
import { Sex } from '../dog';
import { DogsService } from '../dogs.service';

@Component({
  selector: 'app-dog-add',
  templateUrl: './dog-add.component.html',
  styleUrls: ['./dog-add.component.css']
})
export class DogAddComponent {
  constructor(private dogService: DogsService,
              private router: Router
    ) {}
  isHouseBroken = false;
  underHumaneInvestigation = false;
  selectedLevel: string = "Blue";
  selectedSex: string = "Unknown";
  dog: Dog | undefined;

  addDog()
  {
    const dog = this.createDog();
    console.log(dog);
    this.dogService.addDog(dog)
      .subscribe(({
        complete: () => { 
          this.router.navigate(['/dogs'])
        }
      }));
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

