import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ObjToArr} from './pipes/objtoarray.pipe';
import {AppRoutingModule, appRoutingComponents} from './app.routes';

import {HeaderModule} from './header/header.module';
import {FooterModule} from './footer/footer.module';
import {NewsService} from "./services/news.service";
import {CategoryService} from "./services/category.service";
import {TruncatePipe} from "./pipes/truncate.pipe";
import {SafeHtmlPipe} from "./pipes/security.pipe";
import {HtmlDirective} from "./directives/safeHtml.directive";
import {StickyModule} from "ng2-sticky-kit/ng2-sticky-kit";
import {HighlightJsModule, HighlightJsService} from 'angular2-highlight-js';
import {ArticleService} from "./services/article.service";
//import { EmojifyModule } from 'angular2-emojify';
import {Config} from "./config/config";
import {HtaccessRatingModule} from "./modules/rating/rating.module";

@NgModule ( {
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        HeaderModule,
        StickyModule,
        FooterModule,
        HighlightJsModule,
        HtaccessRatingModule,
        //EmojifyModule
    ],
    declarations: [
        AppComponent,
        appRoutingComponents,
        ObjToArr,
        TruncatePipe,
        SafeHtmlPipe,
        HtmlDirective
    ],
    providers: [
        NewsService,
        CategoryService,
        HighlightJsService,
        ArticleService,
        Config
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
    constructor(private _config: Config) {}
}