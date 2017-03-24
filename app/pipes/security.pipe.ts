import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({ name: 'trustHtml', pure: false })
export class SafeHtmlPipe implements PipeTransform {
    constructor(private _sanitizer: DomSanitizer) {
    }

    transform(html) {
        return this._sanitizer.bypassSecurityTrustHtml(html);
    }
}