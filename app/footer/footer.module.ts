import {NgModule} from '@angular/core'
import {FooterComponent} from "./footer.component";
import {AppRoutingModule} from '../app.routes';
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule
    ],
    declarations: [
        FooterComponent
    ],
    exports: [FooterComponent]
})

export class FooterModule {}