import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie-model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apiUrl = `${environment.apiUrl}/movies`;

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.apiUrl);
  }

  getMovieByID(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/${id}`);
  }

  insertMovie(movie: Movie) {
    return this.http.post(this.apiUrl, movie);
  }

  updateMovie(movie: Movie) {
    return this.http.put(`${this.apiUrl}/${movie.id}`, movie);
  }

  deleteMovie(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }  
}
