import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { AfkccComponent } from './components/projects/afkcc/afkcc.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: LandingComponent
  // },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: 'afkconsoleclient',
    component: AfkccComponent,
    data: { animation: 'Article' }
  },
  {
    path: '**',
    component: LandingComponent,
    data: { animation: 'Home' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
