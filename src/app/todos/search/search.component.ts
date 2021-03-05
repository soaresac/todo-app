import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators'


@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
    @Input() value: string = '';
    @Output() search = new EventEmitter<string>();

    subject = new Subject<string>();
    
    ngOnInit(): void {
        this.subject
        .pipe(debounceTime(300))
        .subscribe(filter => {
            this.search.emit(filter)
        });
    }

    ngOnDestroy(): void {
        this.search.unsubscribe();
         
    }
    
}