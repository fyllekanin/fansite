import { ImageSliderModule } from './../../shared/image-slider/image-slider.module';
import { RadioModule } from './../radio/radio.module';
import { TopContentComponent } from './top-content.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        ImageSliderModule,
        RadioModule
    ],
    declarations: [
        TopContentComponent
    ],
    providers: [],
    exports: [
        TopContentComponent
    ]
})

export class TopContentModule {}
