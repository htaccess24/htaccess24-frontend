import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HtaccessRatingComponent } from './rating.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        HtaccessRatingComponent
    ],
    exports: [
        HtaccessRatingComponent
    ]
})

export class HtaccessRatingModule {
    public rating;

    constructor() {
        console.log(localStorage.getItem('guid'))
    }
}