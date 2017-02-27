import {Component} from "@angular/core";
import {Animations} from "../services/animations";
import {Article} from "./article.module";
import {ArticleService} from "../services/article.service";
import {Router, Event, NavigationEnd} from '@angular/router';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'ht24-article',
    templateUrl: './app/articles/template/article.component.html',
    styleUrls: ['./app/articles/style/article.component.css'],
    styles: [':host { width: 100%; display: block; position: relative; }'],
    host: {'[@routeAnimation]': 'true'},
    animations: Animations.page
})

export class ArticleComponent {
    articleInformation: Article[];
    isError: boolean = true;

    constructor(_router: Router, private articleService: ArticleService, private sanitizer: DomSanitizer) {
        _router.events.filter(event => event instanceof NavigationEnd).subscribe((event:Event) => {
            this.loadArticleInformation(event.url);
        });
    }

    loadArticleInformation(slug) {
        this.articleService.getArticleInformation(slug).subscribe(
            onNext => {
                this.articleInformation = onNext;

                if (this.articleInformation.length > 0) {
                    this.isError = false;
                }
            },
            err => {console.log(err);}
        );
    }
}