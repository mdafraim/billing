import { AddInvoiceComponent } from './invoice/add-invoice/add-invoice.component';
import { EditInvoiceComponent } from './invoice/edit-invoice/edit-invoice.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { CustomerComponent } from './customer/customer.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './common/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { FooterLayoutComponent } from './layout/footer-layout/footer-layout.component';
import { LoginComponent } from './common/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'login',
  //   component: FooterLayoutComponent,
  //   children: [
  //     { path: '', component: LoginComponent },
  //   ]
  // }
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },

   // App routes goes here here
   {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'customer', component: CustomerComponent },
      { path: 'add-customer', component: AddCustomerComponent },
      { path: 'edit-customer/:id', component: EditCustomerComponent },
      { path: 'invoice', component: InvoiceComponent },
      { path: 'add-invoice', component: AddInvoiceComponent },
      { path: 'edit-invoice/:id', component: EditInvoiceComponent },
    ]
},

//no layout routes
{ path: 'login', component: LoginComponent},
{ path: 'signup', component: SignupComponent },
// otherwise redirect to home
{ path: '**', redirectTo: '' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
