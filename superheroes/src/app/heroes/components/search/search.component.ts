import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [`
  .mat-card {
    width:230px
  }
  .mat-card-image {
    width: 250px
  }
  `
  ]
})
export class SearchComponent implements OnInit {

  character: string = '';
  heroes: Heroe[] = [];
  heroeSelected: Heroe | undefined;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  searching(){
    this.heroesService.getQueries(this.character.trim())
        .subscribe(heroes => this.heroes = heroes)
  }

  option( event: MatAutocompleteSelectedEvent ){
    if(!event.option.value) {
      this.heroeSelected = undefined;
      return;
    }

    const heroe: Heroe = event.option.value
    this.character = heroe.superhero

    this.heroesService.getHeroesById(heroe.id!)
                      .subscribe(heroe => this.heroeSelected = heroe)
  }

}
