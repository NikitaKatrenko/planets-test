import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetComponent } from './planet/planet.component';


export const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent, canDeactivate: [AuthGuard] },
  { path: 'planets', component: PlanetsComponent },
  { path: 'planets/:name', component: PlanetComponent },
];
