import {Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

import { ISongData } from '../../model/song.model';
import { SongService } from '../../services/song.service';
import { PartyService } from '../../services/party.service';

// @title Data table with sorting, pagination, and filtering.

@Component({
  selector: 'app-songsearchtable',
  templateUrl: './songsearchtable.component.html',
  styleUrls: ['./songsearchtable.component.css']
})
export class SongsearchtableComponent implements OnInit {
  displayedColumns: string[] = [ 'title', 'artist'];
  dataSource: MatTableDataSource<ISongData>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  private partyToken;
  message : string = '';

  constructor(private _songs:SongService,
      private _party:PartyService,
      private _router:Router) {  
  }

  ngOnInit() { 
    this.partyToken = localStorage.getItem('party');
    if(this.partyToken){
      this._party.detailParty(this.partyToken).subscribe(
        res => {
          this.message = 'Party Token Found';
          this._songs.getSongs(res.christmas)
            .subscribe(data => {      
              this.dataSource = new MatTableDataSource(data);
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
            });    
  
        },
        err => console.log(err)
      )
    } else {
      this._router.navigate(['/'])
    }
  }
  

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  makeARequest(requestID){
    console.log('make a request pressed', requestID);
  }
}