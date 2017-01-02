/**
 * Created by Jason on 05.12.2016.
 */
import {Component, Input, EventEmitter, OnChanges, OnInit} from "@angular/core"
import {News} from './news.module';
import {EmitterService} from '../emitter.service';
import {NewsService} from '../services/news.service';

@Component({
    selector: 'ht24-home',
    templateUrl: './app/content/template/home.component.html',
    styleUrls: ['./app/content/style/home.component.css'],
})

export class HomeComponent implements OnInit, OnChanges {
    news: News[];

    constructor(private newsService: NewsService) {}

    @Input() newsId: string;

    ngOnInit() {
        this.loadNews();
    }

    loadNews() {
        this.newsService.getNews().subscribe(onNext => this.news = onNext, err => {console.log(err);});
    }

    ngOnChanges(changes:any) {
        EmitterService.get(this.newsId).subscribe((newNews:News[]) => {this.loadNews()});
    }

}