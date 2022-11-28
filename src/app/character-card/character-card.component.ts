import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../interfaces';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

  @Input()
  character:Character | undefined;

  constructor() {
    
  }

  ngOnInit(): void {

  }

}
