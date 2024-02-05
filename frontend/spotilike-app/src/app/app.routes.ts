import { Routes } from '@angular/router';
import { ListAlbumsComponent } from './list-albums/list-albums.component';
import { DetailsAlbumComponent } from './displays/details-album/details-album.component';
import { LoginComponent } from './login/login.component';
import {userAuthGuard} from "../guard/user-auth.guard";

export const routes: Routes = [
{path: '', component: LoginComponent},
{path: 'albums',  component: ListAlbumsComponent, canActivate: [userAuthGuard], redirectTo: '' },
{path: 'album-details', component: DetailsAlbumComponent, canActivate: [userAuthGuard], redirectTo: '' }
];
