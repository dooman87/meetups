import {Injectable} from 'angular2/core'
import {Login} from './login'
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {User} from './user'

@Injectable()
export class UserService {
    private _loginSource = new Subject<User>();
    loginSource$ = this._loginSource.asObservable();

    constructor(private http:Http) {
    }

    login(credentials:Login):Observable<User> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let observable = this.http.post('/login', JSON.stringify(credentials), options)
            .map(res => <User> res.json())
            .catch(this.handleError);

        let successFn = this._loginSource;
        observable.subscribe(
                user => {successFn.next(user)}
        );

        return observable;
    }

    private handleError(error:Response) {
        console.error(error);
        return Observable.throw(error.text());
    }
}

