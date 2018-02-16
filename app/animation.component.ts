import { Component,
        animate,
        state,
        transition,
        style,
        trigger,
        keyframes,
        group


} from '@angular/core';
import { start } from 'repl';
@Component({
  selector: 'my-animate',
  template: `<h1>Animating App</h1>
                <button (click)="toggleFun()"> Toggle</button>
                <div class="room" [@ToggleAction] = "roomState"> 
                <span class="name">Saiteja</span></div>
                <h1></h1>
              
               `,
  animations: [ 
      trigger('ToggleAction', [
          state('off', style({
              backgroundColor: 'black'
          })),
          state('on', style({
           backgroundColor: 'orange'
        })),
        //'2s' is transform time '1s' is delay to start 'ease-in' is slow to speed
        transition('off => on', [animate('2s 1s ease-in', style({
            transform: 'rotate(360deg)',
            //backgroundColor: 'white'
        }))]),
        //used group to animate two different forms for the same 
        transition('on => off', [group([animate('2s ease-out', style({
            transform: 'rotate(-360deg)',
            backgroundColor: 'black'
        })),
        animate('2s', style({
            opacity: 0
        }))
    ])])
  ]
)]
})
export class AnimateComponent {

  private roomState = 'off';
  toggleFun(){
      this.roomState = (this.roomState === "off") ? 'on':'off';
  }
 }
