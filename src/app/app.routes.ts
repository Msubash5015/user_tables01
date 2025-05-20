import { Routes } from '@angular/router';
import { UserModule } from '../modules/user/user.module';

export const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () =>
      import('../modules/user/user.module').then((m) => m.UserModule),
  },
];
