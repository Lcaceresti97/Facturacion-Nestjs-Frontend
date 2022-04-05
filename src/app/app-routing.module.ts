import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from '../app/layouts/admin-layout/admin-layout.component';

export const Approutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'views',
        loadChildren: () => import('./views/views.module').then(m => m.ViewsModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/starter'
  }
];
