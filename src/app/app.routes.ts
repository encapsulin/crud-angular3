import { Routes } from '@angular/router';

// export const routes: Routes = [];

import { Compgroups } from './compcenter/compgroups/compgroups';
import { Compcenter } from './compcenter/compcenter';

export const routes: Routes = [
  { path: 'groups/:groupid', component: Compgroups }
];
