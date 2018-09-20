import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SelectPartyComponent } from '../select-party/select-party.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private dialogResult = 'the result will go here';
  
  message: string = 'errormessagehere';
  
  constructor(public _dialog: MatDialog) { }

  ngOnInit() {
  }

  openSelectParty(){
    console.log('select Party Opened');
    
      const dialogConfig = new MatDialogConfig();
  
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
  
      dialogConfig.data = {
          surname : 'smith',
          date: '2018-01-01',
          error:'error Goes Here'
      };
        
      const dialogRef = this._dialog.open(SelectPartyComponent, dialogConfig);
  
      dialogRef.afterClosed().subscribe(
          data => {
            this.dialogResult = data           
            
          }

      );    
  }
}
