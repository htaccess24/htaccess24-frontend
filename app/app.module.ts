import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AppRoutingModule, appRoutingComponents} from './app.routes';

import {HeaderModule} from './header/header.module';
import {FooterModule} from './footer/footer.module';
import {NewsService} from "./services/news.service";


@NgModule ( {
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        HeaderModule,
        FooterModule
    ],
    declarations: [
        AppComponent,
        appRoutingComponents
    ],
    providers: [NewsService],
    bootstrap: [AppComponent]
})

export class AppModule {}