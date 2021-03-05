import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../../core/todo/todo';

@Pipe({ name: 'filterSelectedOption', pure: false})
export class FilterSelectedOption implements PipeTransform {
    transform(todos: Todo[], filtro: string, texto: string) {
        texto = texto?.trim().toLowerCase();
        let filteredByStatus: Todo[] = [];

        if(filtro == 'all') {
            filteredByStatus = todos;
        } else {
            filteredByStatus = todos.filter(todo => {
                 return (filtro == 'completed' ? todo.isCompleted : !todo.isCompleted)
            });
        }

        return texto ? filteredByStatus.filter(todo => todo.text.toLowerCase().includes(texto)) : filteredByStatus;

    }
}