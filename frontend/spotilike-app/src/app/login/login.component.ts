import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  email: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  signUp(): void {
    this.authService.signUp({ username: this.username, password: this.password, email: this.email }).subscribe(
      (response) => {
        console.log(response); 
      },
      (error) => {
        console.error(error); 
      }
    );
  }

  signIn(): void {
    this.authService.signIn({ username: this.username, password: this.password }).subscribe(
      (response) => {
        console.log(response); 
        this.router.navigate(['albums']);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
