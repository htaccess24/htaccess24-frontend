import {Component} from "@angular/core";

@Component({
    selector: 'ht24-header',
    templateUrl: './app/header/template/header.component.html',
    styleUrls: ['./app/header/style/header.component.css']
})

export class HeaderComponent {
    isOpened:boolean = false;

    constructor () {
        console.log("Header Component");
    }

    toggleMenue(): void {
        this.isOpened = !this.isOpened;
    }

    toggleMenueIfOpened(): void {
        if (this.isOpened == true) {
            this.isOpened = !this.isOpened;
        }
    }
}