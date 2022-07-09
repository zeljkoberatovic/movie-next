import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/presentation/home/home.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { DirectorsComponent } from './components/presentation/directors/directors.component';
import { StarsComponent } from './components/presentation/stars/stars.component';
import { MovieListItemComponent } from './components/common/movie-list-item/movie-list-item.component';
import { MoviesComponent } from './components/presentation/movies/movies.component';


// niz ruta-svaka ruta je JSON objekat
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DirectorsComponent,
    StarsComponent,
    MovieListItemComponent,
    MoviesComponent,
  ],
  imports: [
    BrowserModule,  // osnovna brovser pravila
    AppRoutingModule, //model za rutiranje,njega na pocetku ukljucujemo
    HttpClientModule,  // za upucivanje poziva(ajax) njega moramo sami da unesemo(rucno)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
