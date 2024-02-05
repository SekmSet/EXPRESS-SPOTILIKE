import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-details-artist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details-artist.component.html',
  styleUrl: './details-artist.component.scss'
})
export class DetailsArtistComponent implements OnInit{
artistDetails : any;
genres:any[]=[];

constructor(private route: ActivatedRoute, private authService: AuthService) { }

ngOnInit(): void {
  this.route.params.subscribe(params => {
      const artistId = params['id'];
      this.authService.getArtistById(artistId).subscribe(response => {
          this.artistDetails = response.result;
          this.genres = this.artistDetails.genres.toString();
          console.log(response.result);
      });
  });
}

}
