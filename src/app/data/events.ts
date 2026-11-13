import { EventItem } from '../models/event';

// Optional publishAt: '2026-11-20T09:00:00-08:00' hides the event (banner, home, events)
// until that Pacific time. Omit it to show as soon as we deploy.

export const EVENTS: EventItem[] = [
    {
        id: 'e32',
        title: 'Up to play a game tonight?',
        date: '2026-11-13',
        time: '10:00 PM – 11:00 PM',
        location: 'Court 13, UBC Tennis Centre / Bubble',
        mapsUrl: 'https://maps.google.com/?q=UBC+Tennis+Centre,+6133+University+Blvd,+Vancouver,+BC+V6T+1Z1',
        description: `
            <ul>
            <li>Up to play a game tonight? We're happy to announce our next First-come, First-serve session, this time for levels 2.0/2.5!</li>
            <li>All you have to do is sign-up, show-up, and play- we take care of everything else.</li>
            <li>Each booking is designated solely for a specific skill-level.</li>
            </ul>
            <p>📢 We will do our best to give as much notice as possible (eg. release details/tickets the morning for evening bookings)</p>
            <p>🎟️ 4 tickets per booking</p>
            <p>✍️ Sign up below (limited!)</p>
            <p>💵 $10 per ticket</p>
            <p><br></p>
            <p>‼️ EXECUTIVE MEMBERS WILL NOT BE PRESENT AT THESE SESSIONS</p>
            <p>‼️ You must bring your own balls AND racket. Unfortunately, since our exec members are not present for these sessions, we are unable to provide balls.</p>
            <p><br></p>
            <p>🎾 <strong>DETAILS FOR TONIGHT'S BOOKING:</strong></p>
            <p><strong>When:</strong> 10-11 pm (Friday, November 13th)</p>
            <p><strong>Where:</strong> <a href="https://maps.google.com/?q=UBC+Tennis+Centre,+6133+University+Blvd,+Vancouver,+BC+V6T+1Z1" target="_blank" rel="noopener noreferrer">Court 13 @ UBC Tennis Centre/Bubble</a></p>
            <p><strong>What:</strong> This session is only for players who are levels 2.0/2.5</p>
            <p><br></p>
            <p><em>You will receive email confirmation before the event.</em></p>
        `,
        imageUrl: 'assets/pages/events-banners/fcfs-1.jpg?v=3',
        imageUrls: [
            'assets/pages/events-banners/fcfs-1.jpg?v=3',
            'assets/pages/events-banners/fcfs-2.jpg?v=3',
            'assets/pages/events-banners/fcfs-3.jpg?v=3',
        ],
        registrationStatus: 'Open',
        registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSf1YSdE30kbn6m5DhOZuWyzky_tTDPsvVobNaWiHjU-E8SrqA/viewform',
        memberPrice: 10,
        nonMemberPrice: 10,
        // 6:20 AM on 13 Nov 2026, UTC-7.
        publishAt: '2026-11-13T06:20:00-07:00',
    },
    {
        id: 'e31',
        title: '🎾 NEW TO TENNIS? 🎾',
        date: '2026-11-05',
        time: '4:00 PM – 5:00 PM',
        location: 'Tennis Courts at Dunbar Community Centre (4747 Dunbar St, Vancouver, BC V6S 2H2)',
        description: `
            <p>Come learn the basics with us!</p>
            <p>Prime Members get two free beginner lessons this 2026/2027 school year, and Lesson #2 is coming up!</p>
            <p><br></p>
            <p>📅 <strong>When:</strong> Thursday, November 5th from 4:00 - 5:00 pm</p>
            <p>📍 <strong>Where:</strong> Tennis Courts at Dunbar Community Centre (4747 Dunbar St, Vancouver, BC V6S 2H2)</p>
            <p>👥 <strong>Spots:</strong> 12 max (4 players per court, with a mentor exec on each)</p>
            <p><br></p>
            <p>Bring your own racket. Balls are provided!</p>
            <p>🔗 <a href="https://docs.google.com/forms/d/e/1FAIpQLSfEsAk-GLPJueUQWZIp7quCuNp5clvC7SVepAhQw8G4plTP0g/viewform" target="_blank" rel="noopener noreferrer">Sign up now</a>! You'll need a screenshot of your Prime membership card.</p>
        `,
        imageUrl: 'assets/pages/events-banners/primeBeginner2.jpg',
        registrationStatus: 'Open',
        registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfEsAk-GLPJueUQWZIp7quCuNp5clvC7SVepAhQw8G4plTP0g/viewform',
        memberPrice: 0,
        nonMemberPrice: -1,
    },
    {
        id: 'e30',
        title: 'Rumble Boxing',
        date: '2026-02-28',
        time: '1:30 PM',
        location: 'Rumble Boxing Studio Richmond',
        description: 'Tennis or boxing? Why choose? 😎 Join us for our February Social at Rumble Boxing Richmond!',
        imageUrl: 'assets/pages/events-banners/RumbleBoxingFeb.png',
        registrationStatus: 'Full',
        memberPrice: 0,
        nonMemberPrice: 0,
    },
    {
        id: 'e29',
        title: 'February Hitting Session',
        date: '2026-02-06',
        time: 'Session 1: 8-9 PM, Session 2: 9-10 PM',
        location: 'UBC Tennis Bubble (Courts 10, 11, 12, 13)',
        description: 'Join us for an exciting hitting session to ease the stress right before midterm week!',
        imageUrl: 'assets/pages/events-banners/HSFeb.png',
        registrationStatus: 'Full',
        memberPrice: 15,
        nonMemberPrice: 17,
    },
    {
        id: 'e28',
        title: 'UBC AMS Club Fair',
        date: '2026-01-29',
        time: '11:00 AM – 4:00 PM',
        location: 'AMS Nest Booth A24',
        description: 'Learn more about the club, our events, and to meet our execs! ',
        imageUrl: 'assets/pages/events-banners/fairS2.PNG',
        registrationStatus: 'Not Required',
        memberPrice: 0,
        nonMemberPrice: 0,
    },
    {
        id: 'e27',
        title: 'UBC AMS Club Fair',
        date: '2026-01-26',
        time: '11:00 AM – 4:00 PM',
        location: 'AMS Nest Booth B23',
        description: 'Learn more about the club, our events, and to meet our execs! ',
        imageUrl: 'assets/pages/events-banners/fairS2.PNG',
        registrationStatus: 'Not Required',
        memberPrice: 0,
        nonMemberPrice: 0,
    },
    {
        id: 'e26',
        title: 'Prime Member Beginner Session 2',
        date: '2026-01-27',
        time: '2:00 PM – 3:00 PM',
        location: 'Totem Outdoor Courts',
        description: 'PRIME MEMBERS ONLY!!\n',
        imageUrl: 'assets/pages/events-banners/BG2.png',
        registrationStatus: 'Full',
        memberPrice: 0,
        nonMemberPrice: -1,
    },
    {
        id: 'e25',
        title: 'Exam Season Hitting Session',
        date: '2025-12-12',
        time: '8:00 PM – 10:00 PM',
        location: 'UBC Tennis Bubble',
        description: 'Join us for a hitting session right before exam craziness starts!',
        imageUrl: 'assets/pages/events-banners/hs3.jpg',
        registrationStatus: 'Closed',
        memberPrice: 0,
        nonMemberPrice: 0,
    },
    {
        id: 'e24',
        title: 'Indoor Hitting Session',
        date: '2025-11-28',
        time: '8:00 PM – 10:00 PM',
        location: 'UBC Tennis Bubble',
        description: '🎾 Players will be given sponsor discounts, free drinks, and other prizes!',
        imageUrl: 'assets/pages/events-banners/hs4.PNG',
        registrationStatus: 'Closed',
        memberPrice: 0,
        nonMemberPrice: 0,
    },
    {
        id: 'e23',
        title: 'Prime Member Beginner Session 1',
        date: '2025-11-07',
        time: '1:00 PM – 2:00 PM',
        location: 'Kerrisdale Park Outdoor Courts',
        description: 'For Prime Members Only!',
        imageUrl: 'assets/pages/events-banners/BG1.png',
        registrationStatus: 'Closed',
        memberPrice: 0,
        nonMemberPrice: 0,
    },
    {
        id: 'e22',
        title: 'Indoor Hitting Session',
        date: '2025-10-24',
        time: '8:00 PM – 10:00 PM',
        location: 'UBC Tennis Center',
        description: '🎾 Introducing our first *indoor* hitting sessions of the year! 🎾',
        imageUrl: 'assets/pages/events-banners/hs2.jpg',
        registrationStatus: 'Closed',
        memberPrice: 0,
        nonMemberPrice: 0,
    },
    {
        id: 'e21',
        title: 'Arcade Night',
        date: '2025-10-10',
        time: '5:30 PM – 8:00 PM',
        location: 'ESPOT Arcade Richmond',
        description: 'Only 30 tickets are available, ticket will include: 15 game tokens, a wristband, unlimited access to pool tables, and pizza/drinks!🍕',
        imageUrl: 'assets/pages/events-banners/arcade.JPG',
        registrationStatus: 'Closed',
        memberPrice: 0,
        nonMemberPrice: 0,
    },
    {
        id: 'e20',
        title: 'Outdoor Tennis Hitting Session',
        date: '2025-10-08',
        time: '6:00 PM – 8:00 PM',
        location: 'Kerrisdale Park',
        description: '🧋 The first 10 participants to arrive receive free bubble tea!',
        imageUrl: 'assets/pages/events-banners/HSBanner1.JPG',
        registrationStatus: 'Closed',
        memberPrice: 0,
        nonMemberPrice: 0,
    },
    // {
    //     id: 'e1',
    //     title: 'Welcome Rally & Mixer',
    //     date: '2026-02-05',
    //     time: '6:00 PM – 8:30 PM',
    //     location: 'UBC Tennis Centre - Courts 1-4',
    //     description: 'Kick off the term with round-robin play, intros, and snacks.',
    //     imageUrl: 'https://picsum.photos/seed/tennis1/960/640',
    //     registrationStatus: 'Open',
    //     memberPrice: 0,
    //     nonMemberPrice: 0,
    // },
    // {
    //     id: 'e2',
    //     title: 'Doubles Strategy Workshop',
    //     date: '2026-02-12',
    //     time: '7:00 PM – 9:00 PM',
    //     location: 'UBC Tennis Centre - Court 6',
    //     description: 'Improve formations, signals, and court positioning with club coaches.',
    //     imageUrl: 'https://picsum.photos/seed/tennis2/960/640',
    //     registrationStatus: 'Open',
    //     memberPrice: 15,
    //     nonMemberPrice: 25,
    // },
    // {
    //     id: 'e3',
    //     title: 'Cardio Tennis Night',
    //     date: '2026-02-18',
    //     time: '6:30 PM – 7:45 PM',
    //     location: 'UBC Tennis Centre - Court 2',
    //     description: 'High-energy drills with music. All levels welcome.',
    //     imageUrl: 'https://picsum.photos/seed/tennis3/960/640',
    //     registrationStatus: 'Open',
    //     memberPrice: 10,
    //     nonMemberPrice: 18,
    // },
    // {
    //     id: 'e4',
    //     title: 'Social Ladder Night',
    //     date: '2026-02-24',
    //     time: '6:00 PM – 9:00 PM',
    //     location: 'UBC Tennis Centre - Courts 3-5',
    //     description: 'Challenge up the ladder, meet partners, win swag.',
    //     imageUrl: 'https://picsum.photos/seed/tennis4/960/640',
    //     registrationStatus: 'Open',
    //     memberPrice: 5,
    //     nonMemberPrice: 12,
    // },
    // {
    //     id: 'e5',
    //     title: 'UBC Open – Singles',
    //     date: '2026-03-03',
    //     time: 'All Day',
    //     location: 'UBC Tennis Centre',
    //     description: 'Day-long singles tournament with beginner, intermediate, advanced draws.',
    //     imageUrl: 'https://picsum.photos/seed/tennis5/960/640',
    //     registrationStatus: 'Open',
    //     memberPrice: 25,
    //     nonMemberPrice: 40,
    // },
    // {
    //     id: 'e6',
    //     title: 'Stringing 101 Workshop',
    //     date: '2026-03-09',
    //     time: '7:00 PM – 8:00 PM',
    //     location: 'AMS Studio',
    //     description: 'Learn string types, tensions, and racquet care basics.',
    //     imageUrl: 'https://picsum.photos/seed/tennis6/960/640',
    //     registrationStatus: 'Open',
    //     memberPrice: 20,
    //     nonMemberPrice: 30,
    // },
    // {
    //     id: 'e7',
    //     title: 'Mixed Doubles Social',
    //     date: '2026-03-16',
    //     time: '6:00 PM – 8:30 PM',
    //     location: 'UBC Tennis Centre - Courts 1-2',
    //     description: 'Fun social night. Snacks and prizes provided by sponsors.',
    //     imageUrl: 'https://picsum.photos/seed/tennis7/960/640',
    //     registrationStatus: 'Open',
    //     memberPrice: 8,
    //     nonMemberPrice: 15,
    // },
    // {
    //     id: 'e8',
    //     title: 'Season Wrap-up Rally',
    //     date: '2026-03-30',
    //     time: '6:30 PM – 9:00 PM',
    //     location: 'UBC Tennis Centre - Courts 7-8',
    //     description: 'Celebrate the term with free play, awards, and photos.',
    //     imageUrl: 'https://picsum.photos/seed/tennis8/960/640',
    //     registrationStatus: 'Open',
    //     memberPrice: 0,
    //     nonMemberPrice: 0,
    // },
];
