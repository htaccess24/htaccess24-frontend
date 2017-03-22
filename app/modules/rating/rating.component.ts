import { Component, Input } from '@angular/core';
import { HtaccessRatingModule }    from './rating.module';
import { ArticleService } from '../../services/article.service'

@Component({
    moduleId: module.id,
    selector: 'ht24-rating',
    templateUrl: './template/rating.component.html',
    styleUrls: ['./template/rating.component.css']
})

export class HtaccessRatingComponent {
    constructor(private articleService: ArticleService) {}

    @Input() articleId: number;
    @Input() rankingValue: number;
    @Input() guid: string;

    onSubmit() {
        this.articleService.rateArticle(this.rankingValue, this.articleId, this.guid);
        localStorage.setItem('article'+ this.articleId +'_rated', ''+ this.rankingValue +'');
    }
}