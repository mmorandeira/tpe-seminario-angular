import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CharacterFilter } from '../api/interfaces';

@Injectable({
  providedIn: 'root',
})
export class SearchStateService {
  constructor() {}

  private searchFilterSubject = new Subject<CharacterFilter>();

  searchFilter:Observable<CharacterFilter> = this.searchFilterSubject.asObservable();

  setSearchValue(searchValue: CharacterFilter): void {
    this.searchFilterSubject.next(searchValue);
  }
}
