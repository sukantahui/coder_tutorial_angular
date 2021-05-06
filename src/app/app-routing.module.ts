import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {TutorialComponent} from './pages/tutorial/tutorial.component';
import {JavaComponent} from './pages/tutorial/java/java.component';
import {JavaHomeComponent} from './pages/tutorial/java/java-home/java-home.component';
import {JavThreadComponent} from './pages/tutorial/java/jav-thread/jav-thread.component';



// @ts-ignore
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tutorial', component: TutorialComponent},
  {path: 'java', component: JavaComponent,
    children: [
      {path: '', component: JavaHomeComponent, pathMatch: 'full'},
      {path: 'java-thread', component: JavThreadComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
