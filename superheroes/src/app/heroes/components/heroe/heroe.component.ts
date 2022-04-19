import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe

  constructor(private activedRoute: ActivatedRoute, private heroesService: HeroesService, private router: Router) { }

  ngOnInit(): void {

    this.activedRoute.params
    .pipe(
      switchMap(({id}) => this.heroesService.getHeroesById(id))
    )
    .subscribe( heroe => this.heroe = heroe)
  }

  back(){
    this.router.navigate(['/heroe/list'])
  }

}
