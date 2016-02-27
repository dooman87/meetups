import {Component} from 'angular2/core';
import {Login} from './login'
import {HTTP_PROVIDERS} from 'angular2/http';
import {EmailValidatorDirective} from './email-validator.directive'
import {UserService} from './user.service'

@Component({
    selector: 'login-form',
    templateUrl: 'app/login-form.component.html',
    directives: [EmailValidatorDirective],
    providers: [UserService, HTTP_PROVIDERS]
})
export class LoginFormComponent{
    model = new Login();
    invalidLogin = false;

    constructor(private _userService: UserService) {}

    doLogin() {
        this._userService.login(this.model)
            .subscribe(
                user => { window.alert(JSON.stringify(user)) },
                error => { this.invalidLogin = true; }
            );
    }
}