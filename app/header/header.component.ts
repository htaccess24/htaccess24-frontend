/**
 * Created by Jason on 05.12.2016.
 */
import {Component} from "@angular/core";

@Component({
    selector: 'ht24-header',
    templateUrl: './app/header/template/header.component.html',
    styleUrls: ['./app/header/style/header.component.css']
})

export class HeaderComponent {
    name:string = "Jason Bladt";
    active:boolean = true;
    disabled:any = null;

    constructor () {
        console.log("Header Component");
    }

    onClick(): void {
        this.disabled = true;
    }
}