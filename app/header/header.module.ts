/**
 * Created by Jason on 05.12.2016.
 */

import {NgModule} from '@angular/core'
import {HeaderComponent} from "./header.component";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [CommonModule],
    declarations: [HeaderComponent],
    exports: [HeaderComponent]
})

export class HeaderModule {}