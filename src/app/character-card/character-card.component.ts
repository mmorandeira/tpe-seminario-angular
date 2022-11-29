import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../api/interfaces';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css'],
})
export class CharacterCardComponent implements OnInit {
  @Input()
  character: Character | undefined;

  constructor() {}

  ngOnInit(): void {}

  getSpeciesClasses(): string[] {
    const classes = ['img-specie'];
    if (this.character)
      classes.push(`img-specie-${this.character.species.toLowerCase()}`);
    return classes;
  }

  getStatusClasses(): string[] {
    const classes = ['info-status'];
    if(this.character)
      classes.push(`info-status-${this.character.status.toLowerCase()}`)
    return classes;
  }
}
