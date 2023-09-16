import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  username = '';
  password = '';

  exceptedUserName = 'ABHI';
  exceotedPassword = '12345';


  constructor(private router: Router) {
 }
  public formSubmit(): void{
    console.log(this.username);
    console.log(this.password);
    if(this.username  == this.exceptedUserName && this.password == this.exceotedPassword){
    this.router.navigate(['/profile']);
    }
  }


}
