import { Component, OnInit } from '@angular/core';
import { CharacterFilter } from '../api/interfaces';
import { SearchStateService } from '../state/search-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  searchFilter: CharacterFilter = {
    page: 1
  };
  searchValue: string = '';
  searching: boolean = false;

  constructor(private searchStateService: SearchStateService) {}

  ngOnInit(): void {}

  onSearch(): void {
    if (this.searchFilter.name?.trim() !== '') {
      this.searching = true;
      this.searchFilter.page = 1;
      this.searchStateService.setSearchValue(this.searchFilter);
    }
  }

  onClear() {
    this.searching = false;
    this.searchFilter.name = '';
    this.searchFilter.page = 1;
    this.searchStateService.setSearchValue(this.searchFilter);
  }
}
