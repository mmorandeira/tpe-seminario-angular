import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../api/services/character.service';
import { Character, CharacterFilter } from '../api/interfaces';
import { SearchStateService } from '../state/search-state.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];

  filter: CharacterFilter = {
    name: '',
    page: 1,
  };

  pageSize = 20;
  collectionSize = 826;
  maxSize = 5;
  boundaryLinks = true;

  constructor(
    private characterService: CharacterService,
    private searchStateService: SearchStateService
  ) {
    searchStateService.searchFilter.subscribe((searchFilter) => {
      this.filter = searchFilter;
      this.updateCharacters();
    });
  }

  ngOnInit(): void {
    this.updateCharacters();
  }

  onPageChange(page: number) {
    this.filter.page = page;
    this.updateCharacters();
  }

  updateCharacters(): void {
    this.characterService
      .getCharacters(this.filter)
      .subscribe((infoCharacters) => {
        this.characters = infoCharacters.results ?? [];
        this.collectionSize = infoCharacters.info?.count ?? 0;
      });
  }
}
