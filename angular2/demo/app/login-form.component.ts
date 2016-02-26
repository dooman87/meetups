import {Component} from 'angular2/core';
import {Login} from './login'
import {InvalidBootstrapDirective} from './invalid-bootstrap.directive'

@Component({
    selector: 'login-form',
    templateUrl: 'app/login-form.component.html',
    directives: [InvalidBootstrapDirective]
})
export class LoginFormComponent{
    model = new Login();

    doLogin() {
        window.alert(this.model.toString());
    }
}