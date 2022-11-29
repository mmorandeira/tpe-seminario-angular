import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Info, Episode } from '../interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private http: HttpClient) { }

  private episodeUrl = 'api/episode';

  getEpisodes(ids:number[]): Observable<Episode[]> {
    return this.http.get<Episode[]>(`${this.episodeUrl}/${ids}`);
  }

  getEpisode(id:Number): Observable<Episode> {
    return this.http.get<Episode>(`${this.episodeUrl}/${id}`);
  }
}
