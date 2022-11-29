import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../api/interfaces';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  @Input()
  character : Character | undefined;

  constructor() { }

  ngOnInit(): void {
    this.character = history.state.character;
    console.log(this.character);
  }

}
