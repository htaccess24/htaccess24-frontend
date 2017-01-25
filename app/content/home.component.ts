/**
 * Created by Jason on 05.12.2016.
 */
import {Component, Input, OnInit} from "@angular/core"
import {News} from './news.module';
import {NewsService} from '../services/news.service';

@Component({
    selector: 'ht24-home',
    templateUrl: './app/content/template/home.component.html',
    styleUrls: ['./app/content/style/home.component.css'],
})

export class HomeComponent implements OnInit {
    topNews: News[];
    newsImages: News[];
    newsWithoutImages: News[];

    constructor(private newsService: NewsService) {}

    @Input() newsId: string;

    ngOnInit() {
        this.loadTopNewsOnFront();
        this.loadTopNewsWithImages();
        this.loadTopNewsWithoutImages();
    }

    loadTopNewsOnFront() {
        this.newsService.getTopNewsOnFront().subscribe(onNext => this.topNews = onNext, err => {console.log(err);});
    }

    loadTopNewsWithImages() {
        this.newsService.getTopNewsWithImages().subscribe(onNext => this.newsImages = onNext, err => {console.log(err);});
    }

    loadTopNewsWithoutImages() {
        this.newsService.getTopNewsWithoutImages().subscribe(onNext => this.newsWithoutImages = onNext, err => {console.log(err);});
    }
}