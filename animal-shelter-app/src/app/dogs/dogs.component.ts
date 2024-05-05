import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  displayedColumns: string[] = ["name", "level", "isHouseBroken", "underHumaneInvestigation", "location", "kennelNumber", "edit", "delete"];

  showButtonForDog: any;

  constructor(private dogService: DogService, private router: Router) {}

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

  clickEdit(event: MouseEvent, dog: any){
    event.stopPropagation();
    this.router.navigate([`/dogs/${dog.id}/details`, {edit: true}]);
  }

  clickDelete(event: MouseEvent, dog: any)
  {
    event.stopPropagation();
    if(confirm("Are you sure you want to delete " + dog.name )){
      this.dogService.deleteDog(dog.id).subscribe(()=> {this.getDogs()});
    }
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
