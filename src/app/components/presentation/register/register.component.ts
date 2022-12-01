
import { Component,OnInit } from '@angular/core';
import { User } from 'src/app/models/user-model';
import { AuthService } from 'src/app/services/auth.service';

declare var M: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = new User();

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  register(){
    if(!this.user.username ||
      !this.user.password){
        M.toast({html: 'Insert all data'});
        return;
      }
      this.auth.register(this.user).subscribe(data =>{
        if(data.success){
          localStorage.setItem('movies-token', data.token)
          M.toast({
            html:'User register in'
          })
          console.log(data);
        }
      })
  }

}
