import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';


export const routes: Routes = [
  {
    path: 'main-page',
    component: MainPageComponent
  },
  {
    path: '**',
    redirectTo: 'main-page' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
