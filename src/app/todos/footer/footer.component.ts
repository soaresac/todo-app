import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent {

  @Output() filter: EventEmitter<any> = new EventEmitter<any>();
  @Output() clearTodos: EventEmitter<any> = new EventEmitter<any>();
  @Input() count: number = 0;
  
  constructor() { }

  clickedFilter(filter: string) {
    if(filter == 'clear') {
      this.clearTodos.emit();
    } else {
      this.filter.emit(filter);
    }
  }

  recebeContagem(count: number) {
    this.count = count;
  }
}