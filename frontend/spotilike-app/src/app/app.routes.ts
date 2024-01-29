import { Routes } from '@angular/router';
import { ListAlbumsComponent } from './list-albums/list-albums.component';
import { DetailsAlbumComponent } from './displays/details-album/details-album.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
{path: '', component: LoginComponent},
{path: 'albums',  component: ListAlbumsComponent},
{path: 'album-details', component: DetailsAlbumComponent }
];