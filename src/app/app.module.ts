import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PresentationComponentComponent } from './presentation-component/presentation-component.component';
import { ActivityComponent } from './activity/activity.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import { ResumeComponent } from './resume/resume.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BackOfficeComponent } from './back-office/back-office.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import {MatTabsModule} from '@angular/material/tabs';
import { CertificatComponent } from './certificat/certificat.component';
import {IvyCarouselModule} from 'carousel-angular';
import { ContactComponent } from './contact/contact.component';
import {MatInputModule} from '@angular/material/input';


export const appRouteList:Routes = [
  {
    path:'present', component:PresentationComponentComponent
  },
  {path:'appcomponent',component:AppComponent},
  {path:'',component:AppComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    PresentationComponentComponent,
    ActivityComponent,
    ResumeComponent,
 
    BackOfficeComponent,
      CertificatComponent,
      ContactComponent,
  ],
  imports: [
    MatInputModule,
    IvyCarouselModule,
    MatTabsModule,
    MatIconModule,
    MatSlideToggleModule,
    BrowserModule,
    RouterModule.forRoot(appRouteList),
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    LayoutModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
