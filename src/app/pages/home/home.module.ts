import { BadgeModule } from './../../components/shared/badge/badge.module';
import { ContentModule } from './../../components/shared/content/content.module';
import { ArticleModule } from './../../components/shared/article/article.module';
import { TitleModule } from './../../components/shared/title/title.module';
import { homeRoutes } from './home.routes';
import { HomeDefaultComponent } from './home-default/home-default.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes),
        TitleModule,
        ArticleModule,
        ContentModule,
        BadgeModule
    ],
    declarations:[
        HomeComponent,
        HomeDefaultComponent
    ],
    providers: [],
    exports: [
        RouterModule
    ]
})

export class HomeModule {}
