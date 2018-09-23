import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs';
import { ISongData } from '../model/song.model';

@Injectable({
  providedIn: 'root'
})

export class SongService {

  private _host = 'http://localhost:8080/api/song/';
  private _songsUrl  = this._host+'allSongs';
  private _csvURL    = this._host+'importCsv';
  private _uploadURL = this._host+'newSong';

  constructor(private _http: HttpClient) { }
  
  getSongs(xmas): Observable<ISongData[]> {
    return this._http.get<ISongData[]>(this._songsUrl+'/'+xmas);
  }
  getCSVSongs(): Observable<ISongData[]> {
    return this._http.get<ISongData[]>(this._csvURL);
  }
  newSong(song): Observable<ISongData[]> {
    return this._http.post<ISongData[]>(this._uploadURL, song);
  }
}
