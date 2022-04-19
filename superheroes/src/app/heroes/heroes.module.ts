import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';

import { AddHeroeComponent } from './components/add-heroe/add-heroe.component';
import { SearchComponent } from './components/search/search.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { HeroeCardComponent } from './views/heroe-card/heroe-card.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { DialogComponent } from './views/dialog/dialog.component';




@NgModule({
  declarations: [
    AddHeroeComponent,
    SearchComponent,
    HeroeComponent,
    HomeComponent,
    ListComponent,
    HeroeCardComponent,
    ImagenPipe,
    DialogComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HeroesRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class HeroesModule { }
