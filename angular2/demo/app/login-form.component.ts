import {Component, EventEmitter, Output} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Login} from './login'
import {EmailValidatorDirective} from './email-validator.directive'
import {UserService} from './user.service'
import {User} from './user'

@Component({
    selector: 'login-form',
    templateUrl: 'app/login-form.component.html',
    directives: [EmailValidatorDirective],
    providers: [UserService, HTTP_PROVIDERS]
})
export class LoginFormComponent{
    model = new Login();
    invalidLogin = false;
    @Output() loggedIn: EventEmitter<User> = new EventEmitter();

    constructor(private _userService: UserService) {}

    doLogin() {
        this._userService.login(this.model)
            .subscribe(
                user => { this.loggedIn.emit(user) },
                error => { this.invalidLogin = true; }
            );
    }
}