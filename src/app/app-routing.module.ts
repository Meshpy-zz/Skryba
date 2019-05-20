import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {BrowserComponent} from './components/browser/browser.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {AddFileComponent} from './components/add-file/add-file.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'browser', component: BrowserComponent },
  { path: 'main', component: MainPageComponent },
  { path: 'add-file', component: AddFileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
