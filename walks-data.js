/* ============================================================
   CORNERWAYS — Walks & runs data
   ------------------------------------------------------------
   To add a new route, copy one of the objects below. `length`
   is a free-text line for distance/time/difficulty — put
   whatever's most useful there. `lengthMi` is the same distance
   as a plain number (miles) — used by the length filter on the
   Walks tab. `coords` is [lat, lon] for the walk's starting
   point — used by the "distance from Cornerways" filter (and
   any future map). These are landmark-level estimates, not
   surveyed — good enough for filtering, not for navigation.
   `links` is optional and can hold as many entries as you like.
   ============================================================ */

const WALKS = [
  {
    name: "Worth Matravers → Winspit → Dancing Ledge → Priest's Way",
    length: "~5–6 mi · 2.5–3 hr walking · ~250m ascent · Moderate",
    lengthMi: 5.5,
    coords: [50.5956, -2.0396],
    description: "Straight out of the village down to the eerie abandoned stone-quarry caves at Winspit, then along the coast path to the flat quarried shelf of Dancing Ledge — a favourite spot to swim in the old tidal pool. Loop back inland along the Priest's Way, the medieval path once walked by the parish priest on his way to Swanage.",
    links: [
      { label: "Route on AllTrails", url: "https://www.alltrails.com/trail/england/dorset/worth-matravers-and-priest-s-way-circular" }
    ]
  },
  {
    name: "Worth Matravers, Winspit & St Aldhelm's Head Circular",
    length: "~4.7 mi · ~2 hr 30–3 hr · ~285m ascent · Moderate",
    lengthMi: 4.7,
    coords: [50.5956, -2.0396],
    description: "A well-loved circular down to the old quarry at Winspit, then along the coast path to the dramatic headland at St Aldhelm's Head — its chapel, coastguard lookout and radar memorial — before looping back to the village. Popular with both hikers and trail runners.",
    links: [
      { label: "Route details (AllTrails)", url: "https://www.alltrails.com/trail/england/dorset/worth-matravers-winspit-and-st-aldhelms-head-circular" }
    ]
  },
  {
    name: "The Priest's Way to Swanage",
    length: "~4.75 km one way · Easy · Flat / gentle",
    lengthMi: 3,
    coords: [50.5956, -2.0396],
    description: "A quiet, largely traffic-free track between dry-stone walls, connecting Worth Matravers to Swanage. A good out-and-back run, or use it to make a longer coastal loop by returning along the cliffs.",
    links: []
  },
  {
    name: "Winspit & Seacombe loop from Langton Matravers",
    length: "~9.5 km · ~2 hr 40 · Moderate",
    lengthMi: 5.9,
    coords: [50.6047, -1.9847],
    description: "Takes in the old sea-cliff quarries at Seacombe and Winspit, both once central to the Purbeck stone trade and now atmospheric, half-wild places to explore — bring a torch if you want to poke into the quarry caves.",
    links: [
      { label: "GPS route on Komoot", url: "https://www.komoot.com/smarttour/516386" }
    ]
  },
  {
    name: "Durlston Woodland Trail",
    length: "~0.5 mi · Easy · Well-surfaced, gentle",
    lengthMi: 0.5,
    coords: [50.5934, -1.9522],
    description: "A short, sheltered, buggy-friendly waymarked trail through Durlston Country Park's historic Victorian pleasure grounds, past the Great Globe and Durlston Castle. A gentle option on a poor-weather day, or a good add-on to a visit to the Castle's café and visitor centre.",
    links: [
      { label: "Directions from the cottage", url: "https://maps.app.goo.gl/PrNyb8HRxaPnuJYo6?g_st=ic" }
    ]
  },

  /* ---- Circular walks starting & ending at Worth Matravers, via dorsetwalks.co.uk ---- */
  {
    name: "Worth Matravers to Seacombe & Winspit Walk",
    length: "~2.9 mi · 1 hr 45 · ~135m ascent · Easy",
    lengthMi: 2.9,
    coords: [50.5956, -2.0396],
    description: "An easy stroll across farmland and down a sheltered valley to the abandoned stone quarry at Seacombe, then along the clifftop to another old quarry at Winspit before returning to the village on a surfaced track. A good introduction to the area for first-time visitors.",
    links: [
      { label: "Route details (Dorset Walks)", url: "https://www.dorsetwalks.co.uk/worth-matravers-seacombe-winspit-walk/" }
    ]
  },
  {
    name: "Worth Matravers to Winspit & St Aldhelm's Head Walk",
    length: "~4.4 mi · 2 hr 30 · ~170m ascent · Easy",
    lengthMi: 4.4,
    coords: [50.5956, -2.0396],
    description: "Follows a track down to the old stone quarry at Winspit, then joins the South West Coast Path along exposed clifftops to St Aldhelm's Head, home to a small chapel, the Coastguard Lookout Station and the Purbeck Radar Memorial.",
    links: [
      { label: "Route details (Dorset Walks)", url: "https://www.dorsetwalks.co.uk/worth-matravers-winspit-st-aldhelms-head-walk/" }
    ]
  },
  {
    name: "Worth Matravers to Seacombe & St Aldhelm's Head Walk",
    length: "~5.2 mi · 2 hr 45 · ~210m ascent · Easy",
    lengthMi: 5.2,
    coords: [50.5956, -2.0396],
    description: "A longer coastal circuit combining the Seacombe quarry with St Aldhelm's Head, following the cliff path along this stretch of the Purbeck coast before heading back inland to the village.",
    links: [
      { label: "Route details (Dorset Walks)", url: "https://www.dorsetwalks.co.uk/worth-matravers-walks/" }
    ]
  },
  {
    name: "Worth Matravers to Seacombe & Chapman's Pool Walk",
    length: "~5.3 mi · 2 hr 55 · ~276m ascent · Medium",
    lengthMi: 5.3,
    coords: [50.5956, -2.0396],
    description: "Links the old Seacombe quarry with the secluded shingle cove at Chapman's Pool — a longer, hillier circuit with some steeper sections along the cliffs.",
    links: [
      { label: "Route details (Dorset Walks)", url: "https://www.dorsetwalks.co.uk/worth-matravers-walks/" }
    ]
  },
  {
    name: "Worth Matravers to St Aldhelm's Head & Chapman's Pool Walk",
    length: "~2.9 mi · 1 hr 30 · ~120m ascent · Medium",
    lengthMi: 2.9,
    coords: [50.5928, -2.0524],
    description: "Starts from the Renscombe car park just past the village and heads to St Aldhelm's Head — passing the chapel, Coastguard Lookout Station and Radar Memorial — before crossing the steep valley at Emmetts Hill to the viewpoint above Chapman's Pool.",
    links: [
      { label: "Route details (Dorset Walks)", url: "https://www.dorsetwalks.co.uk/worth-matravers-chapmans-pool/" }
    ]
  },
  {
    name: "Worth Matravers to Chapman's Pool & Kingston Walk",
    length: "~6.2 mi · 2 hr 45 · ~234m ascent · Easy",
    lengthMi: 6.2,
    coords: [50.5928, -2.0524],
    description: "The longest of the circuits, also starting from the Renscombe car park — reaching Chapman's Pool before heading inland to the village of Kingston, with its own pub, for the return leg.",
    links: [
      { label: "Route details (Dorset Walks)", url: "https://www.dorsetwalks.co.uk/worth-matravers-walks/" }
    ]
  },
  {
    name: "Worth Matravers to Seacombe & Dancing Ledge Walk",
    length: "~4.5 mi · 2 hr 20 · ~254m ascent · Moderate",
    lengthMi: 4.5,
    coords: [50.5956, -2.0396],
    description: "Heads east from the village via the Seacombe quarry to Dancing Ledge, the flat quarried shelf that's a popular wild-swimming spot, before looping back.",
    links: [
      { label: "Route details (Dorset Walks)", url: "https://www.dorsetwalks.co.uk/worth-matravers-walks/" }
    ]
  },
  {
    name: "Worth Matravers to Winspit & Dancing Ledge Walk",
    length: "~5.5 mi · 2 hr 55 · ~301m ascent · Moderate",
    lengthMi: 5.5,
    coords: [50.5956, -2.0396],
    description: "The longer of the two Dancing Ledge routes, taking in Winspit's quarry caves on the way as well — a good full-morning circuit combining several of the area's best-known coastal features.",
    links: [
      { label: "Route details (Dorset Walks)", url: "https://www.dorsetwalks.co.uk/worth-matravers-walks/" }
    ]
  },

  /* ---- Circular walks starting & ending at Worth Matravers, from other sources ---- */
  {
    name: "Worth Matravers, Winspit Quarry & St Aldhelm's Head Circular",
    length: "~4.3 mi · GPX download available",
    lengthMi: 4.3,
    coords: [50.5956, -2.0396],
    description: "Heads south along Winspit Bottom to the coastal Winspit Quarries, then follows the coast path west to St Aldhelm's Chapel, passing Emmetts Hill (Royal Marines memorial) with an optional detour to Chapman's Pool, before returning via Renscombe Farm.",
    links: [
      { label: "Route details (GPS Routes)", url: "https://www.gps-routes.co.uk/routes/home.nsf/RoutesLinksWalks/worth-matravers-and-st-aldhelms-head-circular-walk-walking-route" }
    ]
  },
  {
    name: "Worth Matravers Circular Walk",
    length: "~6.2 mi · 4 hr (up to 6 with stops) · Hard — two steep descents/ascents",
    lengthMi: 6.2,
    coords: [50.5956, -2.0396],
    description: "Passes the Keates Quarry dinosaur footprints before dropping to the South West Coast Path, taking in Winspit quarry, the radar memorial at St Aldhelm's Head, and Chapman's Pool — good for swimming and fossil-hunting if you've time to linger.",
    links: [
      { label: "Route details (Walking Club)", url: "https://www.walkingclub.org.uk/walk/worth-matravers-circular/" }
    ]
  },
  {
    name: "Smugglers Ways",
    length: "~3 mi · Easy",
    lengthMi: 3,
    coords: [50.5956, -2.0396],
    description: "An official Dorset Council trail past Winspit Quarry and along the coast path to Seacombe, following the route once used by smugglers to store contraband in the cliffside caves and tunnels. Starts from the car park nearest the pub (donation requested).",
    links: [
      { label: "Route details (Dorset Council)", url: "https://www.dorsetcouncil.gov.uk/w/smugglers-ways" },
      { label: "Smugglers Ways leaflet (PDF)", url: "https://www.dorsetcouncil.gov.uk/documents/35024/283293/Smugglers-Way-leaflet.pdf/31216a0c-d7b4-c074-2176-d9f9f0c3d3a2?version=1.0&t=1619391187342" }
    ]
  },
  {
    name: "Seacombe Cliff, Winspit Quarry & St Aldhelm's Chapel Circular",
    length: "~5.9 mi · 3–3.5 hr · ~345m ascent · Moderate",
    lengthMi: 5.9,
    coords: [50.5956, -2.0396],
    description: "From the village down to Seacombe Cliff, on to Winspit Quarry, then along the coast path past St Aldhelm's Chapel and Chapman's Pool on the way back.",
    links: [
      { label: "Route details (AllTrails)", url: "https://www.alltrails.com/trail/england/dorset/seacombe-cliff-winspit-quarry-and-st-aldhelm-s-chapel-circular" }
    ]
  },

  /* ---- Circular walks starting at Kingston and Studland ---- */
  {
    name: "Kingston to Swyre Head & Heaven's Gate Walk",
    length: "~2 mi · 1 hr · ~63m ascent · Easy",
    lengthMi: 2,
    coords: [50.6130469, -2.0814237],
    description: "A short, high-reward loop from Kingston up onto the ridge past Heaven's Gate — reckoned one of the best views in Dorset — and on to the trig point at Swyre Head, looking out over Kimmeridge Bay and the whole Jurassic Coast.",
    links: [
      { label: "Route details (Dorset Walks)", url: "https://www.dorsetwalks.co.uk/kingston-walks/" }
    ]
  },
  {
    name: "Studland to Old Harry Rocks Walk",
    length: "~4 mi · 2 hr 10 · ~294m ascent · Easy",
    lengthMi: 4,
    coords: [50.6422222, -1.9482568],
    description: "From the village down to the dramatic chalk stacks of Old Harry Rocks, then along the coast path towards Ballard Point and the Purbeck Way, climbing to the Obelisk before looping back through fields past Studland's Norman church.",
    links: [
      { label: "Route details (Dorset Walks)", url: "https://www.dorsetwalks.co.uk/studland-old-harry-rocks-walk/" }
    ]
  },
  {
    name: "Studland to Agglestone Rock Walk",
    length: "~3.2 mi · 1 hr 20 · ~72m ascent · Easy",
    lengthMi: 3.2,
    coords: [50.6422222, -1.9482568],
    description: "Heads inland across Studland's heathland to the Agglestone — a striking 400-tonne sandstone boulder left standing alone by centuries of erosion — with views back over Poole Harbour and the Purbeck Hills.",
    links: [
      { label: "Route details (Dorset Walks)", url: "https://www.dorsetwalks.co.uk/studland-walks/" }
    ]
  }
];
