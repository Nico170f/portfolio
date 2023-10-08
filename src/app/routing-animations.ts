import {
    transition,
    trigger,
    query,
    style,
    animate,
    group,
    animateChild
} from '@angular/animations';


export const slideInAnimation =
    trigger('routeAnimations', [
        transition('* <=> *', [
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
            group([
                query(':enter', [
                    animate('1.5s ease-in-out', style({ filter: 'blur(10px)', transform: 'scale(1.1)' }))
                ], { optional: true }),
                query(':leave', [
                    animate('0.5s ease-in-out', style({ filter: 'blur(0px)', transform: 'scale(1)' }))
                ], { optional: true }),
            ])
        ])
    ]);
