/**
 * Created by Jason on 05.12.2016.
 */

import {NgModule} from '@angular/core'
import {HeaderComponent} from "./header.component";
import {HomeComponent} from '../content/home.component';
import {PageNotFoundComponent} from '../content/pagenotfound.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from "@angular/common";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        HeaderComponent,
        HomeComponent,
        PageNotFoundComponent
    ],
    exports: [HeaderComponent]
})

export class HeaderModule {}