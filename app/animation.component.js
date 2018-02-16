"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AnimateComponent = /** @class */ (function () {
    function AnimateComponent() {
        this.roomState = 'off';
    }
    AnimateComponent.prototype.toggleFun = function () {
        this.roomState = (this.roomState === "off") ? 'on' : 'off';
    };
    AnimateComponent = __decorate([
        core_1.Component({
            selector: 'my-animate',
            template: "<h1>Animating App</h1>\n                <button (click)=\"toggleFun()\"> Toggle</button>\n                <div class=\"room\" [@ToggleAction] = \"roomState\"> \n                <span class=\"name\">Saiteja</span></div>\n                <h1></h1>\n              \n               ",
            animations: [
                core_1.trigger('ToggleAction', [
                    core_1.state('off', core_1.style({
                        backgroundColor: 'black'
                    })),
                    core_1.state('on', core_1.style({
                        backgroundColor: 'orange'
                    })),
                    //'2s' is transform time '1s' is delay to start 'ease-in' is slow to speed
                    core_1.transition('off => on', [core_1.animate('2s 1s ease-in', core_1.style({
                            transform: 'rotate(360deg)',
                        }))]),
                    //used group to animate two different forms for the same 
                    core_1.transition('on => off', [core_1.group([core_1.animate('2s ease-out', core_1.style({
                                transform: 'rotate(-360deg)',
                                backgroundColor: 'black'
                            })),
                            core_1.animate('2s', core_1.style({
                                opacity: 0
                            }))
                        ])])
                ])
            ]
        })
    ], AnimateComponent);
    return AnimateComponent;
}());
exports.AnimateComponent = AnimateComponent;
//# sourceMappingURL=animation.component.js.map