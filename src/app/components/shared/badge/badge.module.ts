import { CommonModule } from '@angular/common';
import { BadgeComponent } from './badge.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        BadgeComponent
    ],
    providers: [],
    exports: [
        BadgeComponent
    ]
})

export class BadgeModule {}
