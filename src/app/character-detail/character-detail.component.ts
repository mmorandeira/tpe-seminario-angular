import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character, Episode } from '../api/interfaces';
import { CharacterService } from '../api/services/character.service';
import { EpisodeService } from '../api/services/episode.service';

interface Seasons { [key: number]: Episode[] }

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],
})
export class CharacterDetailComponent implements OnInit {
  
  
  @Input()
  character: Character | undefined;

  

  episodes: any;
  seasons: Seasons = {};

  constructor(
    private characterService: CharacterService,
    private episodeService: EpisodeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (history.state.character) {
      this.character = history.state.character;
      this.createEpisodes(this.character?.episode ?? []);
    } else {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.characterService.getCharacter(id).subscribe((character) => {
        this.character = character;
        this.createEpisodes(character.episode);
      });
    }
  }

  getEpisodeIdFromUrl(url: string): number {
    return Number(url.substring(url.lastIndexOf('/') + 1));
  }

  getEpisode(episode:string): number {
    return Number(episode.substring(4,6));
  }

  getSeason(episode: string): number {
    return Number(episode.substring(1, 3));
  }

  getSeasonsObjectFromEpisodes(episodes:Episode[]):Seasons  {
    const seasons: Seasons = {};
    episodes.forEach((episode) => {
      const season = this.getSeason(episode.episode);
      if (season in seasons) seasons[season].push(episode);
      else seasons[season] = [episode];
    });
    return seasons;
  }

  createEpisodes(episodes: string[]) {
    const episodesIds: number[] = episodes.map((url) =>
      this.getEpisodeIdFromUrl(url)
    );
    if(episodesIds.length > 1) {
      this.episodeService.getEpisodes(episodesIds).subscribe((episodes) => {
        this.seasons = this.getSeasonsObjectFromEpisodes(episodes);
      });
    } else {
      this.episodeService.getEpisode(episodesIds[0]).subscribe((ep) => {
        this.seasons = this.getSeasonsObjectFromEpisodes([ep]);
      });
    }
    
  }
}
