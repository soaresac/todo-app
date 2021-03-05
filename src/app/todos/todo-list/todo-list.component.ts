import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../core/todo/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {
  
  @Input() todos: Todo[] = [];
  @Output() deleteTodo: EventEmitter<any> = new EventEmitter<any>();
  @Input() filter: string = 'all';
  @Input() text: string = '';
  
  isCompleted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(event: any, todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
  }

  removeItem(todo: Todo) {
    this.deleteTodo.emit(todo);
  }

}