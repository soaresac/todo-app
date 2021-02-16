import { Component, Input, OnInit, Output, Renderer2, EventEmitter } from '@angular/core';
import { Todo } from '../todo/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {
  
  @Input() todos: Todo[] = [];
  @Output() deleteTodo: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteTodos: EventEmitter<any> = new EventEmitter<any>();
  @Input() filter: string = 'all';
  
  isCompleted: boolean = false;

  constructor(
    private render: Renderer2
  ) { }

  ngOnInit(): void {
  }

  onToggle(event: any, todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
  }

  removeItem(todo: Todo) {
    this.deleteTodo.emit(todo);
  }

  mudaFiltro(value: string) {
    this.filter = value;
  }

  removeCompleted(todos: Todo[]) {
    this.deleteTodos.emit(todos);
  }
}