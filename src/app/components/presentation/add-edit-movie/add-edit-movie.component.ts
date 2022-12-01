import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/movie-model';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { MovieService } from 'src/app/services/movie.service';

declare var M: any;

@Component({
  selector: 'app-add-edit-movie',
  templateUrl: './add-edit-movie.component.html',
  styleUrls: ['./add-edit-movie.component.scss']
})
export class AddEditMovieComponent implements OnInit {

  movie: Movie = new Movie(); //t-w-b
  edit: boolean = false;
  

  constructor(private movieService: MovieService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      if(data['id']){
        //edit operacija
        this.edit = true;
        this.movieService.getMovieByID(data['id']).subscribe(movieData => {
          this.movie = movieData;
        })
      }
      else{
        //insert
      }
    })
  }
  saveMovie() {
    if(this.edit)
       this.updateMovie();
    else
       this.insertMovie();
  }

  insertMovie(){
    this.movieService.insertMovie(this.movie).subscribe(data => {
      M.toast({html: 'Movie insert'});
      this.router.navigateByUrl('/movies');
  });
}

updateMovie() {
  this.movieService.updateMovie(this.movie).subscribe(data => {
    M.toast({html: 'Movie updated'});
    this.router.navigateByUrl('/movies');
});
}
//file-upload
onFileSelected(event: any) {
const file: File = event.target.files[0];
this.fileUploadService.uploadFile(file).subscribe(data =>{
this.movie.image_url = data.filename;
})
}

}
