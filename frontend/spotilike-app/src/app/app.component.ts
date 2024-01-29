import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListAlbumsComponent } from "./list-albums/list-albums.component";
import { LoginComponent } from './login/login.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ListAlbumsComponent, LoginComponent]
})
export class AppComponent {
  title = 'spotilike-app';
}
