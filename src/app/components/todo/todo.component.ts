import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  items = [2,2,2,2,1,1,1,1,0,0,0,0]

  constructor() { }

  ngOnInit(): void {
  }

}
