import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user-model';

declare var M :any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  //is_admin: boolean = true;

  constructor(private auth: AuthService,
              private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.auth.login(this.user).subscribe(data => {
      if(data.success){
        localStorage.setItem('movies-token',data.token);
        M.toast({
          html:'User logged in'
        })
        this.router.navigateByUrl('/movies');
       }
     
    })
  }
 

}
