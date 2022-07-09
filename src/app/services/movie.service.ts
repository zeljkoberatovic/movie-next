import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie-model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getAlMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>('http://localhost:3000/movies');
  }
}
