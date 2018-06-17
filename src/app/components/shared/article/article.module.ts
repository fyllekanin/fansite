import { ArticleComponent } from './article.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ArticleComponent
    ],
    providers:[],
    exports: [
        ArticleComponent
    ]
})

export class ArticleModule {}
