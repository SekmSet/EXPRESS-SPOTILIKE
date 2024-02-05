import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list-albums',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-albums.component.html',
  styleUrl: './list-albums.component.scss',
})
export class ListAlbumsComponent implements OnInit {
  albums: any[] = [];
  image: any;

  constructor(private authService: AuthService, private router: Router) {}

  getAlbums(): void {
    this.authService.getAlbums().subscribe(
      (response) => {
        this.albums = response.result.albums;
        console.log(response.result);
      },
      (error) => {
        console.error('Error fetching albums:', error);
      }
    );
  }

  ngOnInit(): void {
    this.getAlbums();
  }
}
