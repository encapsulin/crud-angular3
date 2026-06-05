import { Routes } from '@angular/router';

// export const routes: Routes = [];

import { Compgroups } from './compcenter/compgroups/compgroups';
import { Compitems } from './compcenter/compitems/compitems';

export const routes: Routes = [
  { path: 'groups', component: Compgroups },
  { path: 'items/:id', component: Compitems }
];
