import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dog } from '../dog';
import { Level } from '../dog';
import { Sex } from '../dog';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dog-details',
  templateUrl: './dog-details.component.html',
  styleUrls: ['./dog-details.component.css']
})
export class DogDetailsComponent {
  constructor(
    private route: ActivatedRoute,
    private dogService: DogService,
    private location: Location
  ) {}
  
  dog: Dog | undefined;
  editMode = false;
  isHouseBroken = false;
  underHumaneInvestigation = false;
  selectedSex: string = "Unknown";
  selectedLevel: string = "Blue";

  ngOnInit(): void{
    this.getDog();
  }

  getDog(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dogService.getDog(id).subscribe(dog => this.dog = dog);
  }

  updateDog()
  {
    const dog = this.createDog();
    console.log(dog);
    this.dogService.updateDog(dog.id!, dog)
      .subscribe(dog => this.dog = dog)
    this.editMode = false;
  }

  toggleEditMode(): void{
    this.editMode = !this.editMode;
    if(this.dog != null)
    {
      this.selectedSex = this.dog.sex;
      this.selectedLevel = this.dog.level;
      this.isHouseBroken = this.dog.isHouseBroken;
      this.underHumaneInvestigation = this.underHumaneInvestigation;
    }
  }

  createDog(): Dog
  {
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const dog: Dog = {
      id: this.dog?.id,
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
