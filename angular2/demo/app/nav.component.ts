import {Component} from 'angular2/core';

@Component({
    selector: 'nav',
    template: `
        <div class="navbar navbar-light bg-faded">
            <a class="navbar-brand" href="#">NG2 DEMO</a>
            <p class="pull-xs-right navbar-brand">
                Good evening, {{username}}
            </p>
        </div>
    `
})
export class NavComponent {
    private username = 'Anonymous';
}
