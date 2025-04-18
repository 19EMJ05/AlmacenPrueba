  import { Component } from '@angular/core';
  import {  Router, RouterOutlet  } from '@angular/router';

  @Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet,],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
  })
  export class AppComponent {
     constructor(private route:Router){
    if(sessionStorage.getItem("sesion")){
      this.route.navigate([""]);
    }else{
      this.route.navigate(["login"]);
    }
  }
}
