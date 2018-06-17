import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <app-navigation></app-navigation>
        <app-top-content></app-top-content>
        <div class="grid-container margin-top">
            <div class="grid-x grid-margin-x">
                <router-outlet></router-outlet>
            </div>
        </div>
    `
})
export class AppComponent {}
