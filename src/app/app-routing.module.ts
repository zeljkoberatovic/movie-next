import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddEditMovieComponent } from './components/presentation/add-edit-movie/add-edit-movie.component';
import { DirectorsComponent } from './components/presentation/directors/directors.component';
import { HomeComponent } from './components/presentation/home/home.component';
import { LoginComponent } from './components/presentation/login/login.component';
import { MoviesComponent } from './components/presentation/movies/movies.component';
import { RegisterComponent } from './components/presentation/register/register.component';
import { StarsComponent } from './components/presentation/stars/stars.component';
import { ViewMovieComponent } from './components/presentation/view-movie/view-movie.component';
import { AdminGuard } from './quards/admin.quard';
import { AuthGuard } from './quards/auth.quard';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'movies',component: MoviesComponent, canActivate: [AuthGuard]},
  { path: 'directors', component: DirectorsComponent},
  { path: 'stars', component: StarsComponent},
  { path: 'add-movie', component: AddEditMovieComponent, canActivate:[AdminGuard]},
  { path: 'edit-movie/:id', component: AddEditMovieComponent, canActivate:[AdminGuard]},
  { path: 'view-movie/:id', component: ViewMovieComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
