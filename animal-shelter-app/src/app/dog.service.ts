import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dog } from './dog';
import { DOGS } from './mock-dogs';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  private dogsUrl = 'https://localhost:7180/api/dogs/';
  constructor(private http: HttpClient) { }

  getDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.dogsUrl);
  }
}
