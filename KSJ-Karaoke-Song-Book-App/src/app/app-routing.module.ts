import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SongsearchtableComponent } from './components/songsearchtable/songsearchtable.component';
import { SongMasterComponent } from './components/song-master/song-master.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'songSearch', component:SongsearchtableComponent},
  {path: 'songMaster', component:SongMasterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
