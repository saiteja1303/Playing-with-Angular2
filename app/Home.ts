import {Component} from '@angular/core';

@Component ({
    template: `<h2 [style.color]="true? 'blue':'red'">Welcome to Angular Routing Application</h2>
    `
})
export class HomeComponet{}