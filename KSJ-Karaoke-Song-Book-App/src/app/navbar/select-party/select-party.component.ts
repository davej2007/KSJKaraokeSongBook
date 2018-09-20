import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-select-party',
  templateUrl: './select-party.component.html',
  styleUrls: ['./select-party.component.css']
})
export class SelectPartyComponent implements OnInit {

  data : {};
  error : String;

  constructor(
    private  dialogRef : MatDialogRef<SelectPartyComponent>, @Inject(MAT_DIALOG_DATA) data){
      this.data = data
    }
  
   ngOnInit(){
     
   }
   
   onCloseConfirm(){
     console.log('save Button Pressed');
     this.dialogRef.close(this.data);
   }
   onCloseCancel(){
    console.log('Cancel Button Pressed');
    this.dialogRef.close('false');
   }
}