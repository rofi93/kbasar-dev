import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {ContactInfoComponent} from './components/contact-info/contact-info.component';
import {SocialMediaComponent} from './components/social-media/social-media.component';
import {InterestTopicComponent} from './components/interest-topic/interest-topic.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactInfoComponent,
    SocialMediaComponent,
    InterestTopicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
