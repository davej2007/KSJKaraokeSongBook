import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PartyService } from '../../services/party.service';

@Component({
  selector: 'app-select-party',
  templateUrl: './select-party.component.html',
  styleUrls: ['./select-party.component.css']
})
export class SelectPartyComponent implements OnInit {

  data : { id:string, surname:string, date:string, type:string, error:string};

  constructor(
    private _party:PartyService,
    private  dialogRef : MatDialogRef<SelectPartyComponent>, @Inject(MAT_DIALOG_DATA) data){
      this.data = data
    }
  
   ngOnInit(){
   }
   
   onCloseConfirm(){
    this._party.selectParty(this.data).subscribe(
      res => this.dialogRef.close(res._id),
      err => {
        if (err.status===401){
          this.data.error = err.error;
        } else {
          this.data.error = "Error : Please Make Another Selection.";
        }
      }
    )    
   }
   onCloseCancel(){
    this.dialogRef.close('false');
   }
}