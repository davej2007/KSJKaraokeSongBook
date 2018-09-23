import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPartyData } from '../model/party.model';

@Injectable({
  providedIn: 'root'
})
export class PartyService {
  private _host = 'http://localhost:8080/api/party/';
  private _newPartyURL= this._host+'newParty';
  private _selectPartyURL= this._host+'selectParty';
  private _detailPartyURL= this._host+'detailParty';

  constructor(private _http:HttpClient) { }

  newParty(party){
    return this._http.post<IPartyData>(this._newPartyURL, party)
  }
  selectParty(party){
    return this._http.post<IPartyData>(this._selectPartyURL, party)
  }
  detailParty(id){
    return this._http.get<IPartyData>(this._detailPartyURL+'/'+id);    
  }
  partySelected(){
    let id=localStorage.getItem('party');
    if (id==null || id==undefined){
      return false;
    } else {
      return true;
    }    
  }
}
