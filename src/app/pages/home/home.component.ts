import { Component, OnInit, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf, NgFor, DatePipe } from '@angular/common';
import type { EventItem } from '../../models/event';
import { DataService } from '../../services/data.service';
import { SkillGuideComponent } from '../../components/skill-guide.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [RouterLink, NgIf, NgFor, DatePipe, SkillGuideComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    template: `
<section class="relative w-full h-[100vh] overflow-hidden">
  <video
    autoplay
    muted
    loop
    playsinline
    class="absolute inset-0 w-full h-full object-cover"
    poster="assets/herov1.jpg"
  >
    <source src="assets/herov1.mp4" type="video/mp4">
    Your browser does not support HTML5 video.
  </video>

  <div class="relative z-18 flex flex-col justify-between items-center text-center h-full px-4 py-12">
    <div class="flex-1 flex flex-col justify-center items-center">
      <h1 class="text-white text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
        Join the Circle
      </h1>
      <p class="mt-4 text-white text-lg md:text-2xl opacity-90 max-w-2xl drop-shadow-md">
        The Largest Tennis Club at UBC
      </p>

      <div class="mt-8 flex flex-col sm:flex-row gap-6">
        <a routerLink="/join" class="btn-primary rounded-full px-12 py-5 text-xl font-semibold">
          Become a Member
        </a>
        <a routerLink="/events" class="btn-secondary rounded-full px-12 py-5 text-xl font-semibold">
          Browse Events
        </a>
      </div>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl w-full mb-8">
      <div class="card-hero-stat p-4 md:p-6">
        <div class="stat-icon-hero w-10 h-10 md:w-12 md:h-12 rounded-full mx-auto mb-2 md:mb-3 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
        <div class="text-2xl md:text-4xl font-bold text-white">200+</div>
        <div class="text-xs md:text-sm text-white/80 mt-1">Members</div>
      </div>

      <div class="card-hero-stat p-4 md:p-6">
        <div class="stat-icon-hero w-10 h-10 md:w-12 md:h-12 rounded-full mx-auto mb-2 md:mb-3 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
        </div>
        <div class="text-2xl md:text-4xl font-bold text-white">15+</div>
        <div class="text-xs md:text-sm text-white/80 mt-1">Events Per Year</div>
      </div>

      <div class="card-hero-stat p-4 md:p-6">
        <div class="stat-icon-hero w-10 h-10 md:w-12 md:h-12 rounded-full mx-auto mb-2 md:mb-3 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
        </div>
        <div class="text-2xl md:text-4xl font-bold text-white">{{ yearsRunning }}</div>
        <div class="text-xs md:text-sm text-white/80 mt-1">Years Running</div>
      </div>

      <div class="card-hero-stat p-4 md:p-6">
        <div class="stat-icon-hero w-10 h-10 md:w-12 md:h-12 rounded-full mx-auto mb-2 md:mb-3 flex items-center justify-center">
          <img src="assets/handshake.svg" alt="Handshake icon" class="w-5 h-5 md:w-6 md:h-6 brightness-0 invert" />
        </div>
        <div class="text-2xl md:text-4xl font-bold text-white">8</div>
        <div class="text-xs md:text-sm text-white/80 mt-1">Partners & Sponsors</div>
      </div>
    </div>
  </div>
</section>

<section class="section-white py-8">
  <div class="container text-center">
    <h2 class="text-2xl font-semibold text-[var(--ubc-deep-blue)] mb-6">Our Current Sponsors</h2>
    <div class="sponsors-scroller mt-2 pb-2">
      <div class="sponsors-track">
        <div class="sponsors-group">
          <div class="sponsor-card">
            <img src="assets/pages/partner logos/kintec.png" alt="Kintec" class="sponsor-logo" />
          </div>
          <div class="sponsor-card">
            <img src="assets/pages/partner logos/healWellness.png" alt="Heal Wellness" class="sponsor-logo" />
          </div>
          <div class="sponsor-card">
            <img src="assets/pages/partner logos/healthCraft.png" alt="Health Craft Clinic" class="sponsor-logo" />
          </div>
          <div class="sponsor-card">
            <img src="assets/pages/partner logos/racketsAndRunners.png" alt="Rackets & Runners" class="sponsor-logo" />
          </div>
        </div>
        <div class="sponsors-group">
          <div class="sponsor-card">
            <img src="assets/pages/partner logos/kintec.png" alt="Kintec" class="sponsor-logo" />
          </div>
          <div class="sponsor-card">
            <img src="assets/pages/partner logos/healWellness.png" alt="Heal Wellness" class="sponsor-logo" />
          </div>
          <div class="sponsor-card">
            <img src="assets/pages/partner logos/healthCraft.png" alt="Health Craft Clinic" class="sponsor-logo" />
          </div>
          <div class="sponsor-card">
            <img src="assets/pages/partner logos/racketsAndRunners.png" alt="Rackets & Runners" class="sponsor-logo" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    <section class="container mt-16">
        <div class="flex items-center justify-between mb-4">
            <div class="font-semibold text-2xl text-[color:#0b1a2e]">Upcoming Events</div>
            <a routerLink="/events" class="text-blue-600 font-semibold hover:underline">View all</a>
        </div>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div class="card overflow-hidden" *ngFor="let e of events">
                <div class="relative h-28 md:h-32 overflow-hidden bg-gray-100">
  <img
    [src]="e.imageUrl"
    [alt]="e.title"
    class="absolute inset-0 w-full h-full object-cover"
  />
  <div class="absolute inset-0 bg-black/30"></div>
  <div class="absolute top-3 left-3 bg-white text-[var(--ubc-deep-blue)] rounded-lg shadow px-3 py-2 text-center">
    <div class="text-2xl font-extrabold leading-none">{{ e.date | date:'d' }}</div>
    <div class="text-xs font-semibold tracking-wide">{{ e.date | date:'MMM' }}</div>
  </div>
  <div class="absolute top-3 right-3 bg-[var(--ubc-blue-600)] text-white text-xs font-semibold rounded-full px-3 py-1">
    {{ eventCategory(e) }}
  </div>
</div>
                <div class="p-5">
                    <div class="text-lg font-extrabold text-[var(--ubc-deep-blue)]">{{ e.title }}</div>
                    <div class="mt-3 grid gap-2 text-sm">
                        <div class="flex items-center gap-2">
                            <span class="text-blue-600 inline-flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                            </span>
                            <span>{{ e.time }}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-blue-600 inline-flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 5-9 13-9 13S3 15 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                            </span>
                            <span>{{ e.location }}</span>
                        </div>
                    </div>
                    <div class="mt-4 pt-3 border-t border-blue-100">
                      <ng-container *ngIf="e.registrationUrl; else viewEventsLink">
                        <a [href]="e.registrationUrl" target="_blank" rel="noopener noreferrer" class="btn-primary w-full text-center">Register Now</a>
                      </ng-container>
                      <ng-template #viewEventsLink>
                        <a routerLink="/events" class="btn-cta w-full text-center">View Event</a>
                      </ng-template>
                    </div>
                </div>
            </div>
        </div>
        <p *ngIf="events.length === 0" class="opacity-70">No upcoming events posted yet. Check back soon.</p>
    </section>

    <section class="container mt-16">
      <app-skill-guide [compact]="true"></app-skill-guide>
    </section>

    <section class="container mt-16">
      <h2 class="text-2xl font-semibold text-left text-[var(--ubc-deep-blue)] mb-8">Latest on Instagram</h2>
    </section>
    <div style="display:block;width:100vw;margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw);">
      <div class="px-4 sm:px-6 md:px-8 lg:px-0 xl:px-0">
        <div data-behold-id="aZ67gOlP79kXj6a5t6Nx"></div>
      </div>
    </div>

    <section class="container mt-16 pb-16">
      <a routerLink="/about-us" class="group block rounded-lg bg-gradient-to-r from-[var(--ubc-blue-600)] to-[var(--ubc-blue-300)] text-white p-6 shadow flex items-center justify-between hover:opacity-95 hover:shadow-lg transition">
        <div class="text-2xl md:text-3xl font-extrabold">Learn More About Our Team</div>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transform transition-transform group-hover:translate-x-0.5">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </a>
    </section>
    `,
})
export class HomeComponent implements OnInit, AfterViewInit {
    events: EventItem[] = [];
    yearsRunning = new Date().getFullYear() - 2016;

    constructor(private data: DataService) { }

    ngOnInit() {
      const all = this.data.events();
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      this.events = all
        .filter(e => {
          const [year, month, day] = e.date.toString().split('-').map(Number);
          const eventDate = new Date(year, month - 1, day);
          return eventDate >= today;
        })
        .sort(
          (a, b) =>
            new Date(a.date).getTime() - new Date(b.date).getTime()
        )
        .slice(0, 3);
    }

    ngAfterViewInit(): void {
        this.loadBeholdScript();
    }

    private loadBeholdScript(): void {
        const src = 'https://w.behold.so/widget.js';
        if (typeof document === 'undefined') return;
        const existing = document.querySelector(`script[src="${src}"]`);
        if (!existing) {
            const s = document.createElement('script');
            s.type = 'module';
            s.src = src;
            document.head.appendChild(s);
        }
    }

    eventCategory(e: EventItem): string {
        const t = (e.title || '').toLowerCase();
        if (t.includes('tournament') || t.includes('open')) return 'Tournament';
        if (t.includes('workshop') || t.includes('stringing')) return 'Workshop';
        if (t.includes('social') || t.includes('mixer')) return 'Social';
        if (t.includes('cardio')) return 'Fitness';
        if (t.includes('ladder')) return 'Ladder';
        if (t.includes('lesson') || t.includes('beginner')) return 'Lesson';
        return 'Event';
    }
}
