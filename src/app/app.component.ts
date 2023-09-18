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

  firstName : string = '';
  lastName : string = '';
  dob : string = '';
  mobileNumber : any = null;
  email : string = '';
  car : string = '';

  constructor(private sharedService : SharedService){} 
   
   ngDoCheck(){
    this.isUserLogged = this.sharedService.isUserLoggedIn;
    this.firstName = this.sharedService.firstName;
    this.lastName = this.sharedService.lastName;
    this.dob = this.sharedService.dob;
    this.mobileNumber = this.sharedService.MobileNumber;
    this.email = this.sharedService.email;
    this.car = this.sharedService.car;
    console.log("app com  ngDoCheck:" ,this.isUserLogged);
  }

  // public userLoginNotificationEvent(receivedValue: any ) : void{

  //   this.isUserLogged = receivedValue;
  //   console.log(this.isUserLogged);

  // }
  
}
