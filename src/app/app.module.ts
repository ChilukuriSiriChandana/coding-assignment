import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { AddedFavPageComponent } from './components/added-fav-page/added-fav-page.component';

const router :Routes = [ 
  { path: 'Search', component : SearchComponent } ,
  { path: 'AddedFavPage', component :AddedFavPageComponent},
] ;
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent ,
AddedFavPageComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
