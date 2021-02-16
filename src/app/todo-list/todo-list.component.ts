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
  
  isCompleted: boolean = false;

  constructor(
    private render: Renderer2
  ) { }

  ngOnInit(): void {
  }

  onToggle(event: any, todo: Todo) {
    var el = event?.currentTarget?.querySelectorAll('label')[0];

    if(!todo.isCompleted) {
      this.render.setStyle(el, 'text-decoration', 'line-through');
      this.render.setStyle(el, 'filter', 'opacity(50%)');
      todo.isCompleted = true;
    } else {
      this.render.setStyle(el, 'text-decoration', 'none');
      this.render.setStyle(el, 'filter', 'opacity(100%)');
      todo.isCompleted = false;
    }

  }

  removeItem(todo: Todo) {
    this.deleteTodo.emit(todo);
  }
}