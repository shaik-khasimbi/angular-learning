import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  isUserLoggedIn : boolean = false;
  firstName : string = '';
  lastName : string = '';
  dob : string = ''; 
  MobileNumber : any = null;
  email : string = '';
  car : string = '';

  constructor() {}
}
