import { Injectable, signal } from '@angular/core';
import { EVENTS } from '../data/events';
import { PRODUCTS } from '../data/products';
import { GALLERY } from '../data/gallery';
import { TEAM } from '../data/team';
import { FUN_FACTS } from '../data/facts';
import { EventItem, isPastEvent } from '../models/event';

@Injectable({ providedIn: 'root' })
export class DataService {
    events = signal(EVENTS);
    products = signal(PRODUCTS);
    gallery = signal(GALLERY);
    team = signal(TEAM);
    facts = signal(FUN_FACTS);

    nextUpcomingEvent(): EventItem | undefined {
        const upcoming = this.events()
            .filter(e => !isPastEvent(e))
            .sort((a, b) => this.eventDay(a.date) - this.eventDay(b.date));
        return upcoming.find(e => e.registrationStatus === 'Open') ?? upcoming[0];
    }

    private eventDay(date: string | Date): number {
        const [year, month, day] = date.toString().split('-').map(Number);
        return year && month && day ? new Date(year, month - 1, day).getTime() : new Date(date).getTime();
    }

    addMailingListEmail(_email: string) {
        // Placeholder for future API integration
        return true;
    }

    submitContact(_payload: { name: string; email: string; message: string }) {
        // Placeholder for future API integration
        return true;
    }
}
