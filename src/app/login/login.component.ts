import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  auth : LoginModel;
  flag : boolean;
  constructor() {
    this.auth = new LoginModel();
   }

  ngOnInit(): void {
  }

  validate(){
    console.log(this.auth.username +" "+this.auth.password);
    if(this.auth.username== 'jaiBaheti' && this.auth.password == "Jaibahe"){
      this.flag=true;
    }
  }
}
