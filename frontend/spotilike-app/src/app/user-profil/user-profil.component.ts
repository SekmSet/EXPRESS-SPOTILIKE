import { Component } from '@angular/core';
import {UserService} from "../../service/user.service";
import {NgIf} from "@angular/common";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";

interface IUser {
  username: string,
  email: string,
  password: string,
  id: number
}

@Component({
  selector: 'app-user-profil',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './user-profil.component.html',
  styleUrl: './user-profil.component.scss'
})
export class UserProfilComponent {
  editMode: boolean = false;
  user: IUser = {
    id : 0,
    username : "",
    email : "",
    password : "",
  };
  reactiveUserForm = this.fb.group({
    formUsername: ["", [Validators.required, Validators.minLength(4)]],
    formEmail: ["", [Validators.required, Validators.minLength(4)]],
    formPassword: [""],
  })

  constructor(private userService: UserService, private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.handleGetUserInfo();
  }

  updateProfil() {
    this.editMode = true;
  }

  cancelUpdateProfil() {

    this.editMode = false;
  }

  handleGetUserInfo() {
    this.userService.getUserInfo().subscribe(response => {
      this.user.username = response.result.results[0].username
      this.user.email = response.result.results[0].email
      this.user.id = response.result.results[0].id
    });
  }

  handleUpdate() {
    this.userService.updateUserInfo({
      username: this.reactiveUserForm.value.formUsername,
      email: this.reactiveUserForm.value.formEmail,
      password: this.reactiveUserForm.value.formPassword,
      id: this.user.id}
    ).subscribe(response => {
      this.user.username = response.result?.results[0].username
      this.user.email = response.result?.results[0].email
      this.user.id = response.result?.results[0].id
    });

    this.handleGetUserInfo()
  }

  deleteProfil() {
    this.userService.deleteProfil(this.user.id).subscribe(result => {
      localStorage.clear();
      this.router.navigate(['']);
    })
  }
}
