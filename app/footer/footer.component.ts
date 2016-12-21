import {Component} from "@angular/core";

@Component({
    selector: 'ht24-footer',
    templateUrl: './app/footer/template/footer.component.html',
    styleUrls: ['./app/footer/style/footer.component.css']
})

export class FooterComponent {
    constructor () {
        console.log("Footer Component");
    }
}