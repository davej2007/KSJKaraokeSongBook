import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { IUserData } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private _host = 'http://localhost:8080/api/user/';
  private _newUserURL= this._host+'newUser';
  private _authUserURL= this._host+'authUser';
  
constructor (private _http:HttpClient){}

  newUser(user){
    return this._http.post<IUserData>(this._newUserURL, user)
  }
  authUser(user){
    return this._http.post<IUserData>(this._authUserURL, user)
  }
}
