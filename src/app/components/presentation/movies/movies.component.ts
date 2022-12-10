import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie-model';
import { MovieService } from 'src/app/services/movie.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  
  searchText :string;
  //showDiv: boolean = true;
  movies: Movie[] = [];
  
 

  constructor(private movieService: MovieService) { }  //sad smo movieService indzektovali unutar ove komponente

  ngOnInit(): void {
    //REST
    this.movieService.getAllMovies().subscribe(data => {
      this.movies = data; 
    });
  }
  
}
