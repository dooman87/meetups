import {Component} from 'angular2/core'

@Component({
    selector: 'dashboard',
    template:`
        <div class="jumbotron">
            <h1 class="display-3">Answer is 42</h1>
            <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
        </div>
    `
})
export class DashboardComponent {}