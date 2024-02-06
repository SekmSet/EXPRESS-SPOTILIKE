import { Routes } from '@angular/router';
import { ListAlbumsComponent } from './list-albums/list-albums.component';
import { DetailsAlbumComponent } from './displays/details-album/details-album.component';
import { LoginComponent } from './login/login.component';
import {userAuthGuard} from "../guard/user-auth.guard";
import { SearchComponent } from './search/search.component';
import { DetailsArtistComponent } from './displays/details-artist/details-artist.component';
import {UserProfilComponent} from "./user-profil/user-profil.component";
import {ErrorPageComponent} from "./error-page/error-page.component";

export const routes: Routes = [
{path: '', component: LoginComponent},
{path: 'albums',  component: ListAlbumsComponent, canActivate: [userAuthGuard], redirectTo: '' },
{path: 'search', component: SearchComponent,  canActivate: [userAuthGuard]},
{path: 'album-details/:id', component: DetailsAlbumComponent, canActivate: [userAuthGuard]},
{path: 'artist-details/:id', component: DetailsArtistComponent, canActivate: [userAuthGuard]},
{path: 'user', component: UserProfilComponent, canActivate: [userAuthGuard]},
{path: '**', component: ErrorPageComponent, canActivate: [userAuthGuard]},
];
