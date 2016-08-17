import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home';
import { AboutRoutes } from './about';

const routes: Routes = [
  HomeRoutes,
  AboutRoutes
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
