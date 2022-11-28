import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Info, Character } from '../../interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  //
  private characterUrl = 'api/character'; 

  getCharacters(page:Number): Observable<Info<Character[]>> {
    return this.http.get<Info<Character[]>>(`${this.characterUrl}?page=${page}`);
  }
}
