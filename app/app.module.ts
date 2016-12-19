import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule, appRoutingComponents} from './app.routes';

import {HeaderModule} from "./header/header.module";


@NgModule ( {
    imports: [
        BrowserModule,
        AppRoutingModule,
        HeaderModule
    ],
    declarations: [
        AppComponent,
        appRoutingComponents
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}