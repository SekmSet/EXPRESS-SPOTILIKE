import { Routes } from '@angular/router';
import { ListAlbumsComponent } from './list-albums/list-albums.component';
import { DetailsAlbumComponent } from './displays/details-album/details-album.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { DetailsArtistComponent } from './displays/details-artist/details-artist.component';

export const routes: Routes = [
{path: '', component: LoginComponent},
{path: 'albums',  component: ListAlbumsComponent},
{path: 'search', component: SearchComponent},
{path: 'album-details/:id', component: DetailsAlbumComponent },
{path: 'artist-details/:id', component: DetailsArtistComponent}
];