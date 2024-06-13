import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams  } from '@angular/common/http';
import {BoardItem} from './board';

@Injectable({
  providedIn: 'root',
})
export class BoardService {

  private boardUrl = 'https://localhost:7180/api/board';
  constructor(private http: HttpClient) { }

  getBoard(selectedDate: Date) : Observable<BoardItem[]> {
    const date = this.toFormatedLocaleDateString(selectedDate);
    const params = new HttpParams({fromString: `date=${date}`});
    
    return this.http.get<BoardItem[]>(this.boardUrl, { params: params });
  }

  toFormatedLocaleDateString(date: Date) : string
  { 
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  }

}
