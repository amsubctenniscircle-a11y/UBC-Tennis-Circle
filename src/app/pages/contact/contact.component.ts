import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SITE } from '../../site';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  site = SITE;
  mapSrc: SafeResourceUrl;
  sent = false;
  nextUrl = '';

  constructor(sanitizer: DomSanitizer, route: ActivatedRoute) {
    this.mapSrc = sanitizer.bypassSecurityTrustResourceUrl(
      `https://maps.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&z=16&output=embed`,
    );
    this.sent = route.snapshot.queryParamMap.get('sent') === '1';
    if (typeof window !== 'undefined') {
      this.nextUrl = `${window.location.origin}/contact?sent=1`;
    }
  }
}
