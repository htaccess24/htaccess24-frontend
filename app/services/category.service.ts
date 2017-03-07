import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Category} from '../content/category.module';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CategoryService {
    constructor (private http: Http) {}

    private apiUrlTo = 'http://192.168.178.123:8000/v1/categories';
    private apiToken = '?api_token=CIrHb9Vr1OOibuKcm9ppvxEviy9g3tKOxgDL6Ni5fkr72GjneExctSIjlFsX';

    private apiRequest = this.apiUrlTo;

    getFrontpageCategoriesWithNews() : Observable<Category[]> {
        var apiRequestPath = '/frontpage';
        var apiRequest = this.apiRequest + apiRequestPath + this.apiToken;

        return this.http.get(apiRequest)
            .map((res:Response) => res.json())
            .catch(this._serverError);
    }

    getCategoryNews(newsId: number): Observable<Category[]> {
        var apiRequestPath = '/'+ newsId;
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