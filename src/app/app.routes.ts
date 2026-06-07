import { Routes } from '@angular/router';

// export const routes: Routes = [];

import { Compcenter } from './compcenter/compcenter';
import { StatsMain } from './compcenter/stats-main/stats-main';

export const routes: Routes = [
  { path: 'groups/:groupid', component: Compcenter },
  { path: 'items/:productid', component: Compcenter },
  { path: 'stats', component: StatsMain },
];
