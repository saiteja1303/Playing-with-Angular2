import {Component} from '@angular/core';

@Component ({
    template: `<h2 [style.color]="true? 'red':'blue'">Page Not Fund</h2>
    `
})
export class PageNotFoundComponent{}