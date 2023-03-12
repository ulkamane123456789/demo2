import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  laberObj:any={
    username:'',
    password:''
  }

  constructor(private router:Router){

  }
  ngOnInit():void{

  }
  onLogin(){
    if(this.laberObj.username == 'admin' && this.laberObj.password == '3333' ){
      this.router.navigateByUrl('shop');

    }else{
      alert('Navigation is fail')
    }
  }

}
