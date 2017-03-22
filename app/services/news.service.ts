import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {News} from '../content/news.module';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class NewsService {
    constructor (private http: Http) {}

    private apiUrlTo = 'http://10.0.10.179:8000/v1/news';
    private apiToken = '?api_token=CIrHb9Vr1OOibuKcm9ppvxEviy9g3tKOxgDL6Ni5fkr72GjneExctSIjlFsX';

    private apiRequest = this.apiUrlTo;

    getTopNewsOnFront() : Observable<News[]> {
        var apiRequestPath = '/top';
        var apiRequest = this.apiRequest + apiRequestPath + this.apiToken;

        return this.http.get(apiRequest)
            .map((res:Response) => res.json())
            .catch(this._serverError);
    }

    getTopNewsWithImages() : Observable<News[]> {
        var apiRequestPath = '/images';
        var apiRequest = this.apiRequest + apiRequestPath + this.apiToken;

        return this.http.get(apiRequest)
            .map((res:Response) => res.json())
            .catch(this._serverError);
    }

    getTopNewsWithoutImages() : Observable<News[]> {
        var apiRequestPath = '';
        var apiRequest = this.apiRequest + apiRequestPath + this.apiToken;

        return this.http.get(apiRequest)
            .map((res:Response) => res.json())
            .catch(this._serverError);
    }

    private _serverError(error: any) {
        console.log('Server Error: ', error);

        if (error instanceof Response) {
            return Observable.throw(error.json().error || 'Backend Server Error');
        }

        return Observable.throw(error || 'Backend Server Error');
    }
}