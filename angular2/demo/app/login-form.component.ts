import {Component, EventEmitter, Input} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Login} from './login'
import {EmailValidatorDirective} from './email-validator.directive'
import {UserService} from './user.service'
import {User} from './user'


@Component({
    selector: 'demo-login-form',
    templateUrl: 'app/login-form.component.html',
    styles: [
        `.login-form-wrapper {
            padding: 1.25rem;
            margin-top: 1.25rem;
            margin-bottom: 1.25rem;
            border: 1px solid #eee;
            border-radius: .25rem;
        }`
    ],
    directives: [EmailValidatorDirective],
})
export class LoginFormComponent{
    model = new Login();
    invalidLogin = false;

    constructor(private _userService: UserService) {}

    doLogin() {
        this._userService.login(this.model)
            .subscribe(
                null,
                () => {this.invalidLogin = true;}
            );
    }
}