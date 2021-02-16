import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Todo } from '../todo';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.sass']
})
export class NewTodoComponent implements OnInit {

  todoForm!: FormGroup;
  @Input() todos: Todo[] = [];
  @Output() newTodo: EventEmitter<any> = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      todoText: ['']
    });
  }

  createNewTodo () {
    const newTodoText = this.todoForm.get('todoText')?.value;

    if(newTodoText) {
      const ids = this.todos.map(function(o) { return o.id as number});
      const max = Math.max(...ids);

      const newTodo: Todo[] = [{
        id: !this.todos.length ? 0 : (max + 1), 
        text: newTodoText, 
        isCompleted: false
      }]
    
      this.todos = newTodo.concat(this.todos);

      //envia valor
      this.newTodo.emit(this.todos);

      //reseta formulário
      this.todoForm.reset();
    }
  }

}
