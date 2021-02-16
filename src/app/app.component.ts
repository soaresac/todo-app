import { Component, OnInit, Output } from '@angular/core';
import { Todo } from './todo/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  title = 'todo-app';

  todos: Todo[] = [];

  ngOnInit() {
  }

  recebeTodos(todos: Todo[]) {
    this.todos = todos;
  }

  removeTodos(todo: Todo) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
  }
}