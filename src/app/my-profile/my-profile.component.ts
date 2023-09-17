import { Component } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent {
  constructor(private sharedService : SharedService, private router : Router){}

  logoutUser() : void{
    this.sharedService.isUserLoggedIn =false;
    this.router.navigate(['/signIn']);
  }

}
