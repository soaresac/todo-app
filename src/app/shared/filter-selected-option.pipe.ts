import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/todo';

@Pipe({ name: 'filterSelectedOption', pure: false})
export class FilterSelectedOption implements PipeTransform {
    transform(todos: Todo[], filtro: string) {
        if(filtro == 'completed') {
            return todos.filter(todo => todo.isCompleted);
        } else if(filtro == 'actives') {
            return todos.filter(todo => !todo.isCompleted);
        } else {
            return todos;
        }
    }
}