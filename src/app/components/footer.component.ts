import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../site';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="sticky mt-16 border-t border-white/10 bg-[color:#0b1a2e] text-white">
      <div class="container py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <img src="assets/logo_bg_removed.png" alt="UBC Tennis Circle Logo" class="h-20 mb-4" />
          <p class="opacity-80 leading-relaxed">{{ site.addressLine1 }}<br />{{ site.addressLine2 }}</p>
        </div>
        <div>
          <div class="font-semibold mb-2">Explore</div>
          <ul class="space-y-1 opacity-90">
            <li><a routerLink="/" class="hover:text-blue-300">Home</a></li>
            <li><a routerLink="/events" class="hover:text-blue-300">Events</a></li>
            <li><a routerLink="/gallery" class="hover:text-blue-300">Gallery</a></li>
            <li><a routerLink="/merch" class="hover:text-blue-300">Merch</a></li>
            <li><a routerLink="/faq" class="hover:text-blue-300">FAQ</a></li>
          </ul>
        </div>
        <div>
          <div class="font-semibold mb-2">The Club</div>
          <ul class="space-y-1 opacity-90">
            <li><a routerLink="/sponsor" class="hover:text-blue-300">Sponsorship</a></li>
            <li><a routerLink="/alumni" class="hover:text-blue-300">Alumni</a></li>
            <li><a routerLink="/about-us" class="hover:text-blue-300">About</a></li>
            <li><a routerLink="/contact" class="hover:text-blue-300">Contact</a></li>
            <li><a routerLink="/join" class="hover:text-blue-300">Join</a></li>
          </ul>
        </div>
        <div>
          <div class="font-semibold mb-2">Contact</div>
          <ul class="space-y-1 opacity-90">
            <li><a [href]="'mailto:' + site.email" class="hover:text-blue-300">Email</a></li>
            <li><a [href]="site.instagram" target="_blank" rel="noopener noreferrer" class="hover:text-blue-300">Instagram</a></li>
            <li><a [href]="site.facebook" target="_blank" rel="noopener noreferrer" class="hover:text-blue-300">Facebook</a></li>
            <li><a [href]="site.discord" target="_blank" rel="noopener noreferrer" class="hover:text-blue-300">Discord</a></li>
          </ul>
        </div>
      </div>
      <div class="container py-6 text-xs opacity-70 border-t border-white/10 text-center">© {{ year }} UBC Tennis Circle. All rights reserved.</div>
    </footer>
  `,
})
export class FooterComponent {
  year = new Date().getFullYear();
  site = SITE;
}
