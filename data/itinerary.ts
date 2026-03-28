export type CalloutType = 'info' | 'warning' | 'important';

export interface Callout {
  type: CalloutType;
  text: string;
}

export interface Link {
  icon: string;
  label: string;
  href: string;
}

export interface Activity {
  time?: string;
  title: string;
  description: string;
  tips?: Callout[];
  links?: Link[];
  dresscode?: string;
}

export interface Day {
  dayNumber: number;
  date: string;
  isoDate: string; // YYYY-MM-DD — used to filter upcoming days
  location: string;
  locationGroup: 'johannesburg' | 'kruger' | 'capetown' | 'wedding';
  emoji: string;
  activities: Activity[];
}

export const days: Day[] = [
  {
    dayNumber: 1,
    date: 'Saturday 28 March',
    isoDate: '2026-03-28',
    location: 'Johannesburg',
    locationGroup: 'johannesburg',
    emoji: '🌆',
    activities: [
      {
        title: 'Arrival & Check-In',
        description: 'Make your way to Johannesburg. Settle in and rest before the evening festivities.',
      },
      {
        time: '5:30pm',
        title: 'Welcome Drinks – Bryanston Country Club',
        description: 'Kick off the trip with welcome drinks at the beautiful Bryanston Country Club. A chance for everyone to meet and get acquainted before the adventure begins.',
        tips: [
          { type: 'info', text: 'Smart casual dress recommended.' },
        ],
        links: [
          { icon: '🗺️', label: 'Google Maps', href: 'https://maps.google.com/?q=Bryanston+Country+Club+Johannesburg' },
        ],
      },
      {
        title: 'Dinner – Greenhouse JHB',
        description: 'Dinner at Greenhouse, one of Johannesburg\'s finest dining experiences. Expect seasonal, locally sourced cuisine in a stunning garden setting.',
        links: [
          { icon: '🗺️', label: 'Google Maps', href: 'https://maps.google.com/?q=Greenhouse+Johannesburg' },
        ],
      },
    ],
  },
  {
    dayNumber: 2,
    date: 'Sunday 29 March',
    isoDate: '2026-03-29',
    location: 'Kruger',
    locationGroup: 'kruger',
    emoji: '✈️',
    activities: [
      {
        title: 'Fly to Kruger',
        description: 'Morning flight from Johannesburg to Kruger Mpumalanga International Airport. Collect your hire cars and begin the drive to the lodges.',
        tips: [
          { type: 'info', text: 'Car rental is required for Kruger. Standard cars are fine; higher clearance is more comfortable on dirt roads.' },
          { type: 'warning', text: 'Strictly obey all reserve speed limits — for safety and wildlife protection.' },
        ],
        links: [
          { icon: '🗺️', label: 'Kruger Mpumalanga Airport', href: 'https://maps.google.com/?q=Kruger+Mpumalanga+International+Airport' },
        ],
      },
      {
        title: 'Check-In – Mjejane Reserve',
        description: 'Settle into your allocated lodge on the Mjejane Private Game Reserve. See your villa assignments in the Accommodation section below.',
        tips: [
          { type: 'warning', text: 'Do NOT drink the tap water at Kruger — it is borehole water. Use bottled water for drinking and brushing teeth.' },
          { type: 'important', text: 'No alcohol permitted inside Kruger National Park gates.' },
        ],
      },
      {
        time: '5:30pm',
        title: 'Dinner – Kunye Lodge',
        description: 'Welcome dinner at Kunye Lodge. Relax, take in the African bush surroundings and enjoy the first of many incredible bush evenings.',
      },
    ],
  },
  {
    dayNumber: 3,
    date: 'Monday 30 March',
    isoDate: '2026-03-30',
    location: 'Kruger',
    locationGroup: 'kruger',
    emoji: '🦁',
    activities: [
      {
        time: '6:00am',
        title: 'Morning Game Drive',
        description: 'Early morning game drive — the best time to spot the Big Five. Meet your vehicle group at the designated meeting point. See game drive assignments below.',
        tips: [
          { type: 'info', text: 'Bring binoculars if you have them, plus a light jacket — it\'s cold at dawn.' },
          { type: 'info', text: 'Wear neutral colours (khaki, beige, olive). Avoid bright whites or reds.' },
        ],
        links: [
          { icon: '📋', label: 'Game Drive Bookings (WhatsApp)', href: 'https://wa.me/27732789158' },
        ],
      },
      {
        title: 'Free Afternoon',
        description: 'Return to your lodge for breakfast, rest, and a swim. Enjoy the pool and the sounds of the bush.',
      },
      {
        time: '3:30pm',
        title: 'Optional Afternoon Game Drive',
        description: 'An optional second game drive as the sun begins its descent. The golden hour light is spectacular for photography.',
      },
      {
        title: 'Dinner – Kierieklapper Lodge',
        description: 'Dinner at Kierieklapper Lodge. A relaxed bush dinner with fellow guests.',
      },
    ],
  },
  {
    dayNumber: 4,
    date: 'Tuesday 31 March',
    isoDate: '2026-03-31',
    location: 'Kruger National Park',
    locationGroup: 'kruger',
    emoji: '🐘',
    activities: [
      {
        time: '5:30am',
        title: 'Enter Kruger National Park – Self-Drive',
        description: 'A full day self-drive safari inside Kruger National Park. Set off at first light through the park gates and explore at your own pace.',
        tips: [
          { type: 'warning', text: 'Conservation levy: ZAR 350 per car payable at the gate.' },
          { type: 'important', text: 'No alcohol inside the park. Obey all speed limits.' },
          { type: 'info', text: 'Download the SANParks app for maps, bird/animal lists, and sighting updates.' },
        ],
        links: [
          { icon: '📋', label: 'Kruger Park Entry Form', href: 'https://www.sanparks.org/parks/kruger/' },
          { icon: '🗺️', label: 'Kruger Park Map', href: 'https://maps.google.com/?q=Kruger+National+Park' },
        ],
      },
      {
        title: 'Brunch – Nkuhlu Picnic Site',
        description: 'Stop at the Nkuhlu picnic site on the banks of the Sabie River for a self-catered brunch. Incredible birdlife and regular hippo sightings from the deck.',
        links: [
          { icon: '🗺️', label: 'Nkuhlu Picnic Site', href: 'https://maps.google.com/?q=Nkuhlu+Picnic+Site+Kruger' },
        ],
      },
      {
        title: 'Continue Self-Drive',
        description: 'Spend the afternoon driving the southern Kruger loop roads. Check the SANParks sightings board at rest camps for recent Big Five locations.',
      },
      {
        time: '7:00pm',
        title: 'Dinner – Mvubu Lodge 11',
        description: 'Dinner at Mvubu Lodge 11. A special bush evening with the group.',
      },
    ],
  },
  {
    dayNumber: 5,
    date: 'Wednesday 1 April',
    isoDate: '2026-04-01',
    location: 'Kruger',
    locationGroup: 'kruger',
    emoji: '🌅',
    activities: [
      {
        title: 'Free Morning',
        description: 'A relaxed morning at the lodge. Sleep in, take a dip, or enjoy a sunrise walk within the lodge grounds.',
      },
      {
        time: '3:30pm',
        title: 'Sunset Game Drive',
        description: 'Final game drive as the sun sets over the Lowveld. A magical way to say goodbye to the bush.',
      },
      {
        time: '7:00pm',
        title: 'Farewell Dinner – Kunye',
        description: 'Last night in the bush — a farewell dinner at Kunye Lodge. Time to swap game drive stories and pack for the move to Cape Town.',
        tips: [
          { type: 'info', text: 'Pack your bags tonight — early departure tomorrow.' },
        ],
      },
    ],
  },
  {
    dayNumber: 6,
    date: 'Thursday 2 April',
    isoDate: '2026-04-02',
    location: 'Travel Day',
    locationGroup: 'capetown',
    emoji: '✈️',
    activities: [
      {
        time: '11:00am',
        title: 'Check-Out & Drive to Airport',
        description: 'Check out of your Mjejane lodge and drive to Kruger Mpumalanga Airport. Return hire cars.',
      },
      {
        time: '1:25pm',
        title: 'Flight to Cape Town',
        description: 'Fly from Kruger to Cape Town International Airport.',
      },
      {
        time: '4:05pm',
        title: 'Arrive Cape Town',
        description: 'Land in Cape Town. Transfer to your accommodation and freshen up.',
        links: [
          { icon: '🗺️', label: 'Cape Town Airport', href: 'https://maps.google.com/?q=Cape+Town+International+Airport' },
        ],
      },
      {
        title: 'First Thursdays – Cape Town',
        description: 'Cape Town\'s famous First Thursdays event — galleries, restaurants and bars in the CBD stay open late. A fantastic introduction to the city\'s creative scene.',
        tips: [
          { type: 'info', text: 'De Waterkant and the V&A are great starting points. No bookings needed — just wander.' },
        ],
      },
    ],
  },
  {
    dayNumber: 7,
    date: 'Friday 3 April',
    isoDate: '2026-04-03',
    location: 'Cape Town',
    locationGroup: 'capetown',
    emoji: '🌊',
    activities: [
      {
        time: '10:00am',
        title: 'Die Strandloper – Langebaan',
        description: 'Board the bus at 10am for the legendary Die Strandloper open-air seafood braai on the beach at Langebaan. One of South Africa\'s most unique and celebrated dining experiences — multiple courses of fresh seafood served over several hours on the beach.',
        tips: [
          { type: 'info', text: 'Booking is essential — already arranged. Wear comfortable, casual clothes and shoes you don\'t mind getting sandy.' },
          { type: 'info', text: 'Bring sunscreen and a light layer for the sea breeze.' },
        ],
        links: [
          { icon: '🗺️', label: 'Die Strandloper', href: 'https://maps.google.com/?q=Die+Strandloper+Langebaan' },
        ],
      },
      {
        time: '5:00pm',
        title: 'Boschendal Night Market',
        description: 'An evening at Boschendal\'s wonderful outdoor night market. Local food stalls, wine, live music, and the spectacular Boschendal Estate as a backdrop.',
        links: [
          { icon: '🗺️', label: 'Boschendal Estate', href: 'https://maps.google.com/?q=Boschendal+Estate+Franschhoek' },
        ],
      },
    ],
  },
  {
    dayNumber: 8,
    isoDate: '2026-04-04',
    date: 'Saturday 4 April',
    location: 'Cape Town',
    locationGroup: 'capetown',
    emoji: '⛰️',
    activities: [
      {
        time: '8:00am',
        title: 'Table Mountain',
        description: 'Head up Table Mountain first thing to beat the crowds and catch the best visibility. Take the cable car up and hike any of the scenic paths across the top. Views over the Cape Peninsula are extraordinary.',
        tips: [
          { type: 'warning', text: 'Check the cable car status before you go — it closes in strong winds. Book tickets online to skip queues.' },
          { type: 'info', text: 'Wear layers — it\'s significantly cooler and windier on top.' },
        ],
        links: [
          { icon: '🎟️', label: 'Book Cable Car', href: 'https://www.tablemountain.net/tickets' },
          { icon: '🗺️', label: 'Google Maps', href: 'https://maps.google.com/?q=Table+Mountain+Aerial+Cableway' },
        ],
      },
      {
        title: 'V&A Waterfront – Afternoon',
        description: 'Spend the afternoon at the V&A Waterfront — shopping, restaurants, bars and the harbour. A great spot for a leisurely lunch and exploring Cape Town\'s waterfront.',
        links: [
          { icon: '🗺️', label: 'V&A Waterfront', href: 'https://maps.google.com/?q=V%26A+Waterfront+Cape+Town' },
        ],
      },
    ],
  },
  {
    dayNumber: 9,
    date: 'Sunday 5 April',
    isoDate: '2026-04-05',
    location: 'Stellenbosch',
    locationGroup: 'wedding',
    emoji: '🍷',
    activities: [
      {
        title: 'Breakfast – Lanzerac',
        description: 'A leisurely breakfast at the iconic Lanzerac Hotel in Stellenbosch. Set among the vineyards, it\'s one of the Cape Winelands\' most beautiful estates.',
        links: [
          { icon: '🗺️', label: 'Lanzerac Hotel', href: 'https://maps.google.com/?q=Lanzerac+Hotel+Stellenbosch' },
        ],
      },
      {
        title: 'Babylonstoren',
        description: 'Visit Babylonstoren — a spectacular farm garden, one of the oldest Cape Dutch farms in the Franschhoek Valley. Explore the extraordinary garden, taste their produce, and have lunch at Babel restaurant.',
        links: [
          { icon: '🗺️', label: 'Babylonstoren', href: 'https://maps.google.com/?q=Babylonstoren+Farm+Franschhoek' },
        ],
      },
      {
        title: 'Wine Tasting – Warwick',
        description: 'Wine tasting at Warwick Estate, famous for its exceptional red blends and the iconic Three Cape Ladies wine. Beautiful vineyard views and a relaxed setting.',
        links: [
          { icon: '🗺️', label: 'Warwick Estate', href: 'https://maps.google.com/?q=Warwick+Wine+Estate+Stellenbosch' },
        ],
      },
    ],
  },
  {
    dayNumber: 10,
    date: 'Monday 6 April',
    isoDate: '2026-04-06',
    location: 'Stellenbosch',
    locationGroup: 'wedding',
    emoji: '⛳',
    activities: [
      {
        title: 'Golf – Devonvale (Optional)',
        description: 'Optional round of golf at Devonvale Golf & Wine Estate. A beautiful 18-hole course set in the Bottelary Hills.',
        tips: [
          { type: 'info', text: 'Contact Stuart Chamberlain to join: +27 83 309 3245' },
        ],
        links: [
          { icon: '🗺️', label: 'Devonvale Golf Estate', href: 'https://maps.google.com/?q=Devonvale+Golf+Estate+Stellenbosch' },
        ],
      },
      {
        title: 'Free Day',
        description: 'A free day to rest, explore Stellenbosch town, visit more wine estates, or simply relax before the big day tomorrow. The town centre has excellent restaurants, galleries, and boutique shops.',
        tips: [
          { type: 'info', text: 'Get a good night\'s sleep — the wedding starts at 3pm tomorrow.' },
        ],
      },
    ],
  },
  {
    dayNumber: 11,
    date: 'Tuesday 7 April',
    isoDate: '2026-04-07',
    location: 'Stellenbosch',
    locationGroup: 'wedding',
    emoji: '💍',
    activities: [
      {
        title: 'Morning – Rest & Get Ready',
        description: 'A relaxed morning to get ready for the wedding. Enjoy breakfast at your accommodation.',
      },
      {
        time: '3:00pm',
        title: '💍 The Wedding – Cavalli Estate',
        description: 'The wedding of Darren & Michael at the magnificent Cavalli Estate. Arrive by 3pm. The ceremony, cocktails, dinner and dancing await.',
        dresscode: 'Smart/Formal — garden setting, keep heels in mind (there may be lawn). Embrace the Cape summer.',
        tips: [
          { type: 'important', text: 'Please arrive by 3pm — the ceremony begins promptly.' },
          { type: 'info', text: 'Shuttles will be running from 11pm to 3am — no one needs to worry about driving home.' },
        ],
        links: [
          { icon: '🗺️', label: 'Cavalli Estate', href: 'https://maps.google.com/?q=Cavalli+Estate+Stellenbosch' },
        ],
      },
      {
        time: '11:00pm – 3:00am',
        title: 'Shuttles Home',
        description: 'Shuttles running throughout the night from Cavalli Estate back to your accommodation.',
        tips: [
          { type: 'info', text: 'Contact Alexander Leighton for Cape Town transport queries: +44 7981 481607' },
        ],
      },
    ],
  },
  {
    dayNumber: 12,
    date: 'Wednesday 8 April',
    isoDate: '2026-04-08',
    location: 'Stellenbosch',
    locationGroup: 'wedding',
    emoji: '☀️',
    activities: [
      {
        time: '9:30am – 12:00pm',
        title: 'Recovery Breakfast – TERRA Rooftop',
        description: 'A laid-back morning-after breakfast at TERRA rooftop. Relive the highlights, say your goodbyes, and ease into the journey home.',
        tips: [
          { type: 'info', text: 'Come as you are — sunglasses and coffee are the dress code.' },
        ],
        links: [
          { icon: '🗺️', label: 'TERRA Rooftop', href: 'https://maps.google.com/?q=TERRA+Rooftop+Stellenbosch' },
        ],
      },
      {
        title: 'Safe Travels',
        description: 'Safe travels home, everyone. Thank you for sharing this adventure with Darren & Michael. What a trip.',
      },
    ],
  },
];

export interface Villa {
  name: string;
  guests: string[];
}

export const villas: Villa[] = [
  { name: 'Kunye Lodge', guests: ['Darren A & Michael S', 'Sab R', 'Stuart C'] },
  { name: 'Kierieklapper Lodge', guests: ['Summer H & Harry B', 'Lucas H & Abigail B', 'Michael T & Greg B', 'Tim J-M & Mark J-M', 'Ezann K'] },
  { name: 'Unit 15 / Mvubu Lodge 11', guests: ['Kitty V & Paul S', 'Julie C', 'Moira C & Vaughan C', 'Ashleigh T & Brendon T (& CJ)', 'Punita C (& Jia)', 'Kiran K & Nidhisha K'] },
  { name: 'Unit 19', guests: ['Michael W & James C', 'Brit P', 'Pav R & Lucas M', 'Samara B & Tom A'] },
  { name: 'Unit 20', guests: ['Alex M & Becca C', 'Andy R & Kat', 'Callan B & Joshua H-T', 'Will H & Peyton L'] },
  { name: 'Unit 81', guests: ['Brian A & Trish V-W', 'JP C & Steph S', 'Michael C', 'Ben W & Maddix H'] },
];

export interface GameDriveGroup {
  vehicle: number;
  lodge: string;
  leader: string;
  members: string[];
}

export const gameDriveGroups: GameDriveGroup[] = [
  { vehicle: 1, lodge: 'Kunye', leader: 'Darren A', members: ['Michael S', 'Sab R', 'Hugh O', 'Zoe L', 'Stuart C', 'Michael T', 'Greg B'] },
  { vehicle: 2, lodge: 'Kierieklapper', leader: 'Summer H', members: ['Harry B', 'Lucas H', 'Abigail B', 'Tim J-M', 'Mark J-M', 'Ezann K', 'Brendan T'] },
  { vehicle: 3, lodge: '15 / Mvubu Lodge 11', leader: 'Kitty V', members: ['Paul S', 'Julie C', 'Punita C/Jiya', 'Moira C', 'Vaughan C', 'Ashleigh T/Calvin'] },
  { vehicle: 4, lodge: '20 / 15', leader: 'Samara B', members: ['Tom A', 'Pav R', 'Lucas M', 'Callan B', 'Joshua H-T', 'Will H', 'Peyton L'] },
  { vehicle: 5, lodge: '19', leader: 'James C', members: ['Michael W', 'Brit P', 'Alex M', 'Becca C', 'Andy R', 'Kat'] },
  { vehicle: 6, lodge: '81', leader: 'Brian A', members: ['Trish V-W', 'JP C', 'Steph C', 'Michael C', 'Ben W', 'Maddix H', 'Kirin K', 'Nidhisha K'] },
];
