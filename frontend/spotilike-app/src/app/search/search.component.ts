import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  searchTerm: string = '';
  selectedOption: string = 'artist';
  showResults: boolean = false;
  searchResults: any;
  items: any[] = [];

  constructor(
    private authService: AuthService,
    private router: RouterModule,
    private route: ActivatedRoute,
    private r: Router,
    private location: Location
  ) {}

  goBack() {
    this.location.back();
  }

  search() {
    if (this.selectedOption === 'artist') {
      this.showResults = true;
      this.authService
        .searchItems(this.searchTerm, this.selectedOption)
        .subscribe(
          (response) => {
            this.searchResults = response.result;
            this.items = this.searchResults.artists.items;
          },
          (error) => {
            console.error(error);
          }
        );
    } else {
      this.showResults = true;
      this.authService
        .searchItems(this.searchTerm, this.selectedOption)
        .subscribe(
          (response) => {
            this.searchResults = response.result;
            this.items = this.searchResults.albums.items;
          },
          (error) => {
            console.error(error);
          }
        );
    }

    this.r.navigate([], {
      relativeTo: this.route,
      queryParams: { term: this.searchTerm, type: this.selectedOption },
      queryParamsHandling: 'merge',
    });
  }

  ngOnInit() {
    // Récupère les paramètres de l'URL
    this.route.queryParams.subscribe((params) => {
      this.searchTerm = params['term'] || '';
      this.selectedOption = params['type'] || 'artist';

      this.search();
    });
  }
}
