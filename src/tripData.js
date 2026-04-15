// Mongolia Obon 2026 — Trip data for the Palantir-style command center dashboard.
// Two route options (ゴビCore / 八湖Core) are modeled as "families" so the
// existing route-comparison UI works out of the box.

const ULN_COORDINATES = { lat: 47.9077, lng: 106.9050 }

export const TRIP_META = {
  title: 'Mongolia Obon 2026',
  subtitle: 'Aug 7–16 — Perseid Meteor Shower × Drone Expedition',
  commandName: 'Mongolia Command Center',
  airbnb: {
    name: 'Ulaanbaatar Base',
    url: null,
    manualUrl: null,
    location: 'Ulaanbaatar, Mongolia',
    checkIn: 'Aug 7 (Thu) arrival 19:15',
    checkOut: 'Aug 16 (Sat) departure 14:05',
    gateNote: null,
    parkingNote: null,
    directionsNote: 'Fly MIAT OM502 NRT→ULN 14:40→19:15',
    lockNote: null,
    wifiNetwork: null,
    wifiPassword: null,
    hostName: null,
    coHostName: null,
    guestSummary: '1 adult (solo)',
    confirmationCode: null,
    vehicleFee: null,
  },
}

export const MAP_POINTS = [
  {
    id: 'uln',
    label: 'Ulaanbaatar',
    caption: 'Base / Start & End',
    familyId: 'all',
    focusDay: 'all',
    tone: 'success',
    position: ULN_COORDINATES,
  },
  {
    id: 'ubn-airport',
    label: 'UBN Airport',
    caption: 'Chinggis Khaan Intl',
    familyId: 'all',
    focusDay: 'd01',
    tone: 'muted',
    position: { lat: 47.8432, lng: 106.7672 },
  },
  {
    id: 'baga-gazriin',
    label: 'Baga Gazriin Chuluu',
    caption: 'Rock formations',
    familyId: 'gobi-core',
    focusDay: 'd02',
    tone: 'info',
    position: { lat: 46.2333, lng: 106.0500 },
  },
  {
    id: 'tsagaan-suvarga',
    label: 'Tsagaan Suvarga',
    caption: 'White Stupa / Gobi',
    familyId: 'all',
    focusDay: 'd03',
    tone: 'warning',
    position: { lat: 44.7583, lng: 104.4667 },
  },
  {
    id: 'yolyn-am',
    label: 'Yolyn Am',
    caption: 'Eagle Valley',
    familyId: 'gobi-core',
    focusDay: 'd04',
    tone: 'info',
    position: { lat: 43.5000, lng: 104.0833 },
  },
  {
    id: 'khongor',
    label: 'Khongor Sand Dunes',
    caption: '★ Perseid peak site (Gobi)',
    familyId: 'gobi-core',
    focusDay: 'd06',
    tone: 'critical',
    position: { lat: 43.7500, lng: 102.2500 },
  },
  {
    id: 'bayanzag',
    label: 'Bayanzag',
    caption: 'Flaming Cliffs',
    familyId: 'gobi-core',
    focusDay: 'd07',
    tone: 'warning',
    position: { lat: 44.1167, lng: 103.7167 },
  },
  {
    id: 'arvaikheer',
    label: 'Arvaikheer',
    caption: 'Central transit hub',
    familyId: 'eight-lakes-core',
    focusDay: 'd03',
    tone: 'muted',
    position: { lat: 46.2647, lng: 102.7760 },
  },
  {
    id: 'kharkhorin',
    label: 'Kharkhorin / Erdene Zuu',
    caption: '108 stupas monastery',
    familyId: 'gobi-core',
    focusDay: 'd08',
    tone: 'info',
    position: { lat: 47.1972, lng: 102.8278 },
  },
  {
    id: 'orkhon-falls',
    label: 'Orkhon Waterfall',
    caption: 'Drone S-tier',
    familyId: 'eight-lakes-core',
    focusDay: 'd04',
    tone: 'critical',
    position: { lat: 46.7833, lng: 101.9667 },
  },
  {
    id: 'eight-lakes',
    label: 'Naiman Nuur (Eight Lakes)',
    caption: '★ Perseid peak site (Horse)',
    familyId: 'eight-lakes-core',
    focusDay: 'd06',
    tone: 'critical',
    position: { lat: 46.8333, lng: 101.4167 },
  },
  {
    id: 'tsetserleg',
    label: 'Tsetserleg',
    caption: 'Resupply town',
    familyId: 'eight-lakes-core',
    focusDay: 'd07',
    tone: 'muted',
    position: { lat: 47.4778, lng: 101.4528 },
  },
  {
    id: 'khorgo',
    label: 'Khorgo Volcano',
    caption: 'Volcano hike + drone',
    familyId: 'eight-lakes-core',
    focusDay: 'd08',
    tone: 'info',
    position: { lat: 48.1667, lng: 99.8333 },
  },
  {
    id: 'white-lake',
    label: 'Terkhiin Tsagaan Nuur',
    caption: 'White Lake sunset',
    familyId: 'eight-lakes-core',
    focusDay: 'd08',
    tone: 'info',
    position: { lat: 48.1500, lng: 99.7167 },
  },
  {
    id: 'tuvkhun',
    label: 'Tuvkhun Monastery',
    caption: 'Mountain temple',
    familyId: 'all',
    focusDay: 'all',
    tone: 'muted',
    position: { lat: 47.0167, lng: 102.1167 },
  },
  {
    id: 'tsenkher',
    label: 'Tsenkher Hot Springs',
    caption: 'Hot springs',
    familyId: 'all',
    focusDay: 'all',
    tone: 'muted',
    position: { lat: 47.2833, lng: 101.7167 },
  },
  {
    id: 'khustai',
    label: 'Khustai National Park',
    caption: 'Przewalski horses',
    familyId: 'all',
    focusDay: 'all',
    tone: 'muted',
    position: { lat: 47.7000, lng: 107.0833 },
  },
]

export const MAP_ROUTES = [
  {
    id: 'route-gobi-core',
    familyId: 'gobi-core',
    focusDay: 'all',
    tone: 'warning',
    path: [
      ULN_COORDINATES,
      { lat: 46.2333, lng: 106.0500 }, // Baga Gazriin Chuluu
      { lat: 44.7583, lng: 104.4667 }, // Tsagaan Suvarga
      { lat: 43.5000, lng: 104.0833 }, // Yolyn Am
      { lat: 43.7500, lng: 102.2500 }, // Khongor
      { lat: 44.1167, lng: 103.7167 }, // Bayanzag
      { lat: 47.1972, lng: 102.8278 }, // Kharkhorin
      ULN_COORDINATES,
    ],
  },
  {
    id: 'route-eight-lakes-core',
    familyId: 'eight-lakes-core',
    focusDay: 'all',
    tone: 'critical',
    dashed: true,
    path: [
      ULN_COORDINATES,
      { lat: 44.7583, lng: 104.4667 }, // Tsagaan Suvarga
      { lat: 46.2647, lng: 102.7760 }, // Arvaikheer
      { lat: 46.7833, lng: 101.9667 }, // Orkhon Falls
      { lat: 46.8333, lng: 101.4167 }, // Eight Lakes
      { lat: 47.4778, lng: 101.4528 }, // Tsetserleg
      { lat: 48.1667, lng: 99.8333 },  // Khorgo
      { lat: 48.1500, lng: 99.7167 },  // White Lake
      ULN_COORDINATES,
    ],
  },
]

export const MAP_FACILITIES = [
  {
    id: 'ubn-airport-facility',
    label: 'UBN Airport',
    caption: 'Chinggis Khaan International',
    category: 'logistics',
    position: { lat: 47.8432, lng: 106.7672 },
  },
  {
    id: 'uln-supply',
    label: 'ULN Supply',
    caption: 'Gear / food resupply before departure',
    category: 'logistics',
    position: { lat: 47.9200, lng: 106.9170 },
  },
]

export const NAV_ITEMS = [
  { id: 'itinerary', label: 'Itinerary' },
  { id: 'stay', label: 'Stay' },
  { id: 'meals', label: 'Meals' },
  { id: 'activities', label: 'Activities' },
  { id: 'expenses', label: 'Expenses' },
  { id: 'families', label: 'Routes' },
]

export const DAYS = [
  {
    id: 'd01',
    shortLabel: 'Thu 8/07',
    title: 'Day 1 — Arrival',
    weather: 'Clear',
    temperature: '22°C',
    caution: 'Low',
  },
  {
    id: 'd02',
    shortLabel: 'Fri 8/08',
    title: 'Day 2 — First Drive',
    weather: 'Sunny',
    temperature: '28°C',
    caution: 'Low',
  },
  {
    id: 'd03',
    shortLabel: 'Sat 8/09',
    title: 'Day 3 — Steppe / Gobi Transition',
    weather: 'Sunny',
    temperature: '30°C',
    caution: 'Low',
  },
  {
    id: 'd04',
    shortLabel: 'Sun 8/10',
    title: 'Day 4 — Deep Country',
    weather: 'Sunny',
    temperature: '32°C',
    caution: 'Low',
  },
  {
    id: 'd05',
    shortLabel: 'Mon 8/11',
    title: 'Day 5 — Core Start',
    weather: 'Clear',
    temperature: '30°C',
    caution: 'Low',
  },
  {
    id: 'd06',
    shortLabel: 'Tue 8/12',
    title: 'Day 6 — ⭐ PERSEID PEAK',
    weather: 'Clear',
    temperature: '28°C',
    caution: 'Critical',
  },
  {
    id: 'd07',
    shortLabel: 'Wed 8/13',
    title: 'Day 7 — Post-Perseid',
    weather: 'Partly Cloudy',
    temperature: '26°C',
    caution: 'Low',
  },
  {
    id: 'd08',
    shortLabel: 'Thu 8/14',
    title: 'Day 8 — Cultural / Scenic',
    weather: 'Partly Cloudy',
    temperature: '24°C',
    caution: 'Low',
  },
  {
    id: 'd09',
    shortLabel: 'Fri 8/15',
    title: 'Day 9 — Return Drive',
    weather: 'Sunny',
    temperature: '26°C',
    caution: 'Medium',
  },
  {
    id: 'd10',
    shortLabel: 'Sat 8/16',
    title: 'Day 10 — Departure',
    weather: 'Sunny',
    temperature: '24°C',
    caution: 'Low',
  },
]

export const TIME_SLOTS = ['00', '06', '12', '18']

export const INITIAL_FAMILIES = [
  {
    id: 'gobi-core',
    name: 'ゴビCore',
    origin: 'Ulaanbaatar',
    shortOrigin: 'ULN',
    status: 'Option A',
    eta: 'Aug 7 19:15',
    driveTime: '~280 km/day avg',
    headcount: '1 solo + driver + guide',
    vehicle: 'Land Cruiser',
    responsibility: 'Travel Gobi Mongolia ($980)',
    readiness: 60,
    routeSummary: 'ULN → Baga Gazriin → Tsagaan Suvarga → Yolyn Am → Khongor (PERSEID) → Bayanzag → Kharkhorin → ULN',
    checklist: [
      { id: 'flight-booked', label: 'MIAT OM502 booked (¥113,600)', done: true },
      { id: 'tour-booked', label: 'Travel Gobi Mongolia confirmed', done: false },
      { id: 'drone-reg', label: 'Drone registration (MCAA)', done: false },
      { id: 'star-gear', label: 'Star photography gear ready', done: false },
    ],
  },
  {
    id: 'eight-lakes-core',
    name: '八湖Core',
    origin: 'Ulaanbaatar',
    shortOrigin: 'ULN',
    status: 'Option B',
    eta: 'Aug 7 19:15',
    driveTime: '~200 km/day avg',
    headcount: '1 solo + driver + guide + horse guide',
    vehicle: 'Land Cruiser + horses',
    responsibility: 'Amicus Mongolia (~$790+)',
    readiness: 40,
    routeSummary: 'ULN → Tsagaan Suvarga → Arvaikheer → Orkhon Falls → Eight Lakes (PERSEID, by horse) → Tsetserleg → Khorgo → White Lake → ULN',
    checklist: [
      { id: 'flight-booked', label: 'MIAT OM502 booked (¥113,600)', done: true },
      { id: 'tour-booked', label: 'Amicus Mongolia confirmed', done: false },
      { id: 'horse-prep', label: 'Horse trekking experience check', done: false },
      { id: 'drone-reg', label: 'Drone registration (MCAA)', done: false },
    ],
  },
]

export const ITINERARY_ROWS = [
  {
    id: 'travel',
    label: 'Transit',
    segments: [
      { id: 'flight-in', familyId: 'all', start: 0.6, span: 0.4, color: 'success', label: 'NRT→ULN flight' },
      { id: 'gobi-drive-d02', familyId: 'gobi-core', start: 4, span: 2.5, color: 'warning', label: 'ULN→Baga Gazriin 280km' },
      { id: 'gobi-drive-d03', familyId: 'gobi-core', start: 8, span: 2, color: 'warning', label: '→Tsagaan Suvarga' },
      { id: 'gobi-drive-d04', familyId: 'gobi-core', start: 12, span: 2, color: 'warning', label: '→Yolyn Am' },
      { id: 'gobi-drive-d05', familyId: 'gobi-core', start: 16, span: 2.5, color: 'warning', label: '→Khongor Dunes' },
      { id: 'gobi-drive-d07', familyId: 'gobi-core', start: 24, span: 2, color: 'warning', label: '→Bayanzag' },
      { id: 'gobi-drive-d08', familyId: 'gobi-core', start: 28, span: 3, color: 'warning', label: '→Kharkhorin' },
      { id: 'gobi-drive-d09', familyId: 'gobi-core', start: 32, span: 3, color: 'warning', label: '→ULN' },
      { id: 'lakes-drive-d02', familyId: 'eight-lakes-core', start: 4.2, span: 2.3, color: 'critical', label: 'ULN→Tsagaan Suvarga' },
      { id: 'lakes-drive-d03', familyId: 'eight-lakes-core', start: 8.2, span: 1.5, color: 'critical', label: '→Arvaikheer' },
      { id: 'lakes-drive-d04', familyId: 'eight-lakes-core', start: 12.2, span: 1.5, color: 'critical', label: '→Orkhon Falls' },
      { id: 'lakes-drive-d08', familyId: 'eight-lakes-core', start: 28.2, span: 2, color: 'critical', label: '→Khorgo / White Lake' },
      { id: 'lakes-drive-d09', familyId: 'eight-lakes-core', start: 32.2, span: 3, color: 'critical', label: 'White Lake→ULN 560km' },
      { id: 'flight-out', familyId: 'all', start: 36.6, span: 0.4, color: 'success', label: 'ULN→NRT flight' },
    ],
  },
  {
    id: 'activities',
    label: 'Main Ops',
    segments: [
      { id: 'arrival-ops', start: 0, span: 4, color: 'success', label: 'Arrival + ULN prep' },
      { id: 'gobi-explore-d02', start: 4, span: 4, color: 'warning', label: 'Baga Gazriin rock drone' },
      { id: 'gobi-explore-d03', start: 8, span: 4, color: 'warning', label: 'Tsagaan Suvarga sunset drone' },
      { id: 'gobi-explore-d04', start: 12, span: 4, color: 'info', label: 'Yolyn Am / Orkhon Falls' },
      { id: 'core-start', start: 16, span: 4, color: 'critical', label: '★ Core Start — Dunes / Horse' },
      { id: 'perseid-peak', start: 20, span: 4, color: 'critical', label: '⭐ PERSEID PEAK NIGHT' },
      { id: 'post-perseid', start: 24, span: 4, color: 'info', label: 'Bayanzag / Tsetserleg' },
      { id: 'cultural-day', start: 28, span: 4, color: 'info', label: 'Kharkhorin / Khorgo' },
      { id: 'return-drive', start: 32, span: 4, color: 'muted', label: 'Return to ULN' },
      { id: 'departure-ops', start: 36, span: 4, color: 'success', label: 'Departure day' },
    ],
  },
  {
    id: 'support',
    label: 'Drone / Star',
    segments: [
      { id: 'drone-d02', start: 5, span: 1.5, color: 'info', label: 'Drone: rock formations' },
      { id: 'drone-d03', start: 10, span: 1.5, color: 'warning', label: 'Drone: White Stupa sunset' },
      { id: 'star-d03', start: 11.5, span: 0.5, color: 'violet', label: '★ Star #1' },
      { id: 'drone-d04', start: 14, span: 1.5, color: 'info', label: 'Drone: canyon / waterfall' },
      { id: 'star-d04', start: 15.5, span: 0.5, color: 'violet', label: '★ Star #2 pre-Perseid' },
      { id: 'perseid-star', start: 23, span: 1, color: 'critical', label: '⭐ PERSEID METEOR PEAK' },
      { id: 'drone-d07', start: 26, span: 1.5, color: 'info', label: 'Drone: cliffs / volcano' },
      { id: 'drone-d08', start: 30, span: 1.5, color: 'info', label: 'Drone: monastery / lake' },
      { id: 'drone-d09', start: 34, span: 1, color: 'muted', label: 'Drone: last grassland flight' },
    ],
  },
]

export const INITIAL_MEALS = [
  { id: 'meal-d01', day: 'Day 1 (8/7 Thu)', meal: 'ULN restaurant dinner', owner: 'Solo', status: 'Assigned', note: 'First night dinner in Ulaanbaatar. Mongolian BBQ or Korean.' },
  { id: 'meal-d02', day: 'Day 2 (8/8 Fri)', meal: 'Ger camp meals', owner: 'Camp', status: 'Assigned', note: 'Lunch en route. Dinner at Baga Gazriin ger camp.' },
  { id: 'meal-d03', day: 'Day 3 (8/9 Sat)', meal: 'Nomad ger stay meals', owner: 'Nomad family', status: 'Assigned', note: 'Tsagaan Suvarga area. Authentic nomad family meals.' },
  { id: 'meal-d04', day: 'Day 4 (8/10 Sun)', meal: 'Ger camp meals', owner: 'Camp', status: 'Assigned', note: 'Yolyn Am / Arvaikheer area meals.' },
  { id: 'meal-d05', day: 'Day 5 (8/11 Mon)', meal: 'Camp meals + prep', owner: 'Camp', status: 'Assigned', note: 'Khongor / Orkhon area. Prep for Perseid night.' },
  { id: 'meal-d06', day: 'Day 6 (8/12 Tue)', meal: 'Khorkhog (stone-cooked lamb)', owner: 'Guide', status: 'Assigned', note: '★ PERSEID DAY. Special Mongolian stone BBQ for the peak night celebration.' },
  { id: 'meal-d07', day: 'Day 7 (8/13 Wed)', meal: 'Camp / trail meals', owner: 'Camp', status: 'Assigned', note: 'Post-Perseid travel day meals.' },
  { id: 'meal-d08', day: 'Day 8 (8/14 Thu)', meal: 'Town restaurant', owner: 'Solo', status: 'Pending', note: 'Kharkhorin or Khorgo area. First proper restaurant in days.' },
  { id: 'meal-d09', day: 'Day 9 (8/15 Fri)', meal: 'Road meals + ULN dinner', owner: 'Solo', status: 'Pending', note: 'Long drive day. Quick lunch stops. Celebration dinner in ULN.' },
  { id: 'meal-d10', day: 'Day 10 (8/16 Sat)', meal: 'ULN breakfast', owner: 'Solo', status: 'Pending', note: 'Last breakfast before departure flight.' },
]

export const INITIAL_EXPENSES = [
  { id: 'exp-flight', label: 'Flight MIAT OM502/509 (round trip)', payer: 'Toshiya', amount: 113600, split: 'JPY — booked', settled: true },
  { id: 'exp-gobi-tour', label: 'ゴビCore tour (Travel Gobi Mongolia)', payer: 'Toshiya', amount: 980, split: 'USD — Option A', settled: false },
  { id: 'exp-lakes-tour', label: '八湖Core tour (Amicus Mongolia)', payer: 'Toshiya', amount: 790, split: 'USD — Option B estimate', settled: false },
  { id: 'exp-driver', label: 'Driver / fuel (~$100/day × 6)', payer: 'Toshiya', amount: 600, split: 'USD — included in tour or separate', settled: false },
  { id: 'exp-accommodation', label: 'Accommodation (ger camps, ~$15-50/night)', payer: 'Toshiya', amount: 250, split: 'USD estimate', settled: false },
  { id: 'exp-drone-reg', label: 'Drone registration (MCAA)', payer: 'Toshiya', amount: 1300, split: 'JPY', settled: false },
  { id: 'exp-other', label: 'Other (visa, tips, food, souvenirs)', payer: 'Toshiya', amount: 25000, split: 'JPY estimate', settled: false },
]

export const ACTIVITIES = [
  {
    id: 'act-arrival',
    title: 'Arrival + ULN Prep',
    status: 'Go',
    window: 'Day 1 (8/7 Thu) evening',
    description: 'Land at UBN 19:15. Transfer to ULN hotel. Gear check. Early sleep for Day 2 dawn start.',
    backup: 'If flight delayed, skip gear check and go straight to hotel.',
  },
  {
    id: 'act-d02',
    title: 'First Drive + Rock Formations',
    status: 'Go',
    window: 'Day 2 (8/8 Fri) all day',
    description: 'ゴビCore: ULN→Baga Gazriin Chuluu 280km. Drone rock formations. 八湖Core: ULN→Tsagaan Suvarga 280km. Sunset drone.',
    backup: 'Shorten stops if road conditions slow progress.',
  },
  {
    id: 'act-d03',
    title: 'Steppe Transition',
    status: 'Go',
    window: 'Day 3 (8/9 Sat) all day',
    description: 'ゴビCore: Tsagaan Suvarga. Sunset drone S-tier. Star #1. 八湖Core: Arvaikheer rest day.',
    backup: 'If cloudy, prioritize drone over star photography.',
  },
  {
    id: 'act-d04',
    title: 'Deep Country Exploration',
    status: 'Go',
    window: 'Day 4 (8/10 Sun) all day',
    description: 'ゴビCore: Yolyn Am ice canyon hike. 八湖Core: Orkhon Falls drone S-tier. Star #2 pre-Perseid.',
    backup: 'Canyon may have limited ice in August. Falls drone depends on wind.',
  },
  {
    id: 'act-d05',
    title: '★ Core Segment Start',
    status: 'Watch',
    window: 'Day 5 (8/11 Mon) all day',
    description: 'ゴビCore: Khongor Sand Dunes. 300m dunes. Camel ride. 八湖Core: ★ Horse trek Day 1 — Orkhon to high altitude.',
    backup: 'Sand dune conditions depend on recent weather. Horse trek needs weather window.',
  },
  {
    id: 'act-d06',
    title: '⭐ PERSEID PEAK NIGHT',
    status: 'Watch',
    window: 'Day 6 (8/12 Tue) — CRITICAL',
    description: 'ゴビCore: Khongor deep Gobi. Zero light pollution at 1,200m. 八湖Core: Eight Lakes 2,400m by horse. Both: Perseid peak observation + long exposure photography.',
    backup: 'If clouds, shift to next-night window (Aug 13). Perseids visible Aug 11-14.',
  },
  {
    id: 'act-d07',
    title: 'Post-Perseid Movement',
    status: 'Go',
    window: 'Day 7 (8/13 Wed) all day',
    description: 'ゴビCore: Bayanzag Flaming Cliffs. Dinosaur fossils. Sunset drone. 八湖Core: Horse trek Day 3 descent → car → Tsetserleg.',
    backup: 'Flexible timing. Both routes have margin here.',
  },
  {
    id: 'act-d08',
    title: 'Cultural / Scenic Day',
    status: 'Go',
    window: 'Day 8 (8/14 Thu) all day',
    description: 'ゴビCore: Ongi Monastery → Kharkhorin. Erdene Zuu 108 stupas. 八湖Core: Khorgo Volcano hike + drone. White Lake sunset.',
    backup: 'Both routes are well-defined. No high-risk segments.',
  },
  {
    id: 'act-d09',
    title: 'Return Drive',
    status: 'Go',
    window: 'Day 9 (8/15 Fri) all day',
    description: 'ゴビCore: Kharkhorin→ULN. Last grassland drone. 八湖Core: White Lake sunrise → ULN 560km. Long drive day.',
    backup: 'Start early. 八湖Core is a very long drive — may need overnight stop.',
  },
  {
    id: 'act-departure',
    title: 'Departure',
    status: 'Go',
    window: 'Day 10 (8/16 Sat)',
    description: 'MIAT OM509 ULN→NRT 14:05→20:00. Morning free for last ULN exploration or souvenir shopping.',
    backup: 'Keep morning light. Airport transfer by noon.',
  },
]

export const STAY_DETAILS = {
  commandSummary: 'Operations staged from Ulaanbaatar. Accommodation is ger camps and nomad stays throughout.',
  houseOps: [
    'Confirm tour operator pickup time for Day 2 dawn departure.',
    'Stage all drone batteries and star photography gear night before.',
    'Keep drone registration document accessible at all times.',
    'Charge all devices at every ger camp opportunity (solar power is limited).',
  ],
  rooms: [
    { label: 'Day 1 & 10', assignment: 'ULN Hotel' },
    { label: 'Day 2-3', assignment: 'Ger camps (Baga Gazriin / Tsagaan Suvarga)' },
    { label: 'Day 4-6', assignment: 'Ger camps / nomad stays (deep country)' },
    { label: 'Day 7-9', assignment: 'Ger camps (Bayanzag-Kharkhorin / Tsetserleg-Khorgo)' },
  ],
}

export const INITIAL_NOTES = {
  itinerary: 'Two route options under evaluation. Perseid peak night (Aug 12) is the anchor for both routes.',
  stay: 'Ger camps and nomad family stays. Power charging is the main constraint — bring power banks.',
  meals: 'Mostly camp meals and nomad family cooking. Khorkhog (stone-cooked lamb) is the highlight meal.',
  activities: 'Drone sessions are the primary creative output. Star photography on Perseid peak is the headline event.',
  expenses: 'Flight is booked. Tour cost depends on which route is selected. Budget ~$2,000-2,500 total.',
  families: 'CEO is deciding between ゴビCore (classic desert) and 八湖Core (horse trek + lakes). Both anchor Perseid night.',
}
