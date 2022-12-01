import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

declare var M : any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  isAuthenticated = this.authService.isAuthenticated();
  
  constructor(private authService: AuthService,
               private router: Router) { }

  ngOnInit(): void {
    // navbar 
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, {});
  })
}
logout(){
  localStorage.removeItem('movies-token');
  this.isAuthenticated = false;
  this.router.navigateByUrl('/home');
}

}