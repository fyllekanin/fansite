import { CommonModule } from '@angular/common';
import { RadioComponent } from './radio.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        RadioComponent
    ],
    providers: [],
    exports: [
        RadioComponent
    ]
})

export class RadioModule {}
