import {style, animate, transition, state, trigger} from '@angular/core';

export class Animations {
    static page = [
        trigger('routeAnimation', [
            state('*', style({opacity: 1})),
            transition('void => *', [
                style({opacity: 0}),
                animate('.1s cubic-bezier(0.215, 0.610, 0.355, 1.000)')
            ]),
            transition('* => void',
                animate('2s cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                    style({
                        opacity: 0
                    })
                )
            )
        ])
    ];
}