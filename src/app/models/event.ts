export type RegistrationStatus = 'Open' | 'Closed' | 'Full' | 'Not Required';


export interface EventItem {
    id: string;
    title: string;
    date: string | Date; // ISO date string
    time: string; // e.g., '6:00 PM - 8:00 PM'
    location: string;
    mapsUrl?: string;
    description: string;
    imageUrl: string;
    // Extra photos for the events-page gallery. imageUrl stays the cover photo.
    imageUrls?: string[];
    registrationStatus: RegistrationStatus;
    registrationUrl?: string; // optional link to a registration form
    signupLinks?: { label: string; url: string }[];
    memberPrice?: number; // Member price in dollars, optional
    nonMemberPrice?: number; // Non-member price in dollars, optional
    // ISO datetime with offset, e.g. '2026-11-15T09:00:00-08:00'.
    // Omit to show as soon as the site deploys. Hidden everywhere until this time.
    publishAt?: string;
}

export function isPastEvent(e: EventItem): boolean {
    // Force local date parsing (YYYY-MM-DD)
    const [year, month, day] = e.date.toString().split('-').map(Number);

    // End of the event day in LOCAL time
    const eventEnd = new Date(year, month - 1, day, 23, 59, 59, 999);

    return new Date().getTime() > eventEnd.getTime();
}

export function isPublishedEvent(e: EventItem): boolean {
    if (!e.publishAt) return true;
    return Date.now() >= new Date(e.publishAt).getTime();
}

export function isListedUpcomingEvent(e: EventItem): boolean {
    return isPublishedEvent(e) && !isPastEvent(e);
}

export function eventImages(e: EventItem): string[] {
    const extras = (e.imageUrls ?? []).filter(Boolean);
    return extras.length ? extras : [e.imageUrl];
}



