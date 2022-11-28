import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

const routes: Routes = [
  { path: "", redirectTo: "characters", pathMatch: "full" },
  { path: "characters", component: CharactersComponent },
  { path: "characters/:id", component: CharacterDetailComponent, data: {} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
