import { SecondComponent } from './components/second/second.component';
import { MainComponent } from './components/main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'second', component: SecondComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'nooz/:noozId/:countryName/:cityName', component: NoozComponent },
  { path: '**', redirectTo: 'main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
