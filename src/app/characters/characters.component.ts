import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../api/services/character.service';
import { Character } from '../api/interfaces';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  
  characters: Character[] = [];

  page = 1;
  pageSize = 20;
  collectionSize = 826;
  maxSize = 5;
  boundaryLinks = true;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.updateCharacters(this.page);
  }

  updateCharacters(page:number): void {
    this.page = page;
    this.characterService
      .getCharacters(this.page)
      .subscribe((infoCharacters) => {
        this.characters = infoCharacters.results ?? [];
      });
  }


}
