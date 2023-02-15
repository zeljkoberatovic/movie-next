import { Component, Host, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie-model';
import { AuthService } from 'src/app/services/auth.service';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';
import { MoviesComponent } from '../../presentation/movies/movies.component';

declare var M: any;

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.scss']
})
export class MovieListItemComponent implements OnInit {


  @Input('movie')
  movie: Movie;
  apiUrl = `${environment.apiUrl}`;
  isAdmin = this.auth.isAdmin();

  
  
  constructor(private movieService: MovieService,
    @Host() private moviesComponent: MoviesComponent,
             private auth: AuthService) { }

  ngOnInit(): void {
  }

  deleteMovie(){
    if(confirm('Are you sure?')) {
      this.movieService.deleteMovie(this.movie.id).subscribe(data => {
        M.toast({html: 'Movie deleted'});
        this.moviesComponent.ngOnInit();
        
      })
    }
  }

}
