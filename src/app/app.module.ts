import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HomeNavbarComponent } from './components/home-navbar/home-navbar.component';
import { UserNavbarComponent } from './components/user-navbar/user-navbar.component';
import { BrowserComponent } from './components/browser/browser.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AddFileComponent } from './components/add-file/add-file.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeNavbarComponent,
    UserNavbarComponent,
    BrowserComponent,
    MainPageComponent,
    AddFileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
