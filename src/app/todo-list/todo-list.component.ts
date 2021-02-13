import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todo/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {
  
  @Input() todos: Todo[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
