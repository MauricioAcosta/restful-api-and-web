import { LayoutComponent } from './layout/layout.component';
import { OnePersonComponent } from './one-person/one-person.component';
import { ListComponent } from './list/list.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
  },
  {
    path: 'add-person',
    component: AddPersonComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'one-person',
    component: OnePersonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
