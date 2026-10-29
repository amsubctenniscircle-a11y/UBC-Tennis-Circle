import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
    { path: 'sponsor', loadComponent: () => import('./pages/sponsor/sponsor.component').then(m => m.SponsorComponent) },
    { path: 'join', loadComponent: () => import('./pages/join/join.component').then(m => m.JoinComponent) },
    { path: 'events', loadComponent: () => import('./pages/events/events').then(m => m.EventsComponent) },
    { path: 'merch', loadComponent: () => import('./pages/merch/merch.component').then(m => m.MerchComponent) },
    { path: 'gallery', loadComponent: () => import('./pages/gallery/gallery.component').then(m => m.GalleryComponent) },
    { path: 'about-us', loadComponent: () => import('./pages/team/team.component').then(m => m.TeamComponent) },
    { path: 'alumni', loadComponent: () => import('./pages/alumni/alumni.component').then(m => m.AlumniComponent) },
    { path: 'faq', loadComponent: () => import('./pages/faq/faq.component').then(m => m.FaqComponent) },
    { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
    { path: 'coming-soon', redirectTo: 'join' },
    { path: '**', redirectTo: '' },
];
