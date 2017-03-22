import {
    Directive, ElementRef, Input, OnInit, Sanitizer, SecurityContext, Renderer
} from '@angular/core';

@Directive({
    selector: '[safeHtml]',
})

export class HtmlDirective implements OnInit {
    @Input() safeHtml: string;

    constructor(private elementRef: ElementRef, private sanitizer: Sanitizer, private renderer: Renderer) {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'safeHtml', true);


    }

    ngOnInit() {
        this.elementRef.nativeElement.innerHTML = this.sanitizer.sanitize(SecurityContext.HTML, this.safeHtml);
        this.elementRef.nativeElement.innerHTML = this.sanitizer.sanitize(SecurityContext.URL, this.safeHtml);
    }
}