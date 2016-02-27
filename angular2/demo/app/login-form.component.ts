import {Component} from 'angular2/core';
import {Login} from './login'
import {EmailValidatorDirective} from "./email-validator.directive"

@Component({
    selector: 'login-form',
    templateUrl: 'app/login-form.component.html',
    directives: [EmailValidatorDirective]
})
export class LoginFormComponent{
    model = new Login();

    doLogin() {
        window.alert(this.model.toString());
    }
}