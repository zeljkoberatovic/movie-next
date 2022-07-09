import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectorsComponent } from './components/presentation/directors/directors.component';
import { HomeComponent } from './components/presentation/home/home.component';
import { MoviesComponent } from './components/presentation/movies/movies.component';
import { StarsComponent } from './components/presentation/stars/stars.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'movies',component: MoviesComponent},
  { path: 'directors', component: DirectorsComponent},
  { path: 'stars', component: StarsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
