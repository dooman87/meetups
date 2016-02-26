import {Component} from 'angular2/core';
import {LoginFormComponent} from './login-form.component'

@Component({
    selector: 'my-app',
    template: `
        <div class="row">
            <div class="col-md-offset-4 col-md-4">
                <login-form></login-form>
            </div>
        </div>
    `,
    directives: [LoginFormComponent]
})
export class AppComponent { }
