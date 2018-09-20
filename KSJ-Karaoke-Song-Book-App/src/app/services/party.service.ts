import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPartyData } from '../model/party.model';

@Injectable({
  providedIn: 'root'
})
export class PartyService {
  private _host = 'Localhost:8080';
  private _newPartyURL= this._host+ '/api/party/newParty';
  private _selectPartyURL= this._host+'/api/party/selectParty';
  private _detailPartyURL= this._host+'/api/party/partyDetails';

  constructor(private _http:HttpClient) { }

  newParty(party){
    return this._http.post<IPartyData>(this._newPartyURL, party)
  }
  selectParty(party){
    return this._http.post<IPartyData>(this._selectPartyURL, party)
  }
}
