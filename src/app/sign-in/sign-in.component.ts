import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  username = '';
  password = '';

  @Output() triggerUserLogginEvent : EventEmitter<boolean> = new EventEmitter<boolean>();

  exceptedUserName = 'ABHI';
  exceotedPassword = '12345';

  isUserLoggedIn: boolean = false;

  constructor(private router: Router, private sharedService : SharedService) {
  }

  public formSubmit(): void {
    console.log(this.username);
    console.log(this.password);
    if (this.username == this.exceptedUserName && this.password == this.exceotedPassword) {
      this.isUserLoggedIn = true;
      //this.triggerUserLogginEvent.emit(this.isUserLoggedIn);
      this.sharedService.isUserLoggedIn = this.isUserLoggedIn;
      console.log("sign in : ", this.isUserLoggedIn);
      this.router.navigate(['/profile']);
    }
  }


}
