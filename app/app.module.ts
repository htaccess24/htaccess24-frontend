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
import {ArticleService} from "./services/article.service";
import {SafeHtmlPipe} from "./pipes/security.pipe";
import {HtmlDirective} from "./directives/html.directive";


@NgModule ( {
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        HeaderModule,
        FooterModule,
    ],
    declarations: [
        AppComponent,
        appRoutingComponents,
        ObjToArr,
        TruncatePipe,
        SafeHtmlPipe,
        HtmlDirective
    ],
    providers: [NewsService, CategoryService, ArticleService],
    bootstrap: [AppComponent]
})

export class AppModule {}