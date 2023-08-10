import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dog } from '../dog';
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

  ngOnInit(): void{
    this.getDog();
  }

  getDog(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dogService.getDog(id).subscribe(dog => this.dog = dog);
  }
}
