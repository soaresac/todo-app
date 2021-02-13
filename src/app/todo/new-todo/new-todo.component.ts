import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../todo';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.sass']
})
export class NewTodoComponent implements OnInit {

  todoForm!: FormGroup;
  todos: Todo[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      todoText: ['', [Validators.required]]
    });
  }

  createNewTodo () {
    const newTodoText = this.todoForm.get('todoText')?.value;

    let newTodo = {
      id:0, text: newTodoText, isCompleted: false
    }
   
    this.todos.push(newTodo);

    console.log("Created " + newTodo + " " + this.todos);
    this.todoForm.reset();
  }

}
