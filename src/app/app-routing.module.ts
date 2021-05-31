import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { RaceComponent } from './race/race.component';

const routes: Routes = [
  {
    path: 'home',component:HomePage
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },{
    path: 'race', component: RaceComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
