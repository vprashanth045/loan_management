import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { NewUserComponent } from './auth/new-user/new-user.component';
import { HomeComponent } from './component/home/home.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: NewUserComponent },
  { path: 'forgot-password', component: ForgotComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'customers',
    loadChildren: () =>
      import('./modules/customers/customers.module').then((m) => m.CustomersModule),
  },
  {
    path: 'payments',
    loadChildren: () =>
      import('./modules/payments/payments.module').then((m) => m.PaymentsModule),
  },
  {
    path: 'loans',
    loadChildren: () =>
      import('./modules/loans/loans.module').then((m) => m.LoansModule),
  },
  {
    path: 'invoices',
    loadChildren: () =>
      import('./modules/invoices/invoices.module').then((m) => m.InvoicesModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./modules/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./modules/settings/settings.module').then((m) => m.SettingsModule),
  },
  {
    path: 'loan-types',
    loadChildren: () =>
      import('./modules/loan-types/loan-types.module').then((m) => m.LoanTypesModule),
  },
  { path: 'reports', loadChildren: () => import('./modules/reports/reports.module').then(m => m.ReportsModule) },
  { path: 'activity-audit', loadChildren: () => import('./modules/audit-log/audit-log.module').then(m => m.AuditLogModule) },
  {
    path: '**',
    // redirectTo: '',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
