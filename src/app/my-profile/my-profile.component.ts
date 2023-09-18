import { Component } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent {
  constructor(private sharedService: SharedService, private router: Router) { }

  firstName = '';
  lastName = '';
  dob = '';
  mobileNumber = '';
  email = '';
  car = '';

  logoutUser(): void {
    this.sharedService.isUserLoggedIn = false;
    this.router.navigate(['/signIn']);
  }

  submitProfileForm(): void {
    this.sharedService.firstName = this.firstName;
    this.sharedService.lastName = this.lastName;
    this.sharedService.dob = this.dob;
    this.sharedService.MobileNumber = this.mobileNumber;
    this.sharedService.email = this.email;
    this.sharedService.car = this.car;

    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.firstName = this.sharedService.firstName;
    this.lastName = this.sharedService.lastName;
    this.dob = this.sharedService.dob;
    this.mobileNumber = this.sharedService.MobileNumber;
    this.email = this.sharedService.email;
    this.car = this.sharedService.car;

  }

}
