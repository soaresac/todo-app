import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppearOnHoverModule } from '../shared/appear-on-hover.module';
import { FilterActives } from './footer/filter-actives.pipe';
import { FooterComponent } from './footer/footer.component';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { SearchComponent } from './search/search.component';
import { FilterSelectedOption } from './todo-list/filter-selected-option.pipe';
import { TodoListComponent } from './todo-list/todo-list.component';


@NgModule({
    declarations: [
        NewTodoComponent, 
        TodoListComponent,
        FooterComponent, 
        FilterActives,
        FilterSelectedOption,
        SearchComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        AppearOnHoverModule
    ],
     exports: [ 
         NewTodoComponent, 
         TodoListComponent, 
         FooterComponent,
         FilterSelectedOption,
         SearchComponent
     ]
})

export class TodoModule { }