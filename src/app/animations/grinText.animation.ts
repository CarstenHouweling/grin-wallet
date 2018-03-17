import {animate, state, style, transition, trigger} from "@angular/animations";

export const grinText = trigger('grinText', [
  state('void', style({opacity: 0, transform: 'translateY(50px)'})),
  state('*', style({opacity: 1, transform: 'translateY(0)'})),
  transition('void => *', [
    animate('900ms 2s ease-out')
  ])
]);
