import { Component, HostListener } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DataService } from '../services/data.service';
import { EventItem } from '../models/event';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass, NgIf, NgFor],
  template: `
  <header class="fixed top-0 left-0 right-0 z-50">
    <a
      *ngIf="nextEvent as event"
      class="block text-center text-xs sm:text-sm py-2 px-3 bg-[var(--ubc-blue-600)] text-white font-semibold tracking-wide hover:bg-[var(--ubc-blue-500)]"
      [href]="bannerHref(event)"
      [attr.target]="event.registrationUrl ? '_blank' : null"
      [attr.rel]="event.registrationUrl ? 'noopener noreferrer' : null"
    >
      {{ bannerLabel(event) }}
    </a>
    <div class="transition-colors duration-200" [ngClass]="lightNav ? 'bg-transparent' : 'bg-white/90 backdrop-blur shadow-sm'">
    <div class="container flex items-center justify-between py-2">
      <a [routerLink]="['/']" class="flex items-center">
        <img src="assets/logo_bg_removed.png" alt="UBC Tennis Club Logo" class="h-16 w-16 object-contain" />
      </a>
      <nav class="hidden xl:flex items-center gap-5 ml-auto">
        <a *ngFor="let link of links" [routerLink]="link.path" routerLinkActive="border-b-2 border-blue-600" [routerLinkActiveOptions]="link.exact ? { exact: true } : { exact: false }" class="font-semibold text-sm transition-colors pb-1 whitespace-nowrap" [ngClass]="lightNav ? 'text-white hover:text-blue-100' : 'text-gray-700 hover:text-blue-600'">{{ link.label }}</a>
        <a routerLink="/join" class="btn-primary rounded-full px-4 py-2 text-sm">Join</a>
      </nav>

      <button type="button" class="xl:hidden ml-auto inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" [ngClass]="lightNav ? 'text-white hover:text-blue-100' : 'text-gray-700 hover:text-blue-600'" aria-label="Toggle navigation" (click)="menuOpen = !menuOpen">
        <svg *ngIf="!menuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="6" x2="21" y2="6"/>
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
        <svg *ngIf="menuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>

    <div *ngIf="menuOpen" class="xl:hidden bg-white/95 backdrop-blur border-t border-blue-100 shadow-sm">
      <nav class="container py-3 grid gap-1">
        <a *ngFor="let link of links" (click)="closeMenu()" [routerLink]="link.path" routerLinkActive="text-blue-700" [routerLinkActiveOptions]="link.exact ? { exact: true } : { exact: false }" class="block px-2 py-2 rounded hover:bg-blue-50">{{ link.label }}</a>
        <a (click)="closeMenu()" routerLink="/join" class="btn-primary rounded-full px-4 py-2 text-center mt-2">Join</a>
      </nav>
    </div>
    </div>
  </header>
  `,
})
export class NavbarComponent {
  scrolled = false;
  menuOpen = false;
  isHome = false;
  links = [
    { path: '/', label: 'Home', exact: true },
    { path: '/events', label: 'Events', exact: false },
    { path: '/gallery', label: 'Gallery', exact: false },
    { path: '/merch', label: 'Merch', exact: false },
    { path: '/faq', label: 'FAQ', exact: false },
    { path: '/sponsor', label: 'Sponsorship', exact: false },
    { path: '/alumni', label: 'Alumni', exact: false },
    { path: '/about-us', label: 'About', exact: false },
    { path: '/contact', label: 'Contact', exact: false },
  ];
  get lightNav(): boolean { return this.isHome && !this.scrolled; }
  get nextEvent(): EventItem | undefined {
    return this.data.nextUpcomingEvent();
  }
  constructor(private router: Router, private data: DataService) {
    this.isHome = this.router.url === '/' || this.router.url === '';
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e) => {
      const url = (e as NavigationEnd).urlAfterRedirects;
      this.isHome = url === '/' || url === '';
    });
  }
  @HostListener('window:scroll') onScroll() {
    this.scrolled = window.scrollY > 0;
  }
  @HostListener('window:resize') onResize() {
    if (window.innerWidth >= 1280) this.menuOpen = false;
  }
  closeMenu() { this.menuOpen = false; }

  bannerHref(event: EventItem): string {
    return event.registrationUrl || '/events';
  }

  bannerLabel(event: EventItem): string {
    const title = event.title.replace(/\p{Extended_Pictographic}/gu, '').replace(/\s+/g, ' ').trim();
    const when = [this.shortDate(event.date), this.shortTime(event.time)].filter(Boolean).join(', ');
    const place = event.location.split('(')[0].replace(/^Tennis Courts at\s+/i, '').trim();
    const cta = event.registrationUrl ? 'Sign up →' : 'See details →';
    return `Upcoming: ${title} · ${when} · ${place} · ${cta}`;
  }

  private shortDate(date: string | Date): string {
    const raw = date.toString();
    const [year, month, day] = raw.split('-').map(Number);
    const dateObj = year && month && day ? new Date(year, month - 1, day) : new Date(date);
    return dateObj.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  }

  private shortTime(time: string): string {
    const compact = time
      .replace(/\s*:\s*00/g, '')
      .replace(/\s*–\s*/g, '–')
      .replace(/\s*-\s*/g, '–')
      .replace(/\s+/g, ' ')
      .trim();
    return compact.replace(/(\d+(?::\d+)?)\s*(AM|PM)\s*–\s*(\d+(?::\d+)?)\s*(AM|PM)/i, (_, start, startMeridiem, end, endMeridiem) => {
      if (startMeridiem.toUpperCase() === endMeridiem.toUpperCase()) {
        return `${start}–${end} ${endMeridiem.toUpperCase()}`;
      }
      return `${start} ${startMeridiem.toUpperCase()}–${end} ${endMeridiem.toUpperCase()}`;
    });
  }
}
