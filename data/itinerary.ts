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
        description: 'Settle in before the evening. Montecasino is the recommended base — a 10-minute Uber from Bryanston Country Club.',
      },
      {
        time: '5:30pm – ~9:00pm',
        title: 'Welcome Drinks – Bryanston Country Club',
        description: 'Casual drinks and light nibbles to watch the sunset. Eat lunch beforehand — it\'s platters, not a full dinner. Group Ubers to Greenhouse JHB afterwards.',
        tips: [
          { type: 'important', text: 'Gate code: 039059. Follow signs for "Darren & Michael – Welcome to Joburg" to the Homestead Room.' },
          { type: 'important', text: 'Dress code: smart casual. Long pants for gentlemen — strictly enforced at both venues.' },
        ],
        links: [
          { icon: '🗺️', label: 'Bryanston Country Club', href: 'https://maps.google.com/?q=Bryanston+Country+Club+Johannesburg' },
        ],
      },
      {
        title: 'Late Night – Hanging Gardens of Babylon @ Greenhouse JHB',
        description: 'The inaugural "Hanging Gardens of Babylon" club night at Greenhouse JHB. Continue until late.',
        tips: [
          { type: 'important', text: 'Dress code: smart casual. Long pants strictly enforced here too.' },
        ],
        links: [
          { icon: '🎉', label: 'Event Details', href: 'https://www.greenhousejhb.co.za/events/hanging-gardens-of-babylon-feat-dean-fuel/' },
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
        time: '12:00pm',
        title: 'Arrive – Kruger Mpumalanga Airport (MQP)',
        description: 'Collect hire cars and drive as a group to Mjejane Private Game Reserve (~60 min). Do not drive from the airport at night due to roadworks.',
        tips: [
          { type: 'info', text: 'Standard cars are fine — a 4x4 is not required, though higher clearance is more comfortable.' },
        ],
        links: [
          { icon: '🚌', label: 'Airport Shuttle Options', href: 'https://www.kmiairport.co.za/shuttle-service-options/' },
        ],
      },
      {
        title: 'Check-In – Mjejane Private Game Reserve',
        description: 'Settle into your allocated villa. Do not walk between villas at night — animals are present. See villa allocations in the Accommodation section.',
        tips: [
          { type: 'important', text: 'Conservation levy: ZAR 350 per car payable by card on arrival (on top of accommodation already paid).' },
          { type: 'important', text: 'Complete the vehicle registration Google Form before arrival (deadline: 23 March).' },
          { type: 'warning', text: 'Do not drink the tap water — borehole water only. Use bottled water.' },
        ],
        links: [
          { icon: '🗺️', label: 'Villas & Key Locations Map', href: 'https://www.google.com/maps/d/edit?mid=1x8qTLwViaRoBqGJ9Ish1Bd71ufQ9acw&usp=sharing' },
          { icon: '📋', label: 'Vehicle Registration Form', href: 'https://forms.gle/7AqErevy9KEdeb4z5' },
        ],
      },
      {
        time: '5:30pm',
        title: 'Dinner – Kunye Lodge (Braai)',
        description: 'First of four nightly braais hosted at one of the lodges. Food provided; please bring your own drinks.',
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
        description: 'Ranger-led drive — best time for Big Five sightings. Pickup at your villa; return by ~9:00am. See game drive vehicle assignments below.',
        tips: [
          { type: 'info', text: 'Bring a light jacket — it\'s cold at dawn. Binoculars helpful but not essential.' },
          { type: 'info', text: 'Cost ~ZAR 200 / GBP 9 / AUD 18 per person, added to your villa bill at checkout.' },
          { type: 'warning', text: 'Let your vehicle leader know 24 hours in advance if you\'re not attending.' },
        ],
        links: [
          { icon: '📋', label: 'Game Drive Bookings (WhatsApp)', href: 'https://wa.me/27732789158' },
        ],
      },
      {
        title: 'Free Afternoon',
        description: 'Relax at your villa, take a swim, or explore the reserve. A self-drive into Kruger National Park is possible without prebooking (not guaranteed).',
      },
      {
        time: '3:30pm',
        title: 'Optional Afternoon Game Drive',
        description: 'Self-organised afternoon drive. Book directly with the reserve via WhatsApp — include your name and unit number.',
        links: [
          { icon: '📋', label: 'Book via WhatsApp', href: 'https://wa.me/27732789158' },
        ],
      },
      {
        time: '5:30pm',
        title: 'Dinner – Kierieklapper Lodge (Braai)',
        description: 'Second nightly braai. Food provided; bring your own drinks.',
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
        title: 'Group Self-Drive – Enter Kruger National Park',
        description: 'Full day self-drive into Kruger. Meet at the Mjejane Reserve gate at 5:30am. Reserved entry slot at Crocodile Bridge Gate between 5:30–7:30am.',
        tips: [
          { type: 'important', text: 'Entry fees payable by card at the gate: ZAR 134 (SA nationals) / ZAR 602 / GBP 28 / AUD 53 (foreigners). Bring your passport (SA nationals may use ID).' },
          { type: 'important', text: 'Exit before sunset — gates close ~6:00pm. A fine is levied for late departures.' },
          { type: 'important', text: 'No alcohol inside the park. Obey all speed limits.' },
          { type: 'warning', text: 'Mobile reception is intermittent inside the park.' },
        ],
      },
      {
        time: '~8:30–9:00am',
        title: 'Brunch – Nkuhlu Picnic Site',
        description: 'Group brunch on the banks of the Sabie River. Bring bacon, eggs, buns and oil from your starter pack — gas BBQs available to hire. Simple restaurant on site for those who prefer.',
        links: [
          { icon: '🗺️', label: 'Nkuhlu Picnic Site', href: 'https://maps.app.goo.gl/HnvqH5mT9y1tupJk9' },
        ],
      },
      {
        title: 'Lunch – Skukuza or Lower Sabie',
        description: 'Eat at your own convenience at one of two recommended spots inside the park.',
        links: [
          { icon: '🍽️', label: 'Cattle Baron @ Skukuza', href: 'https://maps.app.goo.gl/8rPXqfDoPVtnaCVCA' },
          { icon: '🍽️', label: 'Mugg & Bean Lower Sabie', href: 'https://share.google/NVSLLUybkuqEhk58Q' },
        ],
      },
      {
        time: '7:00pm',
        title: 'Dinner – Mvubu Lodge 11 (Braai)',
        description: 'Third nightly braai. Food provided; bring your own drinks.',
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
        description: 'Sleep in, take a dip, or enjoy a sunrise at the lodge. Last full day in the bush.',
      },
      {
        time: '3:30pm',
        title: 'Group Sunset Game Drive',
        description: 'Final ranger-led game drive, ending with sunset drinks. Pickup at your villa.',
        tips: [
          { type: 'info', text: 'Same cost and booking process as Monday — ~ZAR 200/person added to villa bill.' },
        ],
      },
      {
        time: '7:00pm',
        title: 'Farewell Dinner – Kunye Lodge (Braai)',
        description: 'Last night in the bush. Food provided; bring your own drinks. Pack tonight for the early departure tomorrow.',
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
        description: 'Check out of your villa — visit the on-site shop to complete the checkout process. Drive to Kruger Mpumalanga Airport and return hire cars.',
        tips: [
          { type: 'info', text: 'Check-in closes at 12:55pm — aim to leave by 11:00am.' },
        ],
      },
      {
        time: '1:25pm',
        title: 'Flight to Cape Town',
        description: 'Fly from Kruger Mpumalanga (MQP) to Cape Town International Airport.',
      },
      {
        time: '4:05pm',
        title: 'Arrive Cape Town',
        description: 'Land in Cape Town. Transfer to Stellenbosch (~30–50 min by Uber or hire car, depending on traffic).',
        links: [
          { icon: '🗺️', label: 'Cape Town Airport', href: 'https://maps.google.com/?q=Cape+Town+International+Airport' },
        ],
      },
      {
        title: 'First Thursdays – Stellenbosch',
        description: 'The group meets in Stellenbosch for First Thursdays — meeting point communicated closer to the time. For those staying in Cape Town, the parallel event is at Kloof Street House.',
        links: [
          { icon: '🍸', label: 'Kloof Street House (Cape Town)', href: 'https://www.kloofstreethouse.co.za/' },
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
        time: '9:30am',
        title: 'Optional: Buy Drinks for Die Strandloper',
        description: 'Liquor City and Checkers Liquor are a couple of minutes\' walk from the bus stop. Die Strandloper is BYOB with no corkage (but also has a bar).',
      },
      {
        time: '10:00am sharp',
        title: 'Bus Departs – Die Braak, Stellenbosch → Die Strandloper',
        description: 'Bus leaves Die Braak at 10:00am sharp for a 12:00pm start at Die Strandloper, Langebaan. Ten courses of fresh seafood cooked on an open braai. Bring swimwear, beach towel and open-toed shoes.',
        tips: [
          { type: 'info', text: 'Set menu: R440 / GBP 20 / AUD 38. Transfer to Darren/Michael in advance — they will prepay for the group.' },
          { type: 'info', text: 'Cape Town guests: Alexander Leighton (+44 7981 481607) has space leaving South Beach Camps Bay Hotel at 10am.' },
        ],
        links: [
          { icon: '🗺️', label: 'Meeting Point – Die Braak', href: 'https://www.google.com/maps/place/33%C2%B056\'13.3%22S+18%C2%B051\'30.1%22E/@-33.937025,18.858366,17z' },
          { icon: '🗺️', label: 'Die Strandloper', href: 'https://maps.google.com/?q=Die+Strandloper+Langebaan' },
        ],
      },
      {
        time: '~5:00pm',
        title: 'Return to Stellenbosch',
        description: 'Approximate return from Langebaan.',
      },
      {
        time: '5:00pm – 9:00pm',
        title: 'Boschendal Night Market',
        description: 'Evening at Boschendal\'s outdoor night market — food stalls, wine and live music on a wine estate (~20 min from central Stellenbosch). Kelly-Rain Green hosting drinks in central Stellenbosch afterwards.',
        tips: [
          { type: 'important', text: 'Tickets are FREE but go on "sale" Monday 30 March only — watch for the reminder to book yours.' },
        ],
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
        title: 'Table Mountain – Platteklip Gorge Hike',
        description: 'Meet at the lower cable car station at 8am. Group hikes up via Platteklip Gorge (~2.5–3 hours). Hikers can cable car back down. Those who prefer not to hike can take the cable car both ways.',
        tips: [
          { type: 'important', text: 'Bring 1–2 litres of water per person — no hydration points on the way up.' },
          { type: 'info', text: 'Cable car: R450 return / R295 one-way. Book online to skip queues (up to 3 hours without a booking).' },
          { type: 'warning', text: 'Cable car closes in strong winds — check status before heading out.' },
        ],
        links: [
          { icon: '🎟️', label: 'Book Cable Car Tickets', href: 'https://www.tablemountain.net/plan-your-visit/ticket-prices/' },
          { icon: '🗺️', label: 'Lower Cable Car Station', href: 'https://maps.google.com/?q=Table+Mountain+Aerial+Cableway' },
        ],
      },
      {
        title: 'Free Afternoon – V&A Waterfront',
        description: 'Explore the V&A Waterfront — restaurants, shopping and the harbour. Recommended: Willoughby\'s (sushi) and the Two Oceans Aquarium.',
        links: [
          { icon: '🗺️', label: 'V&A Waterfront', href: 'https://maps.google.com/?q=V%26A+Waterfront+Cape+Town' },
        ],
      },
      {
        time: '6:00pm',
        title: 'Wedding Party Dinner (Wedding Party Only)',
        description: 'Private dinner for the wedding party in Cape Town. Details communicated separately.',
        dresscode: 'Smart — blazer/jacket for men.',
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
        time: '8:00am',
        title: 'Breakfast – Lanzerac Wine Estate',
        description: 'Optional leisurely breakfast at Lanzerac, close to central Stellenbosch. Opens at 8am.',
        links: [
          { icon: '🗺️', label: 'Lanzerac Hotel', href: 'https://maps.google.com/?q=Lanzerac+Hotel+Stellenbosch' },
        ],
      },
      {
        time: '10:00–11:00am',
        title: 'Babylonstoren',
        description: 'One of the Cape\'s most beautiful farms. Wine tasting, two restaurants, olive oil tasting (booking may be required) and stunning gardens. Open 9am–6pm.',
        links: [
          { icon: '🗺️', label: 'Babylonstoren', href: 'https://maps.google.com/?q=Babylonstoren+Farm+Franschhoek' },
        ],
      },
      {
        title: 'More Wine Estates',
        description: 'Warwick is on the way back and worth a stop. Ernie Els and Spier are also highly recommended. Most estates need no reservation. Uber works well without a designated driver.',
        tips: [
          { type: 'info', text: 'Cape Town guests: Alexander Leighton (+44 7981 481607) has transport leaving South Beach Camps Bay in the early afternoon.' },
        ],
        links: [
          { icon: '🗺️', label: 'Warwick Estate', href: 'https://maps.google.com/?q=Warwick+Wine+Estate+Stellenbosch' },
        ],
      },
      {
        time: '5:30pm',
        title: 'Family BBQ & Paul Smyth\'s Birthday (Family Only)',
        description: 'Family braai and birthday celebration at Darren & Michael\'s accommodation. Details communicated separately.',
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
        description: 'Optional 9 or 18 holes at Devonvale Golf Course. Cost: R1,500 for 18 holes; R500 for club hire. Contact Stuart Chamberlain to join.',
        tips: [
          { type: 'info', text: 'Contact Stuart Chamberlain: +27 83 309 3245 (WhatsApp).' },
        ],
        links: [
          { icon: '🗺️', label: 'Devonvale Golf Estate', href: 'https://maps.google.com/?q=Devonvale+Golf+Estate+Stellenbosch' },
        ],
      },
      {
        title: 'Free Day',
        description: 'No set plans — explore Stellenbosch, hit the beach, tour Robben Island, visit Boulders Beach (African Penguins), browse art galleries, or do more wine tasting.',
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
        description: 'A relaxed morning to get ready for the big day.',
      },
      {
        time: '3:00pm',
        title: '💍 The Wedding – Cavalli Estate',
        description: 'The wedding of Darren & Michael at Cavalli Estate. Ceremony at 3pm, cocktail hour from 4:30pm, followed by dinner and dancing. Children welcome at the ceremony; adults only from the cocktail hour onwards.',
        dresscode: 'Black tie (tuxedo) or cocktail dress.',
        tips: [
          { type: 'important', text: 'Please arrive by 3pm — the ceremony begins promptly.' },
          { type: 'info', text: 'Cavalli is ~15 min drive from central Stellenbosch. Uber is widely available.' },
          { type: 'info', text: 'Childcare available — contact Wineland Nannies directly, mentioning Cavalli Estate on 7 April 2026.' },
        ],
        links: [
          { icon: '💒', label: 'Wedding Website', href: 'https://www.theknot.com/us/darren-allingham-and-michael-smyth-apr-2026' },
          { icon: '🗺️', label: 'Cavalli Estate', href: 'https://maps.google.com/?q=Cavalli+Estate+Stellenbosch' },
        ],
      },
      {
        time: '11:00pm – 3:00am',
        title: 'Shuttles Home',
        description: 'Shuttles running at regular intervals between Cavalli Estate and the recommended accommodation. No need to worry about a lift home.',
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
        description: 'Laid-back morning-after breakfast at TERRA rooftop in Stellenbosch. Come as you are, relive the highlights, and say your goodbyes.',
        links: [
          { icon: '🗺️', label: 'TERRA Rooftop', href: 'https://maps.google.com/?q=TERRA+Rooftop+Stellenbosch' },
        ],
      },
      {
        title: 'Safe Travels',
        description: 'Safe travels home, everyone. Thank you for sharing this adventure with Darren & Michael.',
      },
    ],
  },
];

export interface Villa {
  name: string;
  guests: string[];
}

export const villas: Villa[] = [
  { name: 'Kunye Lodge', guests: ['Darren A & Michael S', 'Sab R', 'Stuart C', 'Michael T & Greg B'] },
  { name: 'Kierieklapper Lodge', guests: ['Summer H & Harry B', 'Lucas H & Abigail B', 'Tim J-M & Mark J-M', 'Ezann K'] },
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