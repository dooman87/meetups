import {Injectable} from 'angular2/core'
import {Login} from './login'
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {User} from './user'

@Injectable()
export class UserService {
    constructor(private http: Http) {}

    login (credentials: Login) : Observable<User> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('/login', JSON.stringify(credentials), options)
            .map(res => <User> res.json())
            .catch(this.handleError);
    }

    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}