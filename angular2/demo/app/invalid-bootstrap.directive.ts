import {Directive, ElementRef, Input} from 'angular2/core';

/**
 * Directive automatically applied to Angular forms that sets CSS classes
 * based on control status (valid/invalid/dirty/etc).
 */
@Directive({
    selector: '[form-group]'
    //host: {
    //    '[class.has-error]': 'ngClassInvalid'
    //}
})
export class InvalidBootstrapDirective {
    constructor(private el: ElementRef) {
        el.nativeElement.style.backgroundColor = 'yellow';
    }

    get ngClassInvalid(): boolean {
        return true;
    }
}