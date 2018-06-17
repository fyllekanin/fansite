import { TITLE_BG } from './title.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-title',
    templateUrl: 'title.component.html',
    styleUrls: ['title.component.css']
})

export class TitleComponent {
    private _bgColor: TITLE_BG = TITLE_BG.BLUE;
    
    @Input() title: string;
    
    @Input()
    set bgColor(color: TITLE_BG) {
        this._bgColor = color;
    }

    get bgColor(): TITLE_BG {
        return this._bgColor;
    }
}
