import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SplashComponent} from "./components/splash/splash.component";
import {LandingComponent} from "./landing/landing.component";

const routes: Routes = [
  { path: '', component: SplashComponent },  // default: splash screen
  { path: 'home', component: LandingComponent },  // actual landing page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
