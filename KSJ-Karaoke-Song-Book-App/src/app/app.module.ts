import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
//   Material Module's
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
// Page Components
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { SelectPartyComponent } from './navbar/select-party/select-party.component';
import { PartyService } from './services/party.service';
import { SelectLoginComponent } from './navbar/select-login/select-login.component';
import { SongService } from './services/song.service';
import { SongsearchtableComponent } from './components/songsearchtable/songsearchtable.component';
import { SongMasterComponent } from './components/song-master/song-master.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SelectPartyComponent,
    SelectLoginComponent,
    SongsearchtableComponent,
    SongMasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
// Material Module
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,MatPaginatorModule,MatSortModule // for Tables
  ],
  entryComponents : [SelectPartyComponent, SelectLoginComponent],
  providers: [PartyService, SongService],
  bootstrap: [AppComponent]
})
export class AppModule { }
