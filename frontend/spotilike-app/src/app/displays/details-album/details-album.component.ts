import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { AuthService } from '../../auth.service';
import {NgForOf, Location} from "@angular/common";
@Component({
  selector: 'app-details-album',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './details-album.component.html',
  styleUrl: './details-album.component.scss'
})
export class DetailsAlbumComponent implements OnInit {
albumDetails : any ;
tracks : any ;

constructor(
  private route: ActivatedRoute, 
  private authService: AuthService,
  private location: Location) { }

goBack() {
  this.location.back();
}

ngOnInit(): void {
  this.route.params.subscribe(params => {
      const albumId = params['id'];
      this.authService.getAlbumById(albumId).subscribe(response => {
          this.albumDetails = response.result;
      });

      this.authService.getAlbumTracks(albumId).subscribe(responseTrack => {
        this.tracks = responseTrack.result.items
      })
  });
}
}
