import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogsComponent } from './dogs/dogs.component';
import { DogDetailsComponent } from './dog-details/dog-details.component';
import { DogAddComponent } from './dog-add/dog-add.component';

const routes: Routes = [
  { path: 'dogs', component: DogsComponent },
  { path: 'dogs/:id/details', component: DogDetailsComponent},
  { path: 'dogs/add', component: DogAddComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
