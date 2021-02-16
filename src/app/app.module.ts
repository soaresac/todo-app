import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewTodoComponent } from './todo/new-todo/new-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AppearOnHoverModule } from './shared/appear-on-hover.module';
import { FooterComponent } from './todo-list/footer/footer.component';
import { FilterActives } from './shared/filter-actives.pipe';
import { FilterSelectedOption } from './shared/filter-selected-option.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewTodoComponent,
    TodoListComponent,
    FooterComponent,
    FilterActives,
    FilterSelectedOption
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppearOnHoverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
