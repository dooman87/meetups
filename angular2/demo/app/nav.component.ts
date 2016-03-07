import {Component} from 'angular2/core';
import {User} from './user'

@Component({
    selector: 'demo-nav',
    template: `
        <div class="navbar navbar-light bg-faded">
            <a class="navbar-brand" href="#">NG2 DEMO</a>
            <p class="pull-xs-right navbar-brand">
                Good evening, {{username | uppercase}}
            </p>
        </div>
    `
})
export class NavComponent {
    private username = 'Anonymous';

    updateUser(user: User) {
        this.username = user.firstname + ' ' + user.lastname;
    }
}

