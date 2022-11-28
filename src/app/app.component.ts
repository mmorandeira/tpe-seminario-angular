import { Component } from '@angular/core';
import { CHARACTERS } from './mock-characters';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rick-and-morty';
  CHARACTERS = CHARACTERS.results
}
