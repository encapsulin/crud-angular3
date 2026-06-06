import { Routes } from '@angular/router';

// export const routes: Routes = [];

import { Compcenter } from './compcenter/compcenter';

export const routes: Routes = [
  { path: 'groups/:groupid', component: Compcenter },
  { path: 'items/:productid', component: Compcenter }
];
