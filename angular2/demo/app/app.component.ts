import {Component, ViewChild} from 'angular2/core';
import {LoginFormComponent} from './login-form.component'
import {NavComponent} from './nav.component'

@Component({
    selector: 'my-app',
    template: `
        <nav></nav>

        <div class="row">
            <div class="col-sm-offset-3 col-md-offset-4 col-md-4 col-sm-6">
                <div style="padding: 1.25rem; margin-top: 1.25rem; margin-bottom: 1.25rem; border: 1px solid #eee; border-radius: .25rem;">
                    <login-form (loggedIn) = "onLogin($event)"></login-form>
                </div>
            </div>
        </div>
    `,
    directives: [LoginFormComponent, NavComponent]
})
export class AppComponent {
    @ViewChild(NavComponent)
    private nav: NavComponent;

    onLogin(user) {
        this.nav.updateUser(user)
    }
}
