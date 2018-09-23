import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { SelectPartyComponent } from '../select-party/select-party.component';
import { SelectLoginComponent } from '../select-login/select-login.component';

import { PartyService } from '../../services/party.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private partyTitle: string;

  constructor(public _dialog: MatDialog,
              public _router:Router,
              public _party:PartyService) { }

  ngOnInit() {
    let id = localStorage.getItem('party');
    if (id==null || id==undefined){
      this.openSelectParty();
    } else {
      this.selectedPartyDetails(id);
    }
  }

  selectedPartyDetails(party){
    this._party.detailParty(party).subscribe(
      res => {
        this.partyTitle = res.title;
        this._router.navigate(['/songSearch']);
      },
      err => {
        this.partyTitle = '';
        this._router.navigate(['/']);
      }
    );
  }
  // KSJ Button Pressed - open Dialog Box
  openSelectParty(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {_id:'',surname : '',date: '',type:'',error : ''};
    const dialogRef = this._dialog.open(SelectPartyComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        if (data=='false'){
          localStorage.removeItem('party');
          this.selectedPartyDetails('');
        } else {
          localStorage.setItem('party', data);
          this.selectedPartyDetails(data);
        }
      }
    );    
  }
  // Log In Button Pressed - open Dialog Box
  openLogIn(){
    const dialogConfiglogin = new MatDialogConfig();  
    dialogConfiglogin.disableClose = true;
    dialogConfiglogin.autoFocus = true;
    dialogConfiglogin.data = {username:'', password:'',error:''};        
    const dialogRef = this._dialog.open(SelectLoginComponent, dialogConfiglogin);
    dialogRef.afterClosed().subscribe(
      data => {
        if (data=='false'){
          localStorage.removeItem('user');
          this._router.navigate(['/']);
        } else {
          localStorage.setItem('user', data);
          this._router.navigate(['/songMaster']);
        }
      }
    );
  }  
}