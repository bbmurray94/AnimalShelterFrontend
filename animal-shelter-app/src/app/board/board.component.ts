import { Component } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {BoardItem} from '../board';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent {

  board: BoardItem[] = [];
  displayedColumns: string[] = ["location","name", "level", "HB", "HI", "morning", "afternoon", "evening"];
  selectedDate = new Date();


  constructor(private boardService: BoardService, 

  ) {}
  
  ngOnInit(): void {
    this.selectedDate = new Date();
    this.getBoard(this.selectedDate);
    console.log(this.selectedDate);
  }

  getBoard(selectedDate: Date): void {
    this.boardService.getBoard(selectedDate).subscribe(board => this.board = board);
  }

  addEvent(event: MatDatepickerInputEvent<Date>){
    if(event.value != null){
      this.selectedDate = event.value;
      this.boardService.getBoard(this.selectedDate).subscribe(board => this.board = board);
    }
  }

}
