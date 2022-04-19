import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHeroeComponent } from './components/add-heroe/add-heroe.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'add',
        component: AddHeroeComponent
      },
      {
        path: 'edit/:id',
        component: AddHeroeComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: ':id',
        component: HeroeComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild (routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
