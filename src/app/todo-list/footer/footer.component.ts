import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../todo/todo';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  @Input() todos: Todo[] = [];
  @Output() filter: EventEmitter<any> = new EventEmitter<any>();
  @Output() remove: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

  showActives() {
    this.filter.emit('actives');
  }

  showAll() {
    this.filter.emit('all');
  }

  showCompleted() {
    this.filter.emit('completed');
  }

  clearCompleted() {
    const todosToRemove = this.todos.filter(todo => todo.isCompleted)
    this.remove.emit(todosToRemove);
  }

}
