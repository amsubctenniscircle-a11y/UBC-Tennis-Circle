import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  sending = false;
  error = '';

  constructor(sanitizer: DomSanitizer) {
    this.mapSrc = sanitizer.bypassSecurityTrustResourceUrl(
      `https://maps.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&z=16&output=embed`,
    );
  }

  async onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    if (!form.reportValidity()) return;

    this.sending = true;
    this.sent = false;
    this.error = '';

    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const subject = String(data.get('subject') || '').trim() || 'Website enquiry';
    const message = String(data.get('message') || '').trim();

    if (!SITE.web3formsAccessKey) {
      this.error = `Couldn't send that just now. Email ${SITE.email} and we'll get back to you.`;
      this.sending = false;
      return;
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: SITE.web3formsAccessKey,
          from_name: name,
          subject,
          name,
          email,
          replyto: email,
          message: `${message}\n\n—\nFrom: ${name}\nReply to: ${email}`,
        }),
      });
      const payload = await res.json().catch(() => ({} as { success?: boolean; message?: string }));
      if (!res.ok || payload.success !== true) {
        throw new Error(payload.message || 'Could not send your message.');
      }
      this.sent = true;
      form.reset();
    } catch {
      this.error = `Couldn't send that just now. Email ${SITE.email} and we'll get back to you.`;
    } finally {
      this.sending = false;
    }
  }
}
