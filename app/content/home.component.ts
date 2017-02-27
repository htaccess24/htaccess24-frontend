/**
 * Created by Jason on 05.12.2016.
 */
import {Component, Input, trigger, transition, style, animate, OnInit, state} from "@angular/core"
import {News} from './news.module';
import {NewsService} from '../services/news.service';
import {Category} from "./category.module";
import {CategoryService} from "../services/category.service";
import {Animations} from '../services/animations';

@Component({
    selector: 'ht24-home',
    templateUrl: './app/content/template/home.component.html',
    styleUrls: ['./app/content/style/home.component.css'],
    styles: [':host { width: 100%; display: block; position: relative; }'],
    host: {'[@routeAnimation]': 'true'},
    animations: Animations.page
})

export class HomeComponent implements OnInit {
    topNews: News[];
    newsImages: News[];
    newsWithoutImages: News[];
    frontpageCategories: Category[];
    frontpageCategoryNews: Category[];

    constructor(private newsService: NewsService, private categoryService: CategoryService) {}

    @Input() newsId: string;

    ngOnInit() {
        this.loadTopNewsOnFront();
        this.loadTopNewsWithImages();
        this.loadTopNewsWithoutImages();
        this.loadCategoriesOnFrontpage();
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

    loadCategoriesOnFrontpage() {
        this.categoryService.getFrontpageCategoriesWithNews().subscribe(
            onNext => {
                this.frontpageCategories = onNext;

                for(let news of onNext) {
                    this.loadNewsFromCategory(news.id);
                }
            },
            err => {console.log(err);}
        );
    }

    loadNewsFromCategory(newsId: any) {
        this.categoryService.getCategoryNews(newsId).subscribe(onNext => this.frontpageCategoryNews = onNext, err => {console.log(err);});
    }
}