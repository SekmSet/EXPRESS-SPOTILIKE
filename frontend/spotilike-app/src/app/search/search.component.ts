import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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

  constructor(private authService: AuthService, private router: RouterModule) {}

  search() {
    if (this.selectedOption === 'artist') {
      this.showResults = true;
      this.authService
        .searchItems(this.searchTerm, this.selectedOption)
        .subscribe(
          (response) => {
            this.searchResults = response.result;
            this.items = this.searchResults.artists.items;
            console.log(response.result);
            console.log(response.result.artists.items);
          },
          (error) => {
            console.error(error);
          }
        );
      console.log(`Searching for ${this.searchTerm} in ${this.selectedOption}`);
    } else {
      this.showResults = true;
      this.authService
        .searchItems(this.searchTerm, this.selectedOption)
        .subscribe(
          (response) => {
            this.searchResults = response.result;
            this.items = this.searchResults.albums.items;
            console.log(response.result);
            console.log(response.result.albums.items);
          },
          (error) => {
            console.error(error);
          }
        );
      console.log(`Searching for ${this.searchTerm} in ${this.selectedOption}`);
    } 
    
  }
}
