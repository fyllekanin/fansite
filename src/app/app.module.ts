import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { TopContentModule } from './components/app-views/top-content/top-content.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationModule } from './components/app-views/navigation/navigation.module';

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        NavigationModule,
        TopContentModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
