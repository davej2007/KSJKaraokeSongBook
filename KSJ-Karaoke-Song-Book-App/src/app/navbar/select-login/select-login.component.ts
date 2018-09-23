import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-select-login',
  templateUrl: './select-login.component.html',
  styleUrls: ['./select-login.component.css']
})
export class SelectLoginComponent implements OnInit {
  data : {_id:string, username:string, password:string, error:string};
  constructor(private _user:UserService,
              private  dialogRef : MatDialogRef<SelectLoginComponent>, @Inject(MAT_DIALOG_DATA) data){this.data = data}

  ngOnInit(){    
  }

  onCloseConfirm(){
    let id=localStorage.getItem('user');
    if (!id){
      this._user.authUser(this.data).subscribe(
        res => {
          this.dialogRef.close(res._id)
        },
        err => {
          if (err.status===401){
            this.data.error = err.error;
          } else {
            this.data.error = "Error : Please Make Another Selection.";
          }
        }
      )
    } else {
      this.dialogRef.close(id);
    }
        
  }
  onCloseCancel(){
    this.dialogRef.close('false');
  }
}