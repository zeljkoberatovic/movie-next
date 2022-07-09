import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie-model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies:Movie[] = [];

  constructor(private movieService: MovieService) { }  //sad smo movieService indzektovan unutar ove komponente

  ngOnInit(): void {
    this.movieService.getAlMovies().subscribe(data => {
      this.movies = data;
    })
  }

}
