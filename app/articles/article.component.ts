import {Component, AfterViewInit, ElementRef} from "@angular/core";
import {Animations} from "../services/animations";
import {Article} from "./article.module";
import {ArticleService} from "../services/article.service";
import {Router, Event, NavigationEnd} from '@angular/router';
import {HighlightJsService} from "angular2-highlight-js";
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    moduleId: module.id,
    selector: 'ht24-article',
    templateUrl: './template/article.component.html',
    styleUrls: ['./style/article.component.css'],
    styles: [':host { width: 100%; display: block; position: relative; }'],
    host: {'[@routeAnimation]': 'true'},
    animations: Animations.page
})

export class ArticleComponent implements AfterViewInit {
    articleInformation: Article[];
    private isError: boolean = false;
    private isLoading: boolean = false;

    constructor(_router: Router, private articleService: ArticleService, private el: ElementRef,
                private service: HighlightJsService, private sanitizer: DomSanitizer) {

        _router.events.filter(event => event instanceof NavigationEnd).subscribe((event: Event) => {
            this.isLoading = true;

            if (event.url != '/') {
                this.loadArticleInformation(event.url);
            }
        });
    }

    loadArticleInformation(slug) {
        this.articleService.getArticleInformation(slug).subscribe(
            onNext => {
                this.articleInformation = onNext;

                if (this.articleInformation.length <= 0) {
                    this.isError = true;
                    var delay = 5000;
                } else {
                    var delay = 500;
                }

                setTimeout(() => {
                    this.isLoading = false;
                }, 500);
            },
            err => {
                console.log(err);
            }
        );
    }

    ngAfterViewInit() {
        setTimeout(() => {
            if (this.el.nativeElement.querySelector('.typescript') !== null) {
                this.service.highlight(this.el.nativeElement.querySelector('.typescript'));
            }
        }, 1000);
    }
}