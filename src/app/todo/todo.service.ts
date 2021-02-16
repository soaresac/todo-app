import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({ providedIn: 'root'})
export class TodoService {

    constructor() {
    }

    public products = [];
    
    getTodos():Todo[] {
        return [] as Todo[];
    }

    removeTodo(todo:Todo[]) {
        //this.todos = this.todos.filter(t => t.id !== todo.id);
    }
}