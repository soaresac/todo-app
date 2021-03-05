import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from './core/todo/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  title = 'todo-app';

  todos: Todo[] = [];
  @Output() count: EventEmitter<number> = new EventEmitter<number>();
  filter: string = "all";
  text: string = "";

  ngOnInit() {}

  setFilter(filtro: string) {
    this.filter = filtro;
  }

  setTexto(filtro: string) {
    this.text = filtro;
  }

  setTodos(todos: Todo[]) {
    this.todos = todos;
    this.count.emit(this.todos.filter(todo => todo.isCompleted).length);
  }

  removeTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
  }

  removeAllCompleted() {
    const todosToRemove = this.todos.filter(todo => todo.isCompleted);
    todosToRemove.forEach(todo => this.removeTodo(todo));
  }
}