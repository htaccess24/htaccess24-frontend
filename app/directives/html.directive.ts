import {
    Directive, ElementRef, Input, OnChanges, OnInit, Sanitizer, SecurityContext,
    SimpleChanges, Renderer
} from '@angular/core';

// Sets the element's innerHTML to a sanitized version of [safeHtml]
@Directive({
    selector: '[safeHtml]',
})
export class HtmlDirective implements OnChanges, OnInit {
    @Input() safeHtml: string;

    constructor(private elementRef: ElementRef, private sanitizer: Sanitizer, private renderer: Renderer) {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'safeHtml', true);
    }

    ngOnChanges(changes: SimpleChanges): any {
        /*if ('safeHtml' in changes) {
            this.elementRef.nativeElement.innerHTML = this.sanitizer.sanitize(SecurityContext.HTML, this.safeHtml);
        }*/
    }

    ngOnInit() {
        this.elementRef.nativeElement.innerHTML = this.sanitizer.sanitize(SecurityContext.HTML, this.safeHtml);
        this.elementRef.nativeElement.innerHTML = this.sanitizer.sanitize(SecurityContext.URL, this.safeHtml);
        this.elementRef.nativeElement.innerHTML = this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, this.safeHtml);
    }
}