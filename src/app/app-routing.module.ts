import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'links',
    loadChildren: () => import('./pages/links/links.module').then( m => m.LinksPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'lawyer-contact',
    loadChildren: () => import('./pages/lawyer-contact/lawyer-contact.module').then( m => m.LawyerContactPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./pages/services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'lawyers',
    loadChildren: () => import('./pages/lawyers/lawyers.module').then( m => m.LawyersPageModule)
  },
  {
    path: 'dicom',
    loadChildren: () => import('./pages/dicom/dicom.module').then( m => m.DicomPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./pages/calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./modals/checkout/checkout.module').then( m => m.CheckoutPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
