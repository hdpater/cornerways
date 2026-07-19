/* ============================================================
   CORNERWAYS — Walks & runs data
   ------------------------------------------------------------
   To add a new route, copy one of the objects below. `length`
   is a free-text line for distance/time/difficulty — put
   whatever's most useful there. `links` is optional and can
   hold as many entries as you like.
   ============================================================ */

const WALKS = [
  {
    name: "Worth Matravers → Winspit → Dancing Ledge → Priest's Way",
    length: "~5–6 mi · 2.5–3 hr walking · ~250m ascent · Moderate",
    description: "Straight out of the village down to the eerie abandoned stone-quarry caves at Winspit, then along the coast path to the flat quarried shelf of Dancing Ledge — a favourite spot to swim in the old tidal pool. Loop back inland along the Priest's Way, the medieval path once walked by the parish priest on his way to Swanage.",
    links: [
      { label: "Route on AllTrails", url: "https://www.alltrails.com/trail/england/dorset/worth-matravers-and-priest-s-way-circular" }
    ]
  },
  {
    name: "Dancing Ledge — Winspit — St Aldhelm's Head loop",
    length: "~5.1 mi · ~2 hr 20 · ~250m ascent · Moderate",
    description: "A well-loved circular that strings together Dancing Ledge, Winspit and the dramatic headland at St Aldhelm's Head. A popular route for both hikers and trail runners, with birdlife along the cliffs for most of the year.",
    links: [
      { label: "Route details (AllTrails)", url: "https://www.alltrails.com/trail/england/dorset/worth-matravers-and-priest-s-way-circular" }
    ]
  },
  {
    name: "The Priest's Way to Swanage",
    length: "~4.75 km one way · Easy · Flat / gentle",
    description: "A quiet, largely traffic-free track between dry-stone walls, connecting Worth Matravers to Swanage. A good out-and-back run, or use it to make a longer coastal loop by returning along the cliffs.",
    links: []
  },
  {
    name: "Winspit & Seacombe loop from Langton Matravers",
    length: "~9.5 km · ~2 hr 40 · Moderate",
    description: "Takes in the old sea-cliff quarries at Seacombe and Winspit, both once central to the Purbeck stone trade and now atmospheric, half-wild places to explore — bring a torch if you want to poke into the quarry caves.",
    links: [
      { label: "GPS route on Komoot", url: "https://www.komoot.com/smarttour/516386" }
    ]
  },
  {
    name: "Durlston Woodland Trail",
    length: "~0.5 mi · Easy · Well-surfaced, gentle",
    description: "A short, sheltered, buggy-friendly waymarked trail through Durlston Country Park's historic Victorian pleasure grounds, past the Great Globe and Durlston Castle. A gentle option on a poor-weather day, or a good add-on to a visit to the Castle's café and visitor centre.",
    links: [
      { label: "Directions from the cottage", url: "https://maps.app.goo.gl/PrNyb8HRxaPnuJYo6?g_st=ic" }
    ]
  },

  /* ---- Circular walks starting & ending at Worth Matravers, via dorsetwalks.co.uk ---- */
  {
    name: "Worth Matravers to Seacombe & Winspit Walk",
    length: "~2.9 mi · 1 hr 45 · ~135m ascent · Easy",
    description: "An easy stroll across farmland and down a sheltered valley to the abandoned stone quarry at Seacombe, then along the clifftop to another old quarry at Winspit before returning to the village on a surfaced track. A good introduction to the area for first-time visitors.",
    links: [
      { label: "Route details (Dorset Walks)", url: "https://www.dorsetwalks.co.uk/worth-matravers-seacombe-winspit-walk/" }
    ]
  },
  {
    name: "Worth Matravers to Winspit & St Aldhelm's Head Walk",
    length: "~4.4 mi · 2 hr 30 · ~170m ascent · Easy",
    description: "Follows a track down to the old stone quarry at Winspit, then joins the South West Coast Path along exposed clifftops to St Aldhelm's Head, home to a small chapel, the Coastguard Lookout Station and the Purbeck Radar Memorial.",
    links: [
      { label: "Route details (Dorset Walks)", url: "https://www.dorsetwalks.co.uk/worth-matravers-winspit-st-aldhelms-head-walk/" }
    ]
  },
  {
    name: "Worth Matravers to Seacombe & St Aldhelm's Head Walk",
    length: "~5.2 mi · 2 hr 45 · ~210m ascent · Easy",
    description: "A longer coastal circuit combining the Seacombe quarry with St Aldhelm's Head, following the cliff path along this stretch of the Purbeck coast before heading back inland to the village.",
    links: [
      { label: "Route details (Dorset Walks)", url: "https://www.dorsetwalks.co.uk/worth-matravers-walks/" }
    ]
  },
  {
    name: "Worth Matravers to Seacombe & Chapman's Pool Walk",
    length: "~5.3 mi · 2 hr 55 · ~276m ascent · Medium",
    description: "Links the old Seacombe quarry with the secluded shingle cove at Chapman's Pool — a longer, hillier circuit with some steeper sections along the cliffs.",
    links: [
      { label: "Route details (Dorset Walks)", url: "https://www.dorsetwalks.co.uk/worth-matravers-walks/" }
    ]
  },
  {
    name: "Worth Matravers to St Aldhelm's Head & Chapman's Pool Walk",
    length: "~2.9 mi · 1 hr 30 · ~120m ascent · Medium",
    description: "Starts from the Renscombe car park just past the village and heads to St Aldhelm's Head — passing the chapel, Coastguard Lookout Station and Radar Memorial — before crossing the steep valley at Emmetts Hill to the viewpoint above Chapman's Pool.",
    links: [
      { label: "Route details (Dorset Walks)", url: "https://www.dorsetwalks.co.uk/worth-matravers-chapmans-pool/" }
    ]
  },
  {
    name: "Worth Matravers to Chapman's Pool & Kingston Walk",
    length: "~6.2 mi · 2 hr 45 · ~234m ascent · Easy",
    description: "The longest of the circuits, also starting from the Renscombe car park — reaching Chapman's Pool before heading inland to the village of Kingston, with its own pub, for the return leg.",
    links: [
      { label: "Route details (Dorset Walks)", url: "https://www.dorsetwalks.co.uk/worth-matravers-walks/" }
    ]
  },
  {
    name: "Worth Matravers to Seacombe & Dancing Ledge Walk",
    length: "~4.5 mi · 2 hr 20 · ~254m ascent · Moderate",
    description: "Heads east from the village via the Seacombe quarry to Dancing Ledge, the flat quarried shelf that's a popular wild-swimming spot, before looping back.",
    links: [
      { label: "Route details (Dorset Walks)", url: "https://www.dorsetwalks.co.uk/worth-matravers-walks/" }
    ]
  },
  {
    name: "Worth Matravers to Winspit & Dancing Ledge Walk",
    length: "~5.5 mi · 2 hr 55 · ~301m ascent · Moderate",
    description: "The longer of the two Dancing Ledge routes, taking in Winspit's quarry caves on the way as well — a good full-morning circuit combining several of the area's best-known coastal features.",
    links: [
      { label: "Route details (Dorset Walks)", url: "https://www.dorsetwalks.co.uk/worth-matravers-walks/" }
    ]
  }
];
