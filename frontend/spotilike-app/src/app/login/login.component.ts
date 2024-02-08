import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import {ToasterComponent} from "../toaster/toaster.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ToasterComponent, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  email: string = '';

  type: string = '';
  errorOrResponse: any | undefined ;
  statusCode: number = 0 ;

  constructor(private authService: AuthService, private router: Router) { }

  signUp(): void {
    this.authService.signUp({ username: this.username, password: this.password, email: this.email }).subscribe(
      (response) => {
        this.errorOrResponse = response.message;
        this.statusCode = response.status;
        this.type = response.success ? "success" : "error";
        },
      (error) => {
        this.errorOrResponse = error.error.message;
        this.statusCode = error.status;
        this.type = "error";
      }
    );
  }

  signIn(): void {
    this.authService.signIn({ username: this.username, password: this.password }).subscribe(
      (response) => {
        localStorage.setItem("token", response.result.token)

        this.authService.generateSpotifyToken().subscribe(response => {
          this.errorOrResponse = response;
          this.type = response.success ? "success" : "error";
          this.router.navigate(['search']);
        })
      },
      (error) => {
        this.errorOrResponse = error.error.message;
        this.statusCode = error.status;
        this.type = "error";
      }
    );
  }
}
