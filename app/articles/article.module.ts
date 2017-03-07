import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HighlightJsContentDirective } from '../../node_modules/angular2-highlight-js/lib/highlight-js-content.directive';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        HighlightJsContentDirective
    ]
})

export class Article {
    constructor(
        public id: Date,
        public name: string,
    ) {}
}