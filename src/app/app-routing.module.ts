import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BirdsComponent } from './birds/birds.component';
import { DogsComponent } from './dogs/dogs.component';
import { CatsComponent } from './cats/cats.component';

const routes: Routes = [
 {path: 'birds', component:BirdsComponent},
 {path: 'dogs', component: DogsComponent },
 {path: 'cats', component: CatsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
