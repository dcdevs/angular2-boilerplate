import { provideRouter, RouterConfig } from '@angular/router';

import { HomeRoutes } from './home';
import { AboutRoutes } from './about';

const routes: RouterConfig = [
  HomeRoutes,
  AboutRoutes
];
export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
