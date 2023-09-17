import { Component } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'this is my project';

  isUserLogged : boolean = false;

  constructor(private sharedService : SharedService){} 
   
   ngDoCheck(){
    this.isUserLogged = this.sharedService.isUserLoggedIn;
    console.log("app com  ngDoCheck:" ,this.isUserLogged);
  }

  // public userLoginNotificationEvent(receivedValue: any ) : void{

  //   this.isUserLogged = receivedValue;
  //   console.log(this.isUserLogged);

  // }
  
}
