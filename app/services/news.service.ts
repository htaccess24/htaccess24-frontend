import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {News} from '../content/news.module';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class NewsService {
    constructor (private http: Http) {}

    private apiToken = '?api_token=CIrHb9Vr1OOibuKcm9ppvxEviy9g3tKOxgDL6Ni5fkr72GjneExctSIjlFsX';
    private newsPathUrl = 'http://localhost:8000/v1/news' + this.apiToken;


    getNews() : Observable<News[]> {
        return this.http.get(this.newsPathUrl)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}