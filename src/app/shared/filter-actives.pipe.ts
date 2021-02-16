import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/todo';

@Pipe({ name: 'filterActives', pure: false})
export class FilterActives implements PipeTransform {
    transform(todos: Todo[]) {
         return (todos.filter(todo => !todo.isCompleted)).length;
    }
}