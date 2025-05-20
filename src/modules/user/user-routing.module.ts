import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTableComponent } from './user-table/user-table.component';

const routes: Routes = [
  { path: '', redirectTo: 'user-table', pathMatch: 'full' },
  { path: 'user-table', component: UserTableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
