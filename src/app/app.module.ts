import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TabMenuModule } from 'primeng/tabmenu';

import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { MessageComponent } from './message/message.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { MsgContainerComponent } from './msg-container/msg-container.component';

const routes: Routes = [
  { path: '', component: ViewChildComponent },
  { path: 'view-child', component: ViewChildComponent },
  { path: 'content-child', component: ContentChildComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    ViewChildComponent,
    MessageComponent,
    ContentChildComponent,
    MsgContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    TabMenuModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
