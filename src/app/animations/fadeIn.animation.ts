import {animate, state, style, transition, trigger} from "@angular/animations";

export const fadeIn = trigger('fadeIn', [
  state('0', style({opacity: 0})),
  state('1', style({opacity: 1})),
  transition('0 => 1', [
    animate('1s')
  ])
]);
