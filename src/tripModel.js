import { DAYS, TIME_SLOTS, TRIP_META } from './tripData'

export const COLLECTION_BY_TYPE = {
  family: 'families',
  location: 'locations',
  route: 'routes',
  itineraryItem: 'itineraryItems',
  meal: 'meals',
  activity: 'activities',
  stayItem: 'stayItems',
  expense: 'expenses',
  task: 'tasks',
}

export const ENTITY_PAGE = {
  family: 'families',
  location: 'stay',
  route: 'itinerary',
  itineraryItem: 'itinerary',
  meal: 'meals',
  activity: 'activities',
  stayItem: 'stay',
  expense: 'expenses',
  task: 'itinerary',
}

const DEFAULT_SELECTION = { type: 'activity', id: 'act-arrival' }
export const TRIP_DOCUMENT_STORAGE_KEY = 'mongolia-command-center/v1'
export const VIEWER_PROFILE_STORAGE_KEY = 'mongolia-command-center/viewer/v1'
const LEGACY_TRIP_DOCUMENT_STORAGE_KEYS = ['trip-command-center/v4-public', 'trip-command-center/v3-public', 'trip-command-center/v2', 'trip-command-center/v1']
const LEGACY_VIEWER_PROFILE_STORAGE_KEYS = ['trip-command-center/viewer/v4-public', 'trip-command-center/viewer/v3-public', 'trip-command-center/viewer']
const TIMELINE_HOURS_PER_SLOT = 24 / Math.max(TIME_SLOTS.length || 1, 1)
const ULN_ADDRESS = 'Ulaanbaatar, Mongolia'
const ULN_COORDINATES = { lat: 47.9077, lng: 106.9050 }

const MAPS_LINKS = {
  uln: 'https://www.google.com/maps/search/?api=1&query=Ulaanbaatar+Mongolia',
  ubnAirport: 'https://www.google.com/maps/search/?api=1&query=Chinggis+Khaan+International+Airport',
  bagaGazriin: 'https://www.google.com/maps/search/?api=1&query=Baga+Gazriin+Chuluu+Mongolia',
  tsagaanSuvarga: 'https://www.google.com/maps/search/?api=1&query=Tsagaan+Suvarga+Mongolia',
  yolynAm: 'https://www.google.com/maps/search/?api=1&query=Yolyn+Am+Mongolia',
  khongor: 'https://www.google.com/maps/search/?api=1&query=Khongoryn+Els+Sand+Dunes+Mongolia',
  bayanzag: 'https://www.google.com/maps/search/?api=1&query=Bayanzag+Flaming+Cliffs+Mongolia',
  kharkhorin: 'https://www.google.com/maps/search/?api=1&query=Erdene+Zuu+Monastery+Kharkhorin',
  orkhonFalls: 'https://www.google.com/maps/search/?api=1&query=Orkhon+Waterfall+Mongolia',
  eightLakes: 'https://www.google.com/maps/search/?api=1&query=Naiman+Nuur+Eight+Lakes+Mongolia',
  khorgo: 'https://www.google.com/maps/search/?api=1&query=Khorgo+Volcano+Mongolia',
  whiteLake: 'https://www.google.com/maps/search/?api=1&query=Terkhiin+Tsagaan+Nuur+Mongolia',
}

// Mongolia trip has no convoy windows (solo trip), but keep the helper for compatibility
const SHARED_CONVOY_WINDOWS = {}

function getConvoyWindowSpan(window) {
  if (!window) return 0
  return Number((window.endSlot - window.startSlot).toFixed(2))
}

const PUBLIC_FAMILY_PROFILES = {
  'gobi-core': {
    title: 'ゴビCore',
    name: 'ゴビCore',
    shortOrigin: 'ULN',
    origin: 'Ulaanbaatar',
    originAddress: 'Ulaanbaatar, Mongolia',
    originCoordinates: ULN_COORDINATES,
    responsibility: 'Travel Gobi Mongolia ($980)',
    routeSummary: 'ULN → Baga Gazriin → Tsagaan Suvarga → Yolyn Am → Khongor (PERSEID) → Bayanzag → Kharkhorin → ULN',
    note: 'Classic Gobi desert loop. Perseid peak at Khongor Sand Dunes (1,200m). Best for: sand dunes, camel riding, zero light pollution.',
  },
  'eight-lakes-core': {
    title: '八湖Core',
    name: '八湖Core',
    shortOrigin: 'ULN',
    origin: 'Ulaanbaatar',
    originAddress: 'Ulaanbaatar, Mongolia',
    originCoordinates: ULN_COORDINATES,
    responsibility: 'Amicus Mongolia (~$790+)',
    routeSummary: 'ULN → Tsagaan Suvarga → Arvaikheer → Orkhon Falls → Eight Lakes (PERSEID, by horse) → Tsetserleg → Khorgo → White Lake → ULN',
    note: 'Central Mongolia loop with horse trek. Perseid peak at Eight Lakes (2,400m). Best for: horse trekking, waterfalls, volcanic landscape.',
  },
}

const PUBLIC_BASECAMP = {
  name: 'Ulaanbaatar Base',
  address: ULN_ADDRESS,
  coordinates: ULN_COORDINATES,
  summary: 'Ulaanbaatar serves as the start and end point for both route options. Hotel stay on Day 1 and Day 10.',
  accessNote: 'MIAT OM502 arrives 19:15. Airport transfer arranged by tour operator.',
  directionsNote: 'Chinggis Khaan International Airport (UBN) is ~50km southwest of ULN city center.',
  parkingNote: null,
  lockNote: null,
  checkIn: 'Aug 7 (Thu) — arrival 19:15',
  checkOut: 'Aug 16 (Sat) — departure 14:05',
  wifiNetwork: null,
  wifiPassword: null,
  hostName: null,
  coHostName: null,
  guestSummary: '1 adult (solo)',
  confirmationCode: null,
  vehicleFee: null,
  externalUrl: MAPS_LINKS.uln,
  manualUrl: null,
  photos: [
    {
      id: 'mongolia-steppe',
      label: 'Mongolian steppe reference',
      imageUrl: 'https://images.unsplash.com/photo-1596187250523-77eef477ebe1?auto=format&fit=crop&w=900&q=80',
      sourceUrl: null,
    },
    {
      id: 'mongolia-ger',
      label: 'Ger camp reference',
      imageUrl: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=900&q=80',
      sourceUrl: null,
    },
  ],
}

const PUBLIC_STAY_SUMMARIES = {
  'stay-basecamp': 'Ulaanbaatar base for Day 1 arrival and Day 10 departure.',
  'stay-ger-camps': 'Ger camp accommodations throughout the countryside. Solar charging only.',
  'stay-nomad': 'Nomad family stays for authentic cultural immersion.',
  'stay-gear': 'Drone and star photography gear staging.',
}

const PUBLIC_STAY_NOTES = {
  'stay-basecamp': 'ULN hotel booked for first and last night.',
  'stay-ger-camps': 'Ger camps have limited power — charge all devices when possible.',
  'stay-nomad': 'Nomad stays are arranged by the tour operator.',
  'stay-gear': 'Keep drone registration document accessible at all times.',
}

const PUBLIC_EXPENSE_PAYER = 'Toshiya'

const LOCATION_MEDIA = {
  'loc-uln': PUBLIC_BASECAMP.photos,
  'loc-tsagaan-suvarga': [
    {
      id: 'tsagaan-suvarga-view',
      label: 'White Stupa reference',
      imageUrl: 'https://images.unsplash.com/photo-1596187250523-77eef477ebe1?auto=format&fit=crop&w=900&q=80',
      sourceUrl: MAPS_LINKS.tsagaanSuvarga,
    },
  ],
  'loc-khongor': [
    {
      id: 'khongor-dunes',
      label: 'Khongor Sand Dunes reference',
      imageUrl: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=900&q=80',
      sourceUrl: MAPS_LINKS.khongor,
    },
  ],
  'loc-orkhon-falls': [
    {
      id: 'orkhon-falls-view',
      label: 'Orkhon Waterfall reference',
      imageUrl: 'https://images.unsplash.com/photo-1432405972618-c6b0cfba8b6f?auto=format&fit=crop&w=900&q=80',
      sourceUrl: MAPS_LINKS.orkhonFalls,
    },
  ],
  'loc-kharkhorin': [
    {
      id: 'erdene-zuu-view',
      label: 'Erdene Zuu Monastery reference',
      imageUrl: 'https://images.unsplash.com/photo-1551524164-687a55eff6ab?auto=format&fit=crop&w=900&q=80',
      sourceUrl: MAPS_LINKS.kharkhorin,
    },
  ],
  'loc-khorgo': [
    {
      id: 'khorgo-volcano',
      label: 'Khorgo Volcano reference',
      imageUrl: 'https://images.unsplash.com/photo-1462275646964-a0e3c11f18a6?auto=format&fit=crop&w=900&q=80',
      sourceUrl: MAPS_LINKS.khorgo,
    },
  ],
}

const DAY_NAME_TO_ID = {}

const LEGACY_FAMILY_TASKS = {
  'gobi-core': {
    'flight-booked': 'task-flight',
    'tour-booked': 'task-gobi-tour',
    'drone-reg': 'task-drone-reg',
    'star-gear': 'task-star-gear',
  },
  'eight-lakes-core': {
    'flight-booked': 'task-flight',
    'tour-booked': 'task-lakes-tour',
    'horse-prep': 'task-horse-prep',
    'drone-reg': 'task-drone-reg',
  },
}

export function makeEntityKey(type, id) {
  return `${type}:${id}`
}

export function parseEntityKey(key) {
  const [type, ...rest] = key.split(':')
  return { type, id: rest.join(':') }
}

export function getCollection(doc, type) {
  const collectionName = COLLECTION_BY_TYPE[type]
  return collectionName ? doc[collectionName] || [] : []
}

export function getEntityById(doc, type, id) {
  return getCollection(doc, type).find((item) => item.id === id) || null
}

export function getEntityBySelection(doc, selection) {
  if (!selection?.type || !selection?.id) return null
  return getEntityById(doc, selection.type, selection.id)
}

export function getEntityTitle(entity) {
  if (!entity) return 'No selection'
  return entity.title || entity.name || entity.label || entity.meal || entity.id
}

export function getDayMeta(dayId) {
  return DAYS.find((day) => day.id === dayId) || null
}

export function getSlotLabel(slotIndex) {
  const safeSlotIndex = Number.isFinite(slotIndex) ? Math.max(slotIndex, 0) : 0
  const dayIndex = Math.floor(safeSlotIndex / TIME_SLOTS.length)
  const slotIndexWithinDay = Math.floor(safeSlotIndex % TIME_SLOTS.length)
  const slot = TIME_SLOTS[slotIndexWithinDay]
  const day = DAYS[dayIndex]
  if (!day) return `${slot}:00`

  const fractionalSlot = safeSlotIndex - Math.floor(safeSlotIndex)
  const baseHour = Number(slot) || 0
  const totalMinutes = Math.round((baseHour + fractionalSlot * 6) * 60)
  const hour24 = Math.floor(totalMinutes / 60) % 24
  const minute = totalMinutes % 60
  const meridiem = hour24 >= 12 ? 'PM' : 'AM'
  const hour12 = hour24 % 12 || 12

  return `${day.shortLabel} ${String(hour12).padStart(2, '0')}:${String(minute).padStart(2, '0')} ${meridiem}`
}

export function getRouteSimulationWindow(doc, route) {
  if (!route) {
    return { start: 0, end: 1 }
  }

  if (route.linkedEntityKey) {
    const linked = parseEntityKey(route.linkedEntityKey)
    if (linked.type === 'itineraryItem') {
      const linkedItem = doc?.itineraryItems?.find((item) => item.id === linked.id)
      if (linkedItem && Number.isFinite(linkedItem.startSlot)) {
        const fallbackSpan = Number.isFinite(linkedItem.span) && linkedItem.span > 0 ? linkedItem.span : 1
        const span = getRouteDurationSlotSpan(route, fallbackSpan)
        return {
          start: linkedItem.startSlot,
          end: linkedItem.startSlot + span,
        }
      }
    }
  }

  const start = Number.isFinite(route.simulationStartSlot) ? route.simulationStartSlot : 0
  const fallbackSpan =
    Number.isFinite(route.simulationEndSlot) && route.simulationEndSlot > start
      ? route.simulationEndSlot - start
      : 1
  const end = start + getRouteDurationSlotSpan(route, fallbackSpan)
  return { start, end }
}

export function getRouteDurationSlotSpan(route, fallbackSpan = 1) {
  const simulationStartSlot = Number(route?.simulationStartSlot)
  const simulationEndSlot = Number(route?.simulationEndSlot)
  if (
    Number.isFinite(simulationStartSlot) &&
    Number.isFinite(simulationEndSlot) &&
    simulationEndSlot > simulationStartSlot
  ) {
    return simulationEndSlot - simulationStartSlot
  }

  const durationSeconds = Number(route?.durationSeconds)
  if (Number.isFinite(durationSeconds) && durationSeconds > 0) {
    return durationSeconds / 3600 / TIMELINE_HOURS_PER_SLOT
  }
  return fallbackSpan
}

export function getItineraryItemEffectiveSpan(doc, item) {
  if (!item) return 1

  const fallbackSpan = Number.isFinite(item.span) && item.span > 0 ? item.span : 1
  if (!item.routeId) return fallbackSpan

  const route = doc?.routes?.find((candidate) => candidate.id === item.routeId)
  return getRouteDurationSlotSpan(route, fallbackSpan)
}

export function isEntityOnPage(entity, pageId) {
  if (!entity) return false
  if (entity.type === 'location') {
    return ['stay', 'meals', 'activities', 'itinerary'].includes(pageId)
  }
  return ENTITY_PAGE[entity.type] === pageId
}

// ---------------------------------------------------------------------------
// Builder functions — Mongolia Obon 2026
// ---------------------------------------------------------------------------

function buildLocations() {
  return [
    {
      id: 'loc-uln',
      type: 'location',
      title: TRIP_META.airbnb.name,
      category: 'stay',
      dayId: 'all',
      address: TRIP_META.airbnb.location,
      coordinates: PUBLIC_BASECAMP.coordinates,
      externalUrl: MAPS_LINKS.uln,
      summary: 'Ulaanbaatar base for arrival (Day 1) and departure (Day 10). Hotel stay, gear staging, supply point.',
      parkingNote: null,
      accessNote: TRIP_META.airbnb.gateNote,
      directionsNote: TRIP_META.airbnb.directionsNote,
      lockNote: null,
      checkIn: TRIP_META.airbnb.checkIn,
      checkOut: TRIP_META.airbnb.checkOut,
      wifiNetwork: null,
      wifiPassword: null,
      hostName: null,
      coHostName: null,
      guestSummary: TRIP_META.airbnb.guestSummary,
      confirmationCode: null,
      vehicleFee: null,
      manualUrl: null,
      photos: LOCATION_MEDIA['loc-uln'],
      linkedEntityKeys: [
        makeEntityKey('stayItem', 'stay-basecamp'),
        makeEntityKey('stayItem', 'stay-ger-camps'),
        makeEntityKey('stayItem', 'stay-nomad'),
        makeEntityKey('stayItem', 'stay-gear'),
      ],
    },
    {
      id: 'loc-ubn-airport',
      type: 'location',
      title: 'Chinggis Khaan Airport (UBN)',
      category: 'logistics',
      dayId: 'd01',
      stopType: 'Airport',
      placesQuery: 'Chinggis Khaan International Airport Mongolia',
      address: 'Chinggis Khaan International Airport, Sergelen, Mongolia',
      coordinates: { lat: 47.8432, lng: 106.7672 },
      externalUrl: MAPS_LINKS.ubnAirport,
      summary: 'International airport ~50km SW of ULN. MIAT flights to/from NRT.',
      linkedEntityKeys: [
        makeEntityKey('activity', 'act-arrival'),
        makeEntityKey('activity', 'act-departure'),
      ],
      photos: [],
    },
    {
      id: 'loc-baga-gazriin',
      type: 'location',
      title: 'Baga Gazriin Chuluu',
      category: 'activity',
      dayId: 'd02',
      address: 'Baga Gazriin Chuluu, Dundgovi, Mongolia',
      coordinates: { lat: 46.2333, lng: 106.0500 },
      externalUrl: MAPS_LINKS.bagaGazriin,
      summary: 'Granite rock formations in the Middle Gobi. First drone session target. ゴビCore Day 2.',
      linkedEntityKeys: [
        makeEntityKey('activity', 'act-d02'),
      ],
      photos: [],
    },
    {
      id: 'loc-tsagaan-suvarga',
      type: 'location',
      title: 'Tsagaan Suvarga (White Stupa)',
      category: 'activity',
      dayId: 'd03',
      address: 'Tsagaan Suvarga, Dundgovi, Mongolia',
      coordinates: { lat: 44.7583, lng: 104.4667 },
      externalUrl: MAPS_LINKS.tsagaanSuvarga,
      summary: 'White Stupa limestone formations. Sunset drone S-tier. First star photography night.',
      photos: LOCATION_MEDIA['loc-tsagaan-suvarga'],
      linkedEntityKeys: [
        makeEntityKey('activity', 'act-d03'),
      ],
    },
    {
      id: 'loc-yolyn-am',
      type: 'location',
      title: 'Yolyn Am (Eagle Valley)',
      category: 'activity',
      dayId: 'd04',
      address: 'Yolyn Am, Gobi Gurvansaikhan, Mongolia',
      coordinates: { lat: 43.5000, lng: 104.0833 },
      externalUrl: MAPS_LINKS.yolynAm,
      summary: 'Ice canyon in the Gobi. Narrow gorge hike. ゴビCore Day 4.',
      linkedEntityKeys: [
        makeEntityKey('activity', 'act-d04'),
      ],
      photos: [],
    },
    {
      id: 'loc-khongor',
      type: 'location',
      title: 'Khongor Sand Dunes',
      category: 'activity',
      dayId: 'd05',
      address: 'Khongoryn Els, Umnugovi, Mongolia',
      coordinates: { lat: 43.7500, lng: 102.2500 },
      externalUrl: MAPS_LINKS.khongor,
      summary: '300m sand dunes. Camel ride. ゴビCore Perseid peak site (1,200m, zero light pollution).',
      photos: LOCATION_MEDIA['loc-khongor'],
      linkedEntityKeys: [
        makeEntityKey('activity', 'act-d05'),
        makeEntityKey('activity', 'act-d06'),
      ],
    },
    {
      id: 'loc-bayanzag',
      type: 'location',
      title: 'Bayanzag (Flaming Cliffs)',
      category: 'activity',
      dayId: 'd07',
      address: 'Bayanzag, Umnugovi, Mongolia',
      coordinates: { lat: 44.1167, lng: 103.7167 },
      externalUrl: MAPS_LINKS.bayanzag,
      summary: 'Dinosaur fossil site. Iconic red cliffs. Sunset drone target. ゴビCore Day 7.',
      linkedEntityKeys: [
        makeEntityKey('activity', 'act-d07'),
      ],
      photos: [],
    },
    {
      id: 'loc-arvaikheer',
      type: 'location',
      title: 'Arvaikheer',
      category: 'logistics',
      dayId: 'd03',
      address: 'Arvaikheer, Uvurkhangai, Mongolia',
      coordinates: { lat: 46.2647, lng: 102.7760 },
      externalUrl: 'https://www.google.com/maps/search/?api=1&query=Arvaikheer+Mongolia',
      summary: 'Central provincial capital. Rest and resupply. 八湖Core Day 3.',
      linkedEntityKeys: [
        makeEntityKey('activity', 'act-d03'),
      ],
      photos: [],
    },
    {
      id: 'loc-kharkhorin',
      type: 'location',
      title: 'Kharkhorin / Erdene Zuu',
      category: 'activity',
      dayId: 'd08',
      address: 'Erdene Zuu Monastery, Kharkhorin, Mongolia',
      coordinates: { lat: 47.1972, lng: 102.8278 },
      externalUrl: MAPS_LINKS.kharkhorin,
      summary: 'Ancient capital. Erdene Zuu Monastery with 108 stupas. ゴビCore Day 8.',
      photos: LOCATION_MEDIA['loc-kharkhorin'],
      linkedEntityKeys: [
        makeEntityKey('activity', 'act-d08'),
      ],
    },
    {
      id: 'loc-orkhon-falls',
      type: 'location',
      title: 'Orkhon Waterfall',
      category: 'activity',
      dayId: 'd04',
      address: 'Orkhon Waterfall, Uvurkhangai, Mongolia',
      coordinates: { lat: 46.7833, lng: 101.9667 },
      externalUrl: MAPS_LINKS.orkhonFalls,
      summary: 'Drone S-tier waterfall. 八湖Core Day 4. Star #2 pre-Perseid.',
      photos: LOCATION_MEDIA['loc-orkhon-falls'],
      linkedEntityKeys: [
        makeEntityKey('activity', 'act-d04'),
      ],
    },
    {
      id: 'loc-eight-lakes',
      type: 'location',
      title: 'Naiman Nuur (Eight Lakes)',
      category: 'activity',
      dayId: 'd06',
      address: 'Naiman Nuur, Uvurkhangai, Mongolia',
      coordinates: { lat: 46.8333, lng: 101.4167 },
      externalUrl: MAPS_LINKS.eightLakes,
      summary: 'Eight volcanic lakes at 2,400m. Accessible by horse only. 八湖Core Perseid peak site.',
      linkedEntityKeys: [
        makeEntityKey('activity', 'act-d05'),
        makeEntityKey('activity', 'act-d06'),
      ],
      photos: [],
    },
    {
      id: 'loc-tsetserleg',
      type: 'location',
      title: 'Tsetserleg',
      category: 'logistics',
      dayId: 'd07',
      address: 'Tsetserleg, Arkhangai, Mongolia',
      coordinates: { lat: 47.4778, lng: 101.4528 },
      externalUrl: 'https://www.google.com/maps/search/?api=1&query=Tsetserleg+Mongolia',
      summary: 'Provincial capital. Resupply and rest. 八湖Core Day 7.',
      linkedEntityKeys: [
        makeEntityKey('activity', 'act-d07'),
      ],
      photos: [],
    },
    {
      id: 'loc-khorgo',
      type: 'location',
      title: 'Khorgo Volcano',
      category: 'activity',
      dayId: 'd08',
      address: 'Khorgo Volcano, Arkhangai, Mongolia',
      coordinates: { lat: 48.1667, lng: 99.8333 },
      externalUrl: MAPS_LINKS.khorgo,
      summary: 'Extinct volcano with crater lake. Hike + drone. 八湖Core Day 8.',
      photos: LOCATION_MEDIA['loc-khorgo'],
      linkedEntityKeys: [
        makeEntityKey('activity', 'act-d08'),
      ],
    },
    {
      id: 'loc-white-lake',
      type: 'location',
      title: 'Terkhiin Tsagaan Nuur (White Lake)',
      category: 'activity',
      dayId: 'd08',
      address: 'Terkhiin Tsagaan Nuur, Arkhangai, Mongolia',
      coordinates: { lat: 48.1500, lng: 99.7167 },
      externalUrl: MAPS_LINKS.whiteLake,
      summary: 'Volcanic lake. Sunrise and sunset drone target. 八湖Core Day 8-9.',
      linkedEntityKeys: [
        makeEntityKey('activity', 'act-d08'),
        makeEntityKey('activity', 'act-d09'),
      ],
      photos: [],
    },
  ]
}

function buildFamilies() {
  return [
    {
      id: 'gobi-core',
      type: 'family',
      title: 'ゴビCore',
      name: 'ゴビCore',
      shortOrigin: 'ULN',
      origin: 'Ulaanbaatar',
      originAddress: 'Ulaanbaatar, Mongolia',
      originCoordinates: ULN_COORDINATES,
      arrivalDayId: 'd01',
      eta: 'Aug 7 19:15',
      driveTime: '~280 km/day avg',
      headcount: '1 solo + driver + guide',
      vehicle: 'Land Cruiser',
      vehicleLabel: 'Vehicle',
      responsibility: 'Travel Gobi Mongolia ($980)',
      readiness: 60,
      status: 'Option A',
      routeSummary: 'ULN → Baga Gazriin → Tsagaan Suvarga → Yolyn Am → Khongor (PERSEID) → Bayanzag → Kharkhorin → ULN',
      plannedStopIds: ['loc-baga-gazriin', 'loc-tsagaan-suvarga', 'loc-yolyn-am', 'loc-khongor', 'loc-bayanzag', 'loc-kharkhorin'],
      taskIds: ['task-flight', 'task-gobi-tour', 'task-drone-reg', 'task-star-gear'],
      linkedEntityKeys: [
        makeEntityKey('activity', 'act-d02'),
        makeEntityKey('activity', 'act-d06'),
        makeEntityKey('location', 'loc-khongor'),
      ],
      note: 'Classic Gobi desert loop. Perseid peak at Khongor Sand Dunes (1,200m). Best for: sand dunes, camel riding, zero light pollution.',
    },
    {
      id: 'eight-lakes-core',
      type: 'family',
      title: '八湖Core',
      name: '八湖Core',
      shortOrigin: 'ULN',
      origin: 'Ulaanbaatar',
      originAddress: 'Ulaanbaatar, Mongolia',
      originCoordinates: ULN_COORDINATES,
      arrivalDayId: 'd01',
      eta: 'Aug 7 19:15',
      driveTime: '~200 km/day avg',
      headcount: '1 solo + driver + guide + horse guide',
      vehicle: 'Land Cruiser + horses',
      vehicleLabel: 'Vehicle + horses',
      responsibility: 'Amicus Mongolia (~$790+)',
      readiness: 40,
      status: 'Option B',
      routeSummary: 'ULN → Tsagaan Suvarga → Arvaikheer → Orkhon Falls → Eight Lakes (PERSEID, by horse) → Tsetserleg → Khorgo → White Lake → ULN',
      plannedStopIds: ['loc-tsagaan-suvarga', 'loc-arvaikheer', 'loc-orkhon-falls', 'loc-eight-lakes', 'loc-tsetserleg', 'loc-khorgo', 'loc-white-lake'],
      taskIds: ['task-flight', 'task-lakes-tour', 'task-horse-prep', 'task-drone-reg'],
      linkedEntityKeys: [
        makeEntityKey('activity', 'act-d04'),
        makeEntityKey('activity', 'act-d06'),
        makeEntityKey('location', 'loc-eight-lakes'),
      ],
      note: 'Central Mongolia loop with 3-day horse trek. Perseid peak at Eight Lakes (2,400m). Best for: horse trekking, waterfalls, volcanic landscape.',
    },
  ]
}

function buildItineraryItems() {
  // Each day maps to 4 slots (00, 06, 12, 18). Day 1 = slots 0-3, Day 2 = slots 4-7, etc.
  return [
    // --- Travel row ---
    {
      id: 'flight-in',
      type: 'itineraryItem',
      title: 'NRT→ULN Flight (MIAT OM502)',
      rowId: 'travel',
      dayId: 'd01',
      startSlot: 2.4,
      span: 0.8,
      color: 'success',
      familyIds: ['gobi-core', 'eight-lakes-core'],
      status: 'Booked',
      riskLevel: 'Low',
      taskIds: ['task-flight'],
      linkedEntityKeys: [makeEntityKey('location', 'loc-ubn-airport')],
    },
    {
      id: 'gobi-drive-d02',
      type: 'itineraryItem',
      title: 'ULN → Baga Gazriin Chuluu (280km)',
      rowId: 'travel',
      dayId: 'd02',
      startSlot: 4.5,
      span: 2.5,
      color: 'warning',
      familyIds: ['gobi-core'],
      status: 'Transit',
      riskLevel: 'Low',
      taskIds: [],
      linkedEntityKeys: [makeEntityKey('location', 'loc-baga-gazriin')],
    },
    {
      id: 'gobi-drive-d03',
      type: 'itineraryItem',
      title: '→ Tsagaan Suvarga',
      rowId: 'travel',
      dayId: 'd03',
      startSlot: 8.5,
      span: 2,
      color: 'warning',
      familyIds: ['gobi-core'],
      status: 'Transit',
      riskLevel: 'Low',
      taskIds: [],
      linkedEntityKeys: [makeEntityKey('location', 'loc-tsagaan-suvarga')],
    },
    {
      id: 'gobi-drive-d04',
      type: 'itineraryItem',
      title: '→ Yolyn Am',
      rowId: 'travel',
      dayId: 'd04',
      startSlot: 12.5,
      span: 2,
      color: 'warning',
      familyIds: ['gobi-core'],
      status: 'Transit',
      riskLevel: 'Low',
      taskIds: [],
      linkedEntityKeys: [makeEntityKey('location', 'loc-yolyn-am')],
    },
    {
      id: 'gobi-drive-d05',
      type: 'itineraryItem',
      title: '→ Khongor Sand Dunes',
      rowId: 'travel',
      dayId: 'd05',
      startSlot: 16.5,
      span: 2.5,
      color: 'warning',
      familyIds: ['gobi-core'],
      status: 'Transit',
      riskLevel: 'Medium',
      taskIds: [],
      linkedEntityKeys: [makeEntityKey('location', 'loc-khongor')],
    },
    {
      id: 'gobi-drive-d07',
      type: 'itineraryItem',
      title: '→ Bayanzag (Flaming Cliffs)',
      rowId: 'travel',
      dayId: 'd07',
      startSlot: 24.5,
      span: 2,
      color: 'warning',
      familyIds: ['gobi-core'],
      status: 'Transit',
      riskLevel: 'Low',
      taskIds: [],
      linkedEntityKeys: [makeEntityKey('location', 'loc-bayanzag')],
    },
    {
      id: 'gobi-drive-d08',
      type: 'itineraryItem',
      title: '→ Ongi → Kharkhorin',
      rowId: 'travel',
      dayId: 'd08',
      startSlot: 28.5,
      span: 3,
      color: 'warning',
      familyIds: ['gobi-core'],
      status: 'Transit',
      riskLevel: 'Medium',
      taskIds: [],
      linkedEntityKeys: [makeEntityKey('location', 'loc-kharkhorin')],
    },
    {
      id: 'gobi-drive-d09',
      type: 'itineraryItem',
      title: 'Kharkhorin → ULN',
      rowId: 'travel',
      dayId: 'd09',
      startSlot: 32.5,
      span: 3,
      color: 'warning',
      familyIds: ['gobi-core'],
      status: 'Transit',
      riskLevel: 'Medium',
      taskIds: [],
      linkedEntityKeys: [makeEntityKey('location', 'loc-uln')],
    },
    {
      id: 'lakes-drive-d02',
      type: 'itineraryItem',
      title: 'ULN → Tsagaan Suvarga (280km)',
      rowId: 'travel',
      dayId: 'd02',
      startSlot: 4.7,
      span: 2.3,
      color: 'critical',
      familyIds: ['eight-lakes-core'],
      status: 'Transit',
      riskLevel: 'Low',
      taskIds: [],
      linkedEntityKeys: [makeEntityKey('location', 'loc-tsagaan-suvarga')],
    },
    {
      id: 'lakes-drive-d03',
      type: 'itineraryItem',
      title: '→ Arvaikheer',
      rowId: 'travel',
      dayId: 'd03',
      startSlot: 8.7,
      span: 1.5,
      color: 'critical',
      familyIds: ['eight-lakes-core'],
      status: 'Transit',
      riskLevel: 'Low',
      taskIds: [],
      linkedEntityKeys: [makeEntityKey('location', 'loc-arvaikheer')],
    },
    {
      id: 'lakes-drive-d04',
      type: 'itineraryItem',
      title: '→ Orkhon Falls',
      rowId: 'travel',
      dayId: 'd04',
      startSlot: 12.7,
      span: 1.5,
      color: 'critical',
      familyIds: ['eight-lakes-core'],
      status: 'Transit',
      riskLevel: 'Low',
      taskIds: [],
      linkedEntityKeys: [makeEntityKey('location', 'loc-orkhon-falls')],
    },
    {
      id: 'lakes-horse-d05',
      type: 'itineraryItem',
      title: '★ Horse trek Day 1',
      rowId: 'travel',
      dayId: 'd05',
      startSlot: 16.5,
      span: 3,
      color: 'critical',
      familyIds: ['eight-lakes-core'],
      status: 'Watch',
      riskLevel: 'High',
      taskIds: ['task-horse-prep'],
      linkedEntityKeys: [makeEntityKey('location', 'loc-eight-lakes')],
    },
    {
      id: 'lakes-horse-d06',
      type: 'itineraryItem',
      title: '★ Horse trek Day 2 — PERSEID',
      rowId: 'travel',
      dayId: 'd06',
      startSlot: 20.5,
      span: 3,
      color: 'critical',
      familyIds: ['eight-lakes-core'],
      status: 'Watch',
      riskLevel: 'High',
      taskIds: ['task-horse-prep'],
      linkedEntityKeys: [makeEntityKey('location', 'loc-eight-lakes')],
    },
    {
      id: 'lakes-horse-d07',
      type: 'itineraryItem',
      title: 'Horse trek Day 3 → Tsetserleg',
      rowId: 'travel',
      dayId: 'd07',
      startSlot: 24.5,
      span: 3,
      color: 'critical',
      familyIds: ['eight-lakes-core'],
      status: 'Transit',
      riskLevel: 'Medium',
      taskIds: [],
      linkedEntityKeys: [makeEntityKey('location', 'loc-tsetserleg')],
    },
    {
      id: 'lakes-drive-d08',
      type: 'itineraryItem',
      title: '→ Khorgo / White Lake',
      rowId: 'travel',
      dayId: 'd08',
      startSlot: 28.7,
      span: 2,
      color: 'critical',
      familyIds: ['eight-lakes-core'],
      status: 'Transit',
      riskLevel: 'Low',
      taskIds: [],
      linkedEntityKeys: [makeEntityKey('location', 'loc-khorgo')],
    },
    {
      id: 'lakes-drive-d09',
      type: 'itineraryItem',
      title: 'White Lake → ULN (560km)',
      rowId: 'travel',
      dayId: 'd09',
      startSlot: 32.3,
      span: 3.5,
      color: 'critical',
      familyIds: ['eight-lakes-core'],
      status: 'Transit',
      riskLevel: 'High',
      taskIds: [],
      linkedEntityKeys: [makeEntityKey('location', 'loc-uln')],
    },
    {
      id: 'flight-out',
      type: 'itineraryItem',
      title: 'ULN→NRT Flight (MIAT OM509)',
      rowId: 'travel',
      dayId: 'd10',
      startSlot: 38.4,
      span: 0.8,
      color: 'success',
      familyIds: ['gobi-core', 'eight-lakes-core'],
      status: 'Booked',
      riskLevel: 'Low',
      taskIds: ['task-flight'],
      linkedEntityKeys: [makeEntityKey('location', 'loc-ubn-airport')],
    },
    // --- Activities row ---
    {
      id: 'arrival-ops',
      type: 'itineraryItem',
      title: 'Arrival + ULN Prep',
      rowId: 'activities',
      dayId: 'd01',
      startSlot: 0,
      span: 4,
      color: 'success',
      locationId: 'loc-uln',
      status: 'Go',
      riskLevel: 'Low',
      linkedEntityKeys: [makeEntityKey('activity', 'act-arrival')],
      taskIds: ['task-flight'],
    },
    {
      id: 'explore-d02',
      type: 'itineraryItem',
      title: 'First drive + exploration',
      rowId: 'activities',
      dayId: 'd02',
      startSlot: 4,
      span: 4,
      color: 'warning',
      status: 'Go',
      riskLevel: 'Low',
      linkedEntityKeys: [makeEntityKey('activity', 'act-d02')],
      taskIds: ['task-drone-reg'],
    },
    {
      id: 'explore-d03',
      type: 'itineraryItem',
      title: 'Steppe transition',
      rowId: 'activities',
      dayId: 'd03',
      startSlot: 8,
      span: 4,
      color: 'warning',
      status: 'Go',
      riskLevel: 'Low',
      linkedEntityKeys: [makeEntityKey('activity', 'act-d03')],
      taskIds: [],
    },
    {
      id: 'explore-d04',
      type: 'itineraryItem',
      title: 'Deep country exploration',
      rowId: 'activities',
      dayId: 'd04',
      startSlot: 12,
      span: 4,
      color: 'info',
      status: 'Go',
      riskLevel: 'Low',
      linkedEntityKeys: [makeEntityKey('activity', 'act-d04')],
      taskIds: [],
    },
    {
      id: 'core-start',
      type: 'itineraryItem',
      title: '★ Core segment start',
      rowId: 'activities',
      dayId: 'd05',
      startSlot: 16,
      span: 4,
      color: 'critical',
      status: 'Watch',
      riskLevel: 'High',
      linkedEntityKeys: [makeEntityKey('activity', 'act-d05')],
      taskIds: ['task-star-gear'],
    },
    {
      id: 'perseid-peak',
      type: 'itineraryItem',
      title: '⭐ PERSEID PEAK NIGHT',
      rowId: 'activities',
      dayId: 'd06',
      startSlot: 20,
      span: 4,
      color: 'critical',
      status: 'Watch',
      riskLevel: 'Critical',
      linkedEntityKeys: [makeEntityKey('activity', 'act-d06')],
      taskIds: ['task-star-gear'],
    },
    {
      id: 'post-perseid',
      type: 'itineraryItem',
      title: 'Post-Perseid movement',
      rowId: 'activities',
      dayId: 'd07',
      startSlot: 24,
      span: 4,
      color: 'info',
      status: 'Go',
      riskLevel: 'Low',
      linkedEntityKeys: [makeEntityKey('activity', 'act-d07')],
      taskIds: [],
    },
    {
      id: 'cultural-day',
      type: 'itineraryItem',
      title: 'Cultural / scenic day',
      rowId: 'activities',
      dayId: 'd08',
      startSlot: 28,
      span: 4,
      color: 'info',
      status: 'Go',
      riskLevel: 'Low',
      linkedEntityKeys: [makeEntityKey('activity', 'act-d08')],
      taskIds: [],
    },
    {
      id: 'return-drive',
      type: 'itineraryItem',
      title: 'Return to ULN',
      rowId: 'activities',
      dayId: 'd09',
      startSlot: 32,
      span: 4,
      color: 'muted',
      status: 'Go',
      riskLevel: 'Medium',
      linkedEntityKeys: [makeEntityKey('activity', 'act-d09')],
      taskIds: [],
    },
    {
      id: 'departure-ops',
      type: 'itineraryItem',
      title: 'Departure day',
      rowId: 'activities',
      dayId: 'd10',
      startSlot: 36,
      span: 4,
      color: 'success',
      locationId: 'loc-uln',
      status: 'Go',
      riskLevel: 'Low',
      linkedEntityKeys: [makeEntityKey('activity', 'act-departure')],
      taskIds: [],
    },
    // --- Support (Drone / Star) row ---
    {
      id: 'drone-d02',
      type: 'itineraryItem',
      title: 'Drone: rock formations',
      rowId: 'support',
      dayId: 'd02',
      startSlot: 5,
      span: 1.5,
      color: 'info',
      status: 'Go',
      riskLevel: 'Low',
      linkedEntityKeys: [makeEntityKey('activity', 'act-d02')],
      taskIds: ['task-drone-reg'],
    },
    {
      id: 'drone-d03',
      type: 'itineraryItem',
      title: 'Drone: White Stupa sunset',
      rowId: 'support',
      dayId: 'd03',
      startSlot: 10,
      span: 1.5,
      color: 'warning',
      status: 'Go',
      riskLevel: 'Low',
      linkedEntityKeys: [makeEntityKey('activity', 'act-d03')],
      taskIds: ['task-drone-reg'],
    },
    {
      id: 'star-d03',
      type: 'itineraryItem',
      title: '★ Star photography #1',
      rowId: 'support',
      dayId: 'd03',
      startSlot: 11.5,
      span: 0.5,
      color: 'violet',
      status: 'Go',
      riskLevel: 'Low',
      linkedEntityKeys: [makeEntityKey('activity', 'act-d03')],
      taskIds: ['task-star-gear'],
    },
    {
      id: 'drone-d04',
      type: 'itineraryItem',
      title: 'Drone: canyon / waterfall',
      rowId: 'support',
      dayId: 'd04',
      startSlot: 14,
      span: 1.5,
      color: 'info',
      status: 'Go',
      riskLevel: 'Low',
      linkedEntityKeys: [makeEntityKey('activity', 'act-d04')],
      taskIds: ['task-drone-reg'],
    },
    {
      id: 'star-d04',
      type: 'itineraryItem',
      title: '★ Star photography #2',
      rowId: 'support',
      dayId: 'd04',
      startSlot: 15.5,
      span: 0.5,
      color: 'violet',
      status: 'Go',
      riskLevel: 'Low',
      linkedEntityKeys: [makeEntityKey('activity', 'act-d04')],
      taskIds: ['task-star-gear'],
    },
    {
      id: 'perseid-star',
      type: 'itineraryItem',
      title: '⭐ PERSEID METEOR PEAK',
      rowId: 'support',
      dayId: 'd06',
      startSlot: 23,
      span: 1,
      color: 'critical',
      status: 'Watch',
      riskLevel: 'Critical',
      linkedEntityKeys: [makeEntityKey('activity', 'act-d06')],
      taskIds: ['task-star-gear'],
    },
    {
      id: 'drone-d07',
      type: 'itineraryItem',
      title: 'Drone: cliffs / volcano',
      rowId: 'support',
      dayId: 'd07',
      startSlot: 26,
      span: 1.5,
      color: 'info',
      status: 'Go',
      riskLevel: 'Low',
      linkedEntityKeys: [makeEntityKey('activity', 'act-d07')],
      taskIds: ['task-drone-reg'],
    },
    {
      id: 'drone-d08',
      type: 'itineraryItem',
      title: 'Drone: monastery / lake',
      rowId: 'support',
      dayId: 'd08',
      startSlot: 30,
      span: 1.5,
      color: 'info',
      status: 'Go',
      riskLevel: 'Low',
      linkedEntityKeys: [makeEntityKey('activity', 'act-d08')],
      taskIds: ['task-drone-reg'],
    },
    {
      id: 'drone-d09',
      type: 'itineraryItem',
      title: 'Drone: last grassland flight',
      rowId: 'support',
      dayId: 'd09',
      startSlot: 34,
      span: 1,
      color: 'muted',
      status: 'Go',
      riskLevel: 'Low',
      linkedEntityKeys: [makeEntityKey('activity', 'act-d09')],
      taskIds: ['task-drone-reg'],
    },
  ]
}

function buildMeals() {
  return [
    {
      id: 'meal-d01',
      type: 'meal',
      title: 'ULN restaurant dinner',
      dayId: 'd01',
      startSlot: 3,
      status: 'Assigned',
      owner: 'Solo',
      reservationType: 'Restaurant',
      timeLabel: '7:30 PM',
      locationId: 'loc-uln',
      linkedEntityKeys: [makeEntityKey('activity', 'act-arrival')],
      taskIds: [],
      note: 'First night dinner in Ulaanbaatar. Mongolian BBQ or Korean.',
    },
    {
      id: 'meal-d02',
      type: 'meal',
      title: 'Ger camp meals',
      dayId: 'd02',
      startSlot: 7,
      status: 'Assigned',
      owner: 'Camp',
      reservationType: 'Camp meals',
      timeLabel: 'All day',
      linkedEntityKeys: [makeEntityKey('activity', 'act-d02')],
      taskIds: [],
      note: 'Lunch en route. Dinner at ger camp.',
    },
    {
      id: 'meal-d03',
      type: 'meal',
      title: 'Nomad family meals',
      dayId: 'd03',
      startSlot: 11,
      status: 'Assigned',
      owner: 'Nomad family',
      reservationType: 'Nomad stay',
      timeLabel: 'All day',
      linkedEntityKeys: [makeEntityKey('activity', 'act-d03')],
      taskIds: [],
      note: 'Tsagaan Suvarga area. Authentic nomad family meals.',
    },
    {
      id: 'meal-d04',
      type: 'meal',
      title: 'Ger camp meals',
      dayId: 'd04',
      startSlot: 15,
      status: 'Assigned',
      owner: 'Camp',
      reservationType: 'Camp meals',
      timeLabel: 'All day',
      linkedEntityKeys: [makeEntityKey('activity', 'act-d04')],
      taskIds: [],
      note: 'Yolyn Am / Orkhon area meals.',
    },
    {
      id: 'meal-d05',
      type: 'meal',
      title: 'Camp meals + Perseid prep',
      dayId: 'd05',
      startSlot: 19,
      status: 'Assigned',
      owner: 'Camp',
      reservationType: 'Camp meals',
      timeLabel: 'All day',
      linkedEntityKeys: [makeEntityKey('activity', 'act-d05')],
      taskIds: [],
      note: 'Khongor / Orkhon area. Prep for Perseid night.',
    },
    {
      id: 'meal-d06',
      type: 'meal',
      title: 'Khorkhog (stone-cooked lamb)',
      dayId: 'd06',
      startSlot: 22,
      status: 'Assigned',
      owner: 'Guide',
      reservationType: 'Special',
      timeLabel: 'Evening',
      linkedEntityKeys: [makeEntityKey('activity', 'act-d06')],
      taskIds: [],
      note: '★ PERSEID DAY. Special Mongolian stone BBQ celebration.',
    },
    {
      id: 'meal-d07',
      type: 'meal',
      title: 'Camp / trail meals',
      dayId: 'd07',
      startSlot: 27,
      status: 'Assigned',
      owner: 'Camp',
      reservationType: 'Camp meals',
      timeLabel: 'All day',
      linkedEntityKeys: [makeEntityKey('activity', 'act-d07')],
      taskIds: [],
      note: 'Post-Perseid travel day meals.',
    },
    {
      id: 'meal-d08',
      type: 'meal',
      title: 'Town restaurant',
      dayId: 'd08',
      startSlot: 31,
      status: 'Pending',
      owner: 'Solo',
      reservationType: 'Restaurant',
      timeLabel: 'Evening',
      linkedEntityKeys: [makeEntityKey('activity', 'act-d08')],
      taskIds: [],
      note: 'Kharkhorin or Khorgo area. First proper restaurant in days.',
    },
    {
      id: 'meal-d09',
      type: 'meal',
      title: 'Road meals + ULN dinner',
      dayId: 'd09',
      startSlot: 35,
      status: 'Pending',
      owner: 'Solo',
      reservationType: 'Restaurant',
      timeLabel: 'Evening',
      locationId: 'loc-uln',
      linkedEntityKeys: [makeEntityKey('activity', 'act-d09')],
      taskIds: [],
      note: 'Long drive day. Quick lunch stops. Celebration dinner in ULN.',
    },
    {
      id: 'meal-d10',
      type: 'meal',
      title: 'ULN breakfast',
      dayId: 'd10',
      startSlot: 37,
      status: 'Pending',
      owner: 'Solo',
      reservationType: 'Hotel',
      timeLabel: '8:00 AM',
      locationId: 'loc-uln',
      linkedEntityKeys: [makeEntityKey('activity', 'act-departure')],
      taskIds: [],
      note: 'Last breakfast before departure flight.',
    },
  ]
}

function buildActivities() {
  return [
    {
      id: 'act-arrival',
      type: 'activity',
      title: 'Arrival + ULN Prep',
      dayId: 'd01',
      window: 'Day 1 (8/7 Thu) evening',
      status: 'Go',
      riskLevel: 'Low',
      weatherSensitivity: 'Low',
      locationId: 'loc-uln',
      linkedEntityKeys: [
        makeEntityKey('itineraryItem', 'flight-in'),
        makeEntityKey('itineraryItem', 'arrival-ops'),
        makeEntityKey('meal', 'meal-d01'),
      ],
      taskIds: ['task-flight'],
      description: 'Land at UBN 19:15. Transfer to ULN hotel. Gear check. Early sleep for Day 2 dawn start.',
      backup: 'If flight delayed, skip gear check and go straight to hotel.',
      note: 'First objective: confirm all drone gear survived the flight.',
    },
    {
      id: 'act-d02',
      type: 'activity',
      title: 'First Drive + Exploration',
      dayId: 'd02',
      window: 'Day 2 (8/8 Fri) all day',
      status: 'Go',
      riskLevel: 'Low',
      weatherSensitivity: 'Low',
      linkedEntityKeys: [
        makeEntityKey('itineraryItem', 'explore-d02'),
        makeEntityKey('itineraryItem', 'drone-d02'),
        makeEntityKey('meal', 'meal-d02'),
      ],
      taskIds: ['task-drone-reg'],
      description: 'ゴビCore: ULN→Baga Gazriin Chuluu 280km. Drone rock formations. 八湖Core: ULN→Tsagaan Suvarga 280km. Sunset drone.',
      backup: 'Shorten stops if road conditions slow progress.',
      note: 'First real drone session. Calibrate for Mongolia conditions.',
    },
    {
      id: 'act-d03',
      type: 'activity',
      title: 'Steppe Transition',
      dayId: 'd03',
      window: 'Day 3 (8/9 Sat) all day',
      status: 'Go',
      riskLevel: 'Low',
      weatherSensitivity: 'Medium',
      linkedEntityKeys: [
        makeEntityKey('itineraryItem', 'explore-d03'),
        makeEntityKey('itineraryItem', 'drone-d03'),
        makeEntityKey('itineraryItem', 'star-d03'),
        makeEntityKey('meal', 'meal-d03'),
      ],
      taskIds: ['task-star-gear'],
      description: 'ゴビCore: Tsagaan Suvarga. Sunset drone S-tier. Star #1. 八湖Core: Arvaikheer rest day.',
      backup: 'If cloudy, prioritize drone over star photography.',
      note: 'First star photography test. Validate settings for Perseid peak.',
    },
    {
      id: 'act-d04',
      type: 'activity',
      title: 'Deep Country Exploration',
      dayId: 'd04',
      window: 'Day 4 (8/10 Sun) all day',
      status: 'Go',
      riskLevel: 'Low',
      weatherSensitivity: 'Medium',
      linkedEntityKeys: [
        makeEntityKey('itineraryItem', 'explore-d04'),
        makeEntityKey('itineraryItem', 'drone-d04'),
        makeEntityKey('itineraryItem', 'star-d04'),
        makeEntityKey('meal', 'meal-d04'),
      ],
      taskIds: [],
      description: 'ゴビCore: Yolyn Am ice canyon hike. 八湖Core: Orkhon Falls drone S-tier. Star #2 pre-Perseid.',
      backup: 'Canyon may have limited ice in August. Falls drone depends on wind.',
      note: 'Pre-Perseid star session. Second best night for star photography.',
    },
    {
      id: 'act-d05',
      type: 'activity',
      title: '★ Core Segment Start',
      dayId: 'd05',
      window: 'Day 5 (8/11 Mon) all day',
      status: 'Watch',
      riskLevel: 'High',
      weatherSensitivity: 'High',
      linkedEntityKeys: [
        makeEntityKey('itineraryItem', 'core-start'),
        makeEntityKey('meal', 'meal-d05'),
      ],
      taskIds: ['task-star-gear'],
      description: 'ゴビCore: Khongor Sand Dunes. 300m dunes. Camel ride. 八湖Core: ★ Horse trek Day 1 — Orkhon to high altitude.',
      backup: 'Sand dune conditions depend on recent weather. Horse trek needs weather window.',
      note: 'This is the trip pivot. Everything builds toward tomorrow night.',
    },
    {
      id: 'act-d06',
      type: 'activity',
      title: '⭐ PERSEID PEAK NIGHT',
      dayId: 'd06',
      window: 'Day 6 (8/12 Tue) — CRITICAL',
      status: 'Watch',
      riskLevel: 'Critical',
      weatherSensitivity: 'Critical',
      linkedEntityKeys: [
        makeEntityKey('itineraryItem', 'perseid-peak'),
        makeEntityKey('itineraryItem', 'perseid-star'),
        makeEntityKey('meal', 'meal-d06'),
      ],
      taskIds: ['task-star-gear'],
      description: 'ゴビCore: Khongor deep Gobi. Zero light pollution at 1,200m. 八湖Core: Eight Lakes 2,400m by horse. Both: Perseid peak observation + long exposure photography.',
      backup: 'If clouds, shift to next-night window (Aug 13). Perseids visible Aug 11-14.',
      note: 'THE night. Everything in the trip is optimized for this moment.',
    },
    {
      id: 'act-d07',
      type: 'activity',
      title: 'Post-Perseid Movement',
      dayId: 'd07',
      window: 'Day 7 (8/13 Wed) all day',
      status: 'Go',
      riskLevel: 'Low',
      weatherSensitivity: 'Low',
      linkedEntityKeys: [
        makeEntityKey('itineraryItem', 'post-perseid'),
        makeEntityKey('itineraryItem', 'drone-d07'),
        makeEntityKey('meal', 'meal-d07'),
      ],
      taskIds: [],
      description: 'ゴビCore: Bayanzag Flaming Cliffs. Dinosaur fossils. Sunset drone. 八湖Core: Horse trek Day 3 descent → car → Tsetserleg.',
      backup: 'Flexible timing. Both routes have margin here.',
      note: 'Recovery day after the Perseid all-nighter.',
    },
    {
      id: 'act-d08',
      type: 'activity',
      title: 'Cultural / Scenic Day',
      dayId: 'd08',
      window: 'Day 8 (8/14 Thu) all day',
      status: 'Go',
      riskLevel: 'Low',
      weatherSensitivity: 'Low',
      linkedEntityKeys: [
        makeEntityKey('itineraryItem', 'cultural-day'),
        makeEntityKey('itineraryItem', 'drone-d08'),
        makeEntityKey('meal', 'meal-d08'),
      ],
      taskIds: [],
      description: 'ゴビCore: Ongi Monastery → Kharkhorin. Erdene Zuu 108 stupas. 八湖Core: Khorgo Volcano hike + drone. White Lake sunset.',
      backup: 'Both routes are well-defined. No high-risk segments.',
      note: 'Last major drone day. Make it count.',
    },
    {
      id: 'act-d09',
      type: 'activity',
      title: 'Return Drive',
      dayId: 'd09',
      window: 'Day 9 (8/15 Fri) all day',
      status: 'Go',
      riskLevel: 'Medium',
      weatherSensitivity: 'Low',
      linkedEntityKeys: [
        makeEntityKey('itineraryItem', 'return-drive'),
        makeEntityKey('itineraryItem', 'drone-d09'),
        makeEntityKey('meal', 'meal-d09'),
      ],
      taskIds: [],
      description: 'ゴビCore: Kharkhorin→ULN. Last grassland drone. 八湖Core: White Lake sunrise → ULN 560km.',
      backup: 'Start early. 八湖Core is a very long drive — may need overnight stop.',
      note: 'Focus on safe return. One last opportunistic drone flight.',
    },
    {
      id: 'act-departure',
      type: 'activity',
      title: 'Departure',
      dayId: 'd10',
      window: 'Day 10 (8/16 Sat)',
      status: 'Go',
      riskLevel: 'Low',
      weatherSensitivity: 'Low',
      locationId: 'loc-uln',
      linkedEntityKeys: [
        makeEntityKey('itineraryItem', 'flight-out'),
        makeEntityKey('itineraryItem', 'departure-ops'),
        makeEntityKey('meal', 'meal-d10'),
      ],
      taskIds: [],
      description: 'MIAT OM509 ULN→NRT 14:05→20:00. Morning free for last ULN exploration or souvenir shopping.',
      backup: 'Keep morning light. Airport transfer by noon.',
      note: 'Pack drone gear carefully for the return flight.',
    },
  ]
}

function buildStayItems() {
  return [
    {
      id: 'stay-basecamp',
      type: 'stayItem',
      title: 'ULN Base',
      dayId: 'd01',
      locationId: 'loc-uln',
      category: 'overview',
      summary: 'Ulaanbaatar hotel on Day 1 and Day 10. Gear staging point.',
      linkedEntityKeys: [makeEntityKey('location', 'loc-uln')],
      taskIds: ['task-flight'],
      note: 'Confirm tour operator pickup time for Day 2 dawn departure.',
    },
    {
      id: 'stay-ger-camps',
      type: 'stayItem',
      title: 'Ger camp accommodations',
      dayId: 'd02',
      locationId: 'loc-uln',
      category: 'accommodation',
      summary: 'Traditional Mongolian ger (yurt) camps. Basic but comfortable. Limited power.',
      linkedEntityKeys: [
        makeEntityKey('family', 'gobi-core'),
        makeEntityKey('family', 'eight-lakes-core'),
      ],
      taskIds: [],
      note: 'Charge all devices at every opportunity. Solar panels and car chargers are essential.',
    },
    {
      id: 'stay-nomad',
      type: 'stayItem',
      title: 'Nomad family stays',
      dayId: 'd03',
      locationId: 'loc-uln',
      category: 'accommodation',
      summary: 'Authentic nomad family hosting. Cultural immersion experience.',
      linkedEntityKeys: [
        makeEntityKey('activity', 'act-d03'),
      ],
      taskIds: [],
      note: 'Arranged by tour operator. Bring small gifts for host family.',
    },
    {
      id: 'stay-gear',
      type: 'stayItem',
      title: 'Drone & star gear staging',
      dayId: 'd01',
      locationId: 'loc-uln',
      category: 'gear',
      summary: 'Drone registration, battery management, star photography equipment setup.',
      linkedEntityKeys: [
        makeEntityKey('activity', 'act-d06'),
      ],
      taskIds: ['task-drone-reg', 'task-star-gear'],
      note: 'Keep drone registration document accessible at all times. MCAA may inspect.',
    },
  ]
}

function buildExpenses() {
  return [
    {
      id: 'exp-flight',
      type: 'expense',
      title: 'Flight MIAT OM502/509 (round trip)',
      payer: 'Toshiya',
      amount: 113600,
      split: 'JPY — booked',
      allocationMode: 'individual',
      allocations: {},
      settled: true,
      linkedEntityKeys: [makeEntityKey('activity', 'act-arrival'), makeEntityKey('activity', 'act-departure')],
      note: 'NRT→ULN 14:40→19:15. ULN→NRT 14:05→20:00.',
    },
    {
      id: 'exp-gobi-tour',
      type: 'expense',
      title: 'ゴビCore tour (Travel Gobi Mongolia)',
      payer: 'Toshiya',
      amount: 980,
      split: 'USD — Option A',
      allocationMode: 'individual',
      allocations: {},
      settled: false,
      linkedEntityKeys: [makeEntityKey('family', 'gobi-core')],
      note: 'Includes driver, vehicle, guide, ger camp stays.',
    },
    {
      id: 'exp-lakes-tour',
      type: 'expense',
      title: '八湖Core tour (Amicus Mongolia)',
      payer: 'Toshiya',
      amount: 790,
      split: 'USD — Option B estimate',
      allocationMode: 'individual',
      allocations: {},
      settled: false,
      linkedEntityKeys: [makeEntityKey('family', 'eight-lakes-core')],
      note: 'Includes driver, vehicle, guide, horse guide, ger camp stays. Estimate — may increase.',
    },
    {
      id: 'exp-driver',
      type: 'expense',
      title: 'Driver / fuel (~$100/day)',
      payer: 'Toshiya',
      amount: 600,
      split: 'USD estimate',
      allocationMode: 'individual',
      allocations: {},
      settled: false,
      linkedEntityKeys: [],
      note: 'May be included in tour package. Verify with operator.',
    },
    {
      id: 'exp-accommodation',
      type: 'expense',
      title: 'Accommodation (ger camps)',
      payer: 'Toshiya',
      amount: 250,
      split: 'USD estimate',
      allocationMode: 'individual',
      allocations: {},
      settled: false,
      linkedEntityKeys: [makeEntityKey('stayItem', 'stay-ger-camps')],
      note: '$15-50/night. Most likely included in tour package.',
    },
    {
      id: 'exp-drone-reg',
      type: 'expense',
      title: 'Drone registration (MCAA)',
      payer: 'Toshiya',
      amount: 1300,
      split: 'JPY',
      allocationMode: 'individual',
      allocations: {},
      settled: false,
      linkedEntityKeys: [makeEntityKey('stayItem', 'stay-gear')],
      note: 'Mongolian Civil Aviation Authority registration required.',
    },
    {
      id: 'exp-other',
      type: 'expense',
      title: 'Other (visa, tips, food, souvenirs)',
      payer: 'Toshiya',
      amount: 25000,
      split: 'JPY estimate',
      allocationMode: 'individual',
      allocations: {},
      settled: false,
      linkedEntityKeys: [],
      note: 'Miscellaneous costs throughout the trip.',
    },
  ]
}

function buildTasks() {
  return [
    {
      id: 'task-flight',
      type: 'task',
      title: 'MIAT OM502/509 booked',
      dayId: 'd01',
      status: 'done',
      ownerFamilyId: null,
      linkedEntityKeys: [
        makeEntityKey('activity', 'act-arrival'),
        makeEntityKey('activity', 'act-departure'),
        makeEntityKey('expense', 'exp-flight'),
      ],
      note: '¥113,600 confirmed.',
    },
    {
      id: 'task-gobi-tour',
      type: 'task',
      title: 'Travel Gobi Mongolia tour confirmed',
      dayId: 'd01',
      status: 'open',
      ownerFamilyId: 'gobi-core',
      linkedEntityKeys: [
        makeEntityKey('family', 'gobi-core'),
        makeEntityKey('expense', 'exp-gobi-tour'),
      ],
      note: 'Need to book with Travel Gobi Mongolia. $980.',
    },
    {
      id: 'task-lakes-tour',
      type: 'task',
      title: 'Amicus Mongolia tour confirmed',
      dayId: 'd01',
      status: 'open',
      ownerFamilyId: 'eight-lakes-core',
      linkedEntityKeys: [
        makeEntityKey('family', 'eight-lakes-core'),
        makeEntityKey('expense', 'exp-lakes-tour'),
      ],
      note: 'Need to book with Amicus Mongolia. ~$790+.',
    },
    {
      id: 'task-drone-reg',
      type: 'task',
      title: 'Drone registration (MCAA)',
      dayId: 'd01',
      status: 'open',
      ownerFamilyId: null,
      linkedEntityKeys: [
        makeEntityKey('stayItem', 'stay-gear'),
        makeEntityKey('expense', 'exp-drone-reg'),
      ],
      note: 'Register with Mongolian Civil Aviation Authority before departure.',
    },
    {
      id: 'task-star-gear',
      type: 'task',
      title: 'Star photography gear ready',
      dayId: 'd01',
      status: 'open',
      ownerFamilyId: null,
      linkedEntityKeys: [
        makeEntityKey('stayItem', 'stay-gear'),
        makeEntityKey('activity', 'act-d06'),
      ],
      note: 'Tripod, intervalometer, wide-angle lens, extra batteries.',
    },
    {
      id: 'task-horse-prep',
      type: 'task',
      title: 'Horse trekking experience check',
      dayId: 'd05',
      status: 'open',
      ownerFamilyId: 'eight-lakes-core',
      linkedEntityKeys: [
        makeEntityKey('family', 'eight-lakes-core'),
        makeEntityKey('activity', 'act-d05'),
      ],
      note: 'Verify comfort level with 3-day horse trek. Consider practice ride.',
    },
    {
      id: 'task-route-decision',
      type: 'task',
      title: 'Route decision: ゴビCore vs 八湖Core',
      dayId: 'd01',
      status: 'open',
      ownerFamilyId: null,
      linkedEntityKeys: [
        makeEntityKey('family', 'gobi-core'),
        makeEntityKey('family', 'eight-lakes-core'),
      ],
      note: 'CEO needs to decide. Both routes anchor Perseid peak night on Aug 12.',
    },
  ]
}

function buildRoutes() {
  return [
    {
      id: 'route-gobi-core',
      type: 'route',
      title: 'ゴビCore full route',
      dayId: 'all',
      familyId: 'gobi-core',
      tone: 'warning',
      originCoordinates: ULN_COORDINATES,
      destinationLocationId: 'loc-uln',
      stopLocationIds: ['loc-baga-gazriin', 'loc-tsagaan-suvarga', 'loc-yolyn-am', 'loc-khongor', 'loc-bayanzag', 'loc-kharkhorin'],
      simulationStartSlot: 4,
      simulationEndSlot: 36,
      path: [
        ULN_COORDINATES,
        { lat: 46.2333, lng: 106.0500 },
        { lat: 44.7583, lng: 104.4667 },
        { lat: 43.5000, lng: 104.0833 },
        { lat: 43.7500, lng: 102.2500 },
        { lat: 44.1167, lng: 103.7167 },
        { lat: 47.1972, lng: 102.8278 },
        ULN_COORDINATES,
      ],
      linkedEntityKey: makeEntityKey('family', 'gobi-core'),
    },
    {
      id: 'route-eight-lakes-core',
      type: 'route',
      title: '八湖Core full route',
      dayId: 'all',
      familyId: 'eight-lakes-core',
      tone: 'critical',
      dashed: true,
      originCoordinates: ULN_COORDINATES,
      destinationLocationId: 'loc-uln',
      stopLocationIds: ['loc-tsagaan-suvarga', 'loc-arvaikheer', 'loc-orkhon-falls', 'loc-eight-lakes', 'loc-tsetserleg', 'loc-khorgo', 'loc-white-lake'],
      simulationStartSlot: 4,
      simulationEndSlot: 36,
      path: [
        ULN_COORDINATES,
        { lat: 44.7583, lng: 104.4667 },
        { lat: 46.2647, lng: 102.7760 },
        { lat: 46.7833, lng: 101.9667 },
        { lat: 46.8333, lng: 101.4167 },
        { lat: 47.4778, lng: 101.4528 },
        { lat: 48.1667, lng: 99.8333 },
        { lat: 48.1500, lng: 99.7167 },
        ULN_COORDINATES,
      ],
      linkedEntityKey: makeEntityKey('family', 'eight-lakes-core'),
    },
  ]
}

export function createInitialTripDocument() {
  return {
    selectedPage: 'itinerary',
    selection: DEFAULT_SELECTION,
    pageNotes: {
      itinerary: 'Two route options under evaluation. Perseid peak night (Aug 12) is the anchor for both routes.',
      stay: 'Ger camps and nomad family stays. Power charging is the main constraint.',
      meals: 'Mostly camp meals and nomad family cooking. Khorkhog on Perseid night is the highlight.',
      activities: 'Drone sessions are the primary creative output. Star photography on Perseid peak is the headline event.',
      expenses: 'Flight booked. Tour cost depends on route selection. Budget ~$2,000-2,500 total.',
      families: 'CEO deciding between ゴビCore (classic desert) and 八湖Core (horse trek + lakes).',
    },
    pageNoteMeta: {},
    ui: {
      searchQuery: '',
      timeline: {
        mode: 'scenario',
        cursorSlot: 3,
      },
      map: {
        showRoutes: true,
        showFacilities: true,
        showTraffic: false,
        focusFamilyId: 'all',
        focusDayId: 'all',
      },
    },
    families: buildFamilies(),
    locations: buildLocations(),
    routes: synchronizeRoutePaths(buildRoutes(), buildLocations()),
    itineraryItems: buildItineraryItems(),
    meals: buildMeals(),
    activities: buildActivities(),
    stayItems: buildStayItems(),
    expenses: buildExpenses(),
    tasks: buildTasks(),
  }
}

export function synchronizeRoutePaths(routes = [], locations = []) {
  const locationById = new Map(locations.map((location) => [location.id, location]))

  return routes.map((route) => {
    if (!route.originCoordinates || !route.destinationLocationId) return route

    const destination = locationById.get(route.destinationLocationId)?.coordinates
    const stopPoints = (route.stopLocationIds || [])
      .map((locationId) => locationById.get(locationId)?.coordinates)
      .filter(Boolean)

    if (!destination) return route

    return {
      ...route,
      path: [route.originCoordinates, ...stopPoints, destination],
    }
  })
}

export function migrateLegacyState(raw) {
  const doc = createInitialTripDocument()
  if (!raw || typeof raw !== 'object') return doc

  if (typeof raw.selectedPage === 'string') {
    doc.selectedPage = raw.selectedPage
  }

  if (raw.notes && typeof raw.notes === 'object') {
    doc.pageNotes = { ...doc.pageNotes, ...raw.notes }
  }

  if (Array.isArray(raw.meals)) {
    doc.meals = doc.meals.map((meal) => {
      const existing = raw.meals.find((item) => item.id === meal.id)
      return existing ? { ...meal, status: existing.status || meal.status, note: existing.note || meal.note } : meal
    })
  }

  if (Array.isArray(raw.expenses)) {
    doc.expenses = doc.expenses.map((expense) => {
      const existing = raw.expenses.find((item) => item.id === expense.id)
      return existing
        ? {
            ...expense,
            settled: typeof existing.settled === 'boolean' ? existing.settled : expense.settled,
            title: existing.title || expense.title,
            payer: existing.payer || expense.payer,
            amount: typeof existing.amount === 'number' ? existing.amount : expense.amount,
            split: existing.split || expense.split,
            allocationMode: existing.allocationMode || expense.allocationMode,
            allocations: existing.allocations && typeof existing.allocations === 'object'
              ? existing.allocations
              : expense.allocations,
            note: existing.note || expense.note,
          }
        : expense
    })
  }

  if (Array.isArray(raw.families)) {
    doc.families = doc.families.map((family) => {
      const existing = raw.families.find((item) => item.id === family.id)
      return existing
        ? {
            ...family,
            readiness: typeof existing.readiness === 'number' ? existing.readiness : family.readiness,
            status: existing.status || family.status,
            responsibility: existing.responsibility || family.responsibility,
            routeSummary: existing.routeSummary || family.routeSummary,
          }
        : family
    })

    const taskStatusById = {}
    raw.families.forEach((family) => {
      const mapping = LEGACY_FAMILY_TASKS[family.id] || {}
      ;(family.checklist || []).forEach((item) => {
        const taskId = mapping[item.id]
        if (taskId) {
          taskStatusById[taskId] = item.done ? 'done' : 'open'
        }
      })
    })

    doc.tasks = doc.tasks.map((task) =>
      taskStatusById[task.id] ? { ...task, status: taskStatusById[task.id] } : task,
    )

    if (typeof raw.selectedFamilyId === 'string') {
      doc.selection = { type: 'family', id: raw.selectedFamilyId }
    }
  }

  return doc
}

function refreshSeededCollection(existing = [], seeded = [], preserveFields = []) {
  const existingById = new Map(existing.map((item) => [item.id, item]))

  return seeded.map((item) => {
    const current = existingById.get(item.id)
    if (!current) return item

    const preserved = preserveFields.reduce((acc, field) => {
      if (current[field] !== undefined) acc[field] = current[field]
      return acc
    }, {})

    return {
      ...item,
      ...preserved,
    }
  })
}

function routeStructureMatches(currentRoute, seededRoute) {
  if (!currentRoute || !seededRoute) return false

  const currentOrigin = currentRoute.originCoordinates || null
  const seededOrigin = seededRoute.originCoordinates || null
  const sameOrigin =
    currentOrigin?.lat === seededOrigin?.lat
    && currentOrigin?.lng === seededOrigin?.lng

  const currentStops = currentRoute.stopLocationIds || []
  const seededStops = seededRoute.stopLocationIds || []
  const sameStops =
    currentStops.length === seededStops.length
    && currentStops.every((stopId, index) => stopId === seededStops[index])

  return sameOrigin && sameStops && currentRoute.destinationLocationId === seededRoute.destinationLocationId
}

function refreshSeededDoc(doc) {
  const seeded = createInitialTripDocument()
  const locations = refreshSeededCollection(doc.locations, seeded.locations, [
    'note',
    'lastEditedByFamilyId',
    'lastEditedAt',
    'title',
    'placesQuery',
    'placeId',
    'address',
    'coordinates',
    'externalUrl',
    'phoneNumber',
    'websiteUrl',
    'rating',
    'userRatingsTotal',
    'openingHours',
    'livePhotos',
    'basecampDrive',
  ])

  const currentRoutesById = new Map(doc.routes.map((route) => [route.id, route]))
  const routes = seeded.routes.map((route) => {
    const current = currentRoutesById.get(route.id)
    if (!current) return route

    const preserveLiveRouting = routeStructureMatches(current, route)

    return {
      ...route,
      ...(preserveLiveRouting
        ? {
            path: current.path,
            durationSeconds: current.durationSeconds,
            durationText: current.durationText,
            distanceMeters: current.distanceMeters,
            distanceText: current.distanceText,
          }
        : {}),
      note: current.note,
      lastEditedByFamilyId: current.lastEditedByFamilyId,
      lastEditedAt: current.lastEditedAt,
    }
  })

  return {
    ...doc,
    families: refreshSeededCollection(doc.families, seeded.families, [
      'readiness',
      'status',
      'responsibility',
      'note',
      'lastEditedByFamilyId',
      'lastEditedAt',
    ]),
    locations,
    itineraryItems: refreshSeededCollection(doc.itineraryItems, seeded.itineraryItems),
    stayItems: refreshSeededCollection(doc.stayItems, seeded.stayItems, ['note', 'lastEditedByFamilyId', 'lastEditedAt']),
    expenses: refreshSeededCollection(doc.expenses, seeded.expenses, [
      'title',
      'payer',
      'amount',
      'split',
      'settled',
      'allocationMode',
      'allocations',
      'note',
      'createdByFamilyId',
      'createdAt',
      'lastEditedByFamilyId',
      'lastEditedAt',
    ]),
    routes: synchronizeRoutePaths(routes, locations),
  }
}

export function getInitialTripDocument() {
  if (typeof window === 'undefined') return createInitialTripDocument()

  try {
    const rawCurrent = window.localStorage.getItem(TRIP_DOCUMENT_STORAGE_KEY)
    if (rawCurrent) {
      const parsed = JSON.parse(rawCurrent)
      if (parsed?.locations && parsed?.selection) return refreshSeededDoc(parsed)
    }
  } catch {
    return createInitialTripDocument()
  }

  return createInitialTripDocument()
}

export function clearLegacyTripStorage() {
  if (typeof window === 'undefined') return
  LEGACY_TRIP_DOCUMENT_STORAGE_KEYS.forEach((key) => window.localStorage.removeItem(key))
  LEGACY_VIEWER_PROFILE_STORAGE_KEYS.forEach((key) => window.localStorage.removeItem(key))
}

export function getLocationForEntity(doc, entity) {
  if (!entity) return null
  if (entity.type === 'location') return entity
  if (!entity.locationId) return null
  return getEntityById(doc, 'location', entity.locationId)
}

export function getTasksForEntity(doc, entity) {
  if (!entity) return []
  const entityKey = makeEntityKey(entity.type, entity.id)
  return doc.tasks.filter((task) => {
    if (entity.taskIds?.includes(task.id)) return true
    return (task.linkedEntityKeys || []).includes(entityKey)
  })
}

export function getLinkedEntities(doc, entity) {
  if (!entity) return []

  const seen = new Set()
  const linked = []

  const pushEntity = (item) => {
    if (!item) return
    const key = makeEntityKey(item.type, item.id)
    if (key === makeEntityKey(entity.type, entity.id) || seen.has(key)) return
    seen.add(key)
    linked.push(item)
  }

  ;(entity.linkedEntityKeys || []).forEach((key) => {
    const ref = parseEntityKey(key)
    pushEntity(getEntityById(doc, ref.type, ref.id))
  })

  if (entity.locationId) {
    pushEntity(getEntityById(doc, 'location', entity.locationId))
  }

  getTasksForEntity(doc, entity).forEach(pushEntity)

  return linked
}

export function getEntitySummary(entity) {
  if (!entity) return ''
  if (entity.type === 'family') return `${entity.origin} — ${entity.headcount}`
  if (entity.type === 'meal') return `${getDayMeta(entity.dayId)?.shortLabel || entity.dayId} at ${entity.timeLabel}`
  if (entity.type === 'activity') return entity.window
  if (entity.type === 'location') return entity.address
  if (entity.type === 'stayItem') return entity.category
  if (entity.type === 'expense') return `${entity.payer} · ${entity.amount}`
  if (entity.type === 'itineraryItem') return getSlotLabel(entity.startSlot)
  if (entity.type === 'task') return entity.status
  return ''
}

export function getSearchResults(doc, query) {
  if (!query?.trim()) return []
  const normalized = query.trim().toLowerCase()
  const types = ['family', 'meal', 'activity', 'location', 'stayItem', 'expense', 'itineraryItem', 'task']
  const items = types.flatMap((type) =>
    getCollection(doc, type).map((item) => ({
      ...item,
      type,
      searchText: [
        item.title,
        item.name,
        item.summary,
        item.note,
        item.address,
        item.description,
        item.backup,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase(),
    })),
  )

  return items
    .filter((item) => item.searchText.includes(normalized))
    .slice(0, 8)
}

export function getTimelineContext(doc, overrideCursorSlot = doc.ui.timeline.cursorSlot) {
  const cursorSlot = overrideCursorSlot
  const liveEntities = [...doc.itineraryItems, ...doc.meals].filter((item) => {
    const span = getItineraryItemEffectiveSpan(doc, item)
    return cursorSlot >= item.startSlot && cursorSlot < item.startSlot + span
  })

  const nextEntities = [...doc.itineraryItems, ...doc.meals]
    .filter((item) => item.startSlot > cursorSlot)
    .sort((a, b) => a.startSlot - b.startSlot)
    .slice(0, 4)

  const prepSoon = nextEntities
    .flatMap((item) => getTasksForEntity(doc, item))
    .filter((task) => task.status !== 'done')
    .filter((task, index, array) => array.findIndex((candidate) => candidate.id === task.id) === index)
    .slice(0, 5)

  const riskWatch = [...doc.activities, ...doc.itineraryItems]
    .filter((item) => item.riskLevel === 'High' || item.riskLevel === 'Critical' || item.status === 'Watch')
    .slice(0, 4)

  return {
    cursorSlot,
    cursorLabel: getSlotLabel(cursorSlot),
    liveEntities,
    nextEntities,
    prepSoon,
    riskWatch,
  }
}

export function getDependencyPrompts(doc, entity) {
  const tasks = getTasksForEntity(doc, entity).filter((task) => task.status !== 'done')
  return tasks.slice(0, 3).map((task) => ({
    id: `prompt-${entity.type}-${entity.id}-${task.id}`,
    label: task.title,
    reason: entity.type === 'activity'
      ? `${getEntityTitle(entity)} depends on this before go-time.`
      : 'This is still unresolved and is linked to the selected item.',
  }))
}

export function getRouteForEntity(doc, entity) {
  if (!entity) return null
  if (entity.routeId) return getEntityById(doc, 'route', entity.routeId)
  const entityKey = makeEntityKey(entity.type, entity.id)
  const directRoute = doc.routes.find((route) => route.linkedEntityKey === entityKey)
  if (directRoute) return directRoute

  for (const linkedKey of entity.linkedEntityKeys || []) {
    const linkedRoute = doc.routes.find((route) => route.linkedEntityKey === linkedKey)
    if (linkedRoute) return linkedRoute
  }

  return null
}

export function updateEntityInCollection(collection, id, updater) {
  return collection.map((item) => (item.id === id ? updater(item) : item))
}

function replacePublicStrings(value) {
  if (typeof value !== 'string' || !value) return value
  return value
}

function sanitizePublicText(value, fallback = '') {
  if (typeof value !== 'string') return fallback
  return replacePublicStrings(value)
}

function sanitizeFamilyEntity(family) {
  const profile = PUBLIC_FAMILY_PROFILES[family.id]
  if (!profile) {
    return {
      ...family,
      note: '',
    }
  }

  return {
    ...family,
    title: profile.title,
    name: profile.name,
    shortOrigin: profile.shortOrigin,
    origin: profile.origin,
    originAddress: profile.originAddress,
    originCoordinates: profile.originCoordinates,
    responsibility: profile.responsibility,
    routeSummary: profile.routeSummary,
    note: profile.note,
  }
}

function sanitizeLocationEntity(location) {
  if (location.id === 'loc-uln') {
    return {
      ...location,
      title: PUBLIC_BASECAMP.name,
      address: PUBLIC_BASECAMP.address,
      coordinates: PUBLIC_BASECAMP.coordinates,
      summary: PUBLIC_BASECAMP.summary,
      accessNote: PUBLIC_BASECAMP.accessNote,
      directionsNote: PUBLIC_BASECAMP.directionsNote,
      parkingNote: PUBLIC_BASECAMP.parkingNote,
      lockNote: PUBLIC_BASECAMP.lockNote,
      checkIn: PUBLIC_BASECAMP.checkIn,
      checkOut: PUBLIC_BASECAMP.checkOut,
      wifiNetwork: PUBLIC_BASECAMP.wifiNetwork,
      wifiPassword: PUBLIC_BASECAMP.wifiPassword,
      hostName: PUBLIC_BASECAMP.hostName,
      coHostName: PUBLIC_BASECAMP.coHostName,
      guestSummary: PUBLIC_BASECAMP.guestSummary,
      confirmationCode: PUBLIC_BASECAMP.confirmationCode,
      vehicleFee: PUBLIC_BASECAMP.vehicleFee,
      externalUrl: PUBLIC_BASECAMP.externalUrl,
      manualUrl: PUBLIC_BASECAMP.manualUrl,
      photos: PUBLIC_BASECAMP.photos,
      livePhotos: [],
      websiteUrl: null,
      phoneNumber: null,
      reservationNote: null,
      note: '',
    }
  }

  return {
    ...location,
    title: sanitizePublicText(location.title),
    summary: sanitizePublicText(location.summary),
    note: '',
    reservationNote: sanitizePublicText(location.reservationNote || ''),
    address: sanitizePublicText(location.address),
  }
}

function sanitizeStayItemEntity(item) {
  return {
    ...item,
    title: sanitizePublicText(item.title),
    summary: PUBLIC_STAY_SUMMARIES[item.id] || sanitizePublicText(item.summary),
    note: PUBLIC_STAY_NOTES[item.id] || '',
  }
}

function sanitizeExpenseEntity(expense) {
  return {
    ...expense,
    title: sanitizePublicText(expense.title),
    payer: PUBLIC_EXPENSE_PAYER,
    allocations: {},
    note: '',
  }
}

function sanitizeGenericEntity(entity) {
  return {
    ...entity,
    title: sanitizePublicText(entity.title),
    name: sanitizePublicText(entity.name),
    summary: sanitizePublicText(entity.summary),
    note: '',
    description: sanitizePublicText(entity.description),
    backup: sanitizePublicText(entity.backup),
    routeSummary: sanitizePublicText(entity.routeSummary),
    owner: sanitizePublicText(entity.owner),
    payer: sanitizePublicText(entity.payer),
  }
}

export function projectTripDocument(doc, visibilityMode = 'public') {
  if (visibilityMode !== 'public') return doc

  const sanitizedFamilies = doc.families.map(sanitizeFamilyEntity)

  const projected = {
    ...doc,
    pageNotes: Object.fromEntries(Object.keys(doc.pageNotes || {}).map((key) => [key, ''])),
    pageNoteMeta: {},
    families: sanitizedFamilies,
    locations: doc.locations.map(sanitizeLocationEntity),
    stayItems: doc.stayItems.map(sanitizeStayItemEntity),
    expenses: doc.expenses.map(sanitizeExpenseEntity),
    meals: doc.meals.map(sanitizeGenericEntity),
    activities: doc.activities.map(sanitizeGenericEntity),
    itineraryItems: doc.itineraryItems.map(sanitizeGenericEntity),
    tasks: doc.tasks.map(sanitizeGenericEntity),
  }

  projected.routes = synchronizeRoutePaths(
    doc.routes.map((route) => ({
      ...route,
      title: sanitizePublicText(route.title),
      note: '',
    })),
    projected.locations,
  )

  return projected
}

export function getSelectablePageEntities(doc, pageId) {
  switch (pageId) {
    case 'itinerary':
      return [...doc.activities, ...doc.itineraryItems]
    case 'stay':
      return [...doc.stayItems, ...doc.locations.filter((location) => location.category === 'stay')]
    case 'meals':
      return doc.meals
    case 'activities':
      return doc.activities
    case 'expenses':
      return doc.expenses
    case 'families':
      return doc.families
    default:
      return []
  }
}

export function ensureSelectionForPage(doc, pageId) {
  const selected = getEntityBySelection(doc, doc.selection)
  if (selected && isEntityOnPage(selected, pageId)) return doc.selection
  const fallback = getSelectablePageEntities(doc, pageId)[0]
  return fallback ? { type: fallback.type, id: fallback.id } : DEFAULT_SELECTION
}

export function getTasksByFamily(doc, familyId) {
  return doc.tasks.filter((task) => task.ownerFamilyId === familyId)
}

export function getFamilyReadiness(doc, familyId) {
  const tasks = getTasksByFamily(doc, familyId)
  if (!tasks.length) return 100
  const doneCount = tasks.filter((task) => task.status === 'done').length
  return Math.round((doneCount / tasks.length) * 100)
}

export function getTasksForDay(doc, dayId) {
  return doc.tasks.filter((task) => task.dayId === dayId)
}

export function getPageNote(doc, pageId) {
  return doc.pageNotes[pageId] || ''
}

export function getFamilyFilterOptions(doc) {
  return [
    { id: 'all', label: 'All Routes' },
    ...doc.families.map((family) => ({ id: family.id, label: family.title })),
  ]
}
