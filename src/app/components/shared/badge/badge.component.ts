import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-badge',
    templateUrl: 'badge.component.html',
    styleUrls: ['badge.component.css']
})

export class BadgeComponent {
    @Input() badgeCode: string;
    @Input() isInternal: boolean = false;
}
