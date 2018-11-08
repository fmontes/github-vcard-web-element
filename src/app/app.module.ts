import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { GithubVcardComponent } from './components/github-vcard/github-vcard.component';

@NgModule({
    declarations: [AppComponent, GithubVcardComponent],
    imports: [BrowserModule, HttpClientModule],
    providers: [],
    entryComponents: [GithubVcardComponent]
})
export class AppModule {
    constructor(private injector: Injector) {
        const el = createCustomElement(GithubVcardComponent, { injector });
        customElements.define('github-vcard', el);
    }

    ngDoBootstrap() {}
}
