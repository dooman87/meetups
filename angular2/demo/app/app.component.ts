import {Component, ViewChild, OnInit} from 'angular2/core';
import {LoginFormComponent} from './login-form.component'
import {DashboardComponent} from './dashboard.component'
import {NavComponent} from './nav.component'
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {UserService} from './user.service';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'my-app',
    template: `
        <nav></nav>

        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [LoginFormComponent, NavComponent, ROUTER_DIRECTIVES],
    providers: [UserService, HTTP_PROVIDERS]
})
@RouteConfig([
    {path: '/', name: 'Login', component: LoginFormComponent, useAsDefault: true},
    {path: '/dashboard', name: 'Dashboard', component: DashboardComponent}
])
export class AppComponent {
    @ViewChild(NavComponent)
    private nav: NavComponent;

    constructor(private userService: UserService,
                private _router:Router) {
        userService.loginSource$.subscribe(
            user => {this.onLogin(user);}
        );
    }

    onLogin(user) {
        this.nav.updateUser(user);
        this._router.navigateByUrl('/dashboard');
    }
}

