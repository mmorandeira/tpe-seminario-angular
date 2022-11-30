import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Info, Character, CharacterFilter } from '../interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  private characterUrl = 'api/character';

  getCharacters(filter?: CharacterFilter): Observable<Info<Character[]>> {
    const params = new URLSearchParams(filter as Record<string, string>)
      .toString()
      .replace(/\w+=&/g, '')
      .replace(/&\w+=$/, '');
    return this.http.get<Info<Character[]>>(`${this.characterUrl}/?${params}`);
  }

  getCharacter(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.characterUrl}/${id}`);
  }
}
