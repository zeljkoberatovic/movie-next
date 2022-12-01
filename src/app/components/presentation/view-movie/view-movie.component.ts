import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie-model';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.scss']
})
export class ViewMovieComponent implements OnInit {

  movie: Movie = new Movie;
  apiUrl = environment.apiUrl;

  constructor(private activatedRoute: ActivatedRoute,
              private movieService: MovieService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      if(data['id']){
        this.movieService.getMovieByID(data['id']).subscribe(movieData => {
          this.movie = movieData;
        })
      }
    })
  }

}
