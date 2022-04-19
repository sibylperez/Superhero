import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { DialogComponent } from '../../views/dialog/dialog.component';

@Component({
  selector: 'app-add-heroe',
  templateUrl: './add-heroe.component.html',
  styles: [
    `
    img {
      width: 100%;
      border-radius: 5px
    }
    h4 {
      cursor: pointer
    }
    `
  ]
})
export class AddHeroeComponent implements OnInit {

  publisher = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    whoIs: '',
    history: '',
    alt_img: ''
  }

  constructor(private heroesService: HeroesService, private activatedRoute: ActivatedRoute, private router: Router, 
              private snackbar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit(): void {
    if(!this.router.url.includes('edit')){
      return
    }

    this.activatedRoute.params
                       .pipe(
                         switchMap( ({id}) => this.heroesService.getHeroesById(id))
                       )
                       .subscribe( heroe => this.heroe = heroe)
  }

  save(){
    if(this.heroe.superhero.trim().length === 0){
      return;
    }

    if (this.heroe.id) {
      this.heroesService.putHeroeById(this.heroe)
                        .subscribe(heroe => {
                          this.snackbarF('Updated register')
                        })
    } else {
      this.heroesService.postHeroes(this.heroe)
                        .subscribe(heroe => {
                          this.router.navigate(['heroe/edit', heroe.id])
                          this.snackbarF('New registe created')
                        })
    }
  }

  delete(){
    const dialog = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {...this.heroe}
    });

    dialog.afterClosed().subscribe(
      (result) => {
        if(result){
          this.heroesService.deleteHeroe(this.heroe.id!)
                            .subscribe(resp => {
                              this.router.navigate(['/heroe'])
                            })
        }
      }
    )
  }

  return(){
    this.router.navigate(['/heroe'])
  }

  snackbarF( msj: string){
    this.snackbar.open(msj, 'ok!', {
      duration: 2500
    })
  }

}
