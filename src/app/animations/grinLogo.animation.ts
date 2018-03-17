import {animate, keyframes, style, transition, trigger} from "@angular/animations";

export const grinLogo = trigger('grinLogo', [
  transition('void => *', [
    style({opacity: 0}),
    animate('2s 1s ease-out', keyframes([
      style({opacity: 0, transform: 'translateY(-100%) rotateY(0)', offset: 0}),
      style({opacity: 1, transform: 'translateY(35px) rotateY(360deg)', offset: 0.7}),
      style({transform: 'translateY(0) rotateY(0)', offset: 1})
    ]))
  ])
]);
