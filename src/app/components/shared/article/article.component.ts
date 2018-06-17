import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-article',
    templateUrl: 'article.component.html',
    styleUrls: ['article.component.css']
})

export class ArticleComponent {
    @Input() image: string;
    @Input() author: string;
    @Input() title: string;
    @Input() time: string;

}
