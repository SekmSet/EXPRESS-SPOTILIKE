import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'app-details-album',
  standalone: true,
  imports: [],
  templateUrl: './details-album.component.html',
  styleUrl: './details-album.component.scss'
})
export class DetailsAlbumComponent implements OnInit {
albumDetails : any ;

constructor(private route: ActivatedRoute, private authService: AuthService) { }

ngOnInit(): void {
  this.route.params.subscribe(params => {
      const albumId = params['id'];
      this.authService.getAlbumById(albumId).subscribe(response => {
          this.albumDetails = response.result;
          console.log(response.result);
      });
  });
}
}
