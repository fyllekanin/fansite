import { Component } from '@angular/core';

@Component({
    selector: 'app-radio',
    templateUrl: 'radio.component.html',
    styleUrls: ['radio.component.css']
})

export class RadioComponent {
    radioPlaying: boolean = true;
    volume: number = 50;
    timeoutHandler: NodeJS.Timer;

    mouseup(): void {
        if (this.timeoutHandler) {
            clearTimeout(this.timeoutHandler);
            this.timeoutHandler = null;
        }
    }
    
    mousedown(isVolumeUp): void {
        this.timeoutHandler = setInterval(() => {
            isVolumeUp ? this.volumeUp() : this.volumeDown();
        }, 100);
    }

    volumeUp(): void {
        if (this.volume < 100) {
            this.volume++;
        }
    }

    volumeDown(): void {
        if (this.volume > 0) {
            this.volume--;
        }
    }

    togglePlay(): void {
        this.radioPlaying = !this.radioPlaying;
    }
}
