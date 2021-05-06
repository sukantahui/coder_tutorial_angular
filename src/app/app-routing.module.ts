import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {TutorialComponent} from './pages/tutorial/tutorial.component';


// @ts-ignore
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tutorial', component: TutorialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
