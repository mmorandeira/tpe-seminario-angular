import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Info, Character } from '../interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  private characterUrl = 'api/character'; 

  getCharacters(page:Number): Observable<Info<Character[]>> {
    return this.http.get<Info<Character[]>>(`${this.characterUrl}?page=${page}`);
  }

  getCharacter(id:number): Observable<Character> {
    return this.http.get<Character>(`${this.characterUrl}/${id}`);
  }

}
