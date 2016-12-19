import {NgModule} from '@angular/core'
import {HeaderComponent} from "./header.component";
import {AppRoutingModule} from '../app.routes';
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule
    ],
    declarations: [
        HeaderComponent
    ],
    exports: [HeaderComponent]
})

export class HeaderModule {}