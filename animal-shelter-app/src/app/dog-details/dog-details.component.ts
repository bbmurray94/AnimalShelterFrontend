import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

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
  
  id: number = 0;

  ngOnInit(): void{
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }


}
