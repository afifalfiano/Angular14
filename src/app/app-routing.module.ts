import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './public/home/home.component';

const routes: Routes = [
  {path: 'home', loadChildren: () => import('./public/public.module').then(m => m.PublicModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
