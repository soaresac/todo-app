import { NgModule } from '@angular/core';
import { AppearOnHoverDirective } from './appear-on-hover.directive';


@NgModule({
    declarations: [ AppearOnHoverDirective ],
    exports: [ AppearOnHoverDirective ]
})
export class AppearOnHoverModule { }