import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AuthService } from './services/auth.service';
 
const routes: Routes = [
  {path : 'signIn', component : SignInComponent},
  {path : 'about', component : AboutusComponent},
  {path : 'contact', component : ContactUsComponent},
  {path : 'profile', component : MyProfileComponent , canActivate : [AuthService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
