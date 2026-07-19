/* ============================================================
   CORNERWAYS — Crag data
   ------------------------------------------------------------
   To add a new crag, copy one of the objects below and fill it
   in. `coords` is [lat, lon] — landmark-level estimates, used
   by the "distance from Cornerways" filter (and any future
   map). `links` is a flexible list — add, remove, or rename any
   entry (e.g. "Directions from the cottage", "Route guide",
   "Crag notes", "Tide times", whatever's useful). Nothing else
   in the site needs to change; the Climbing tab renders
   whatever is in this array.
   ============================================================ */

const CRAGS = [
  {
    name: "Dancing Ledge",
    style: "Sport & trad",
    note: "Well-bolted quarry + committing sea-level caves",
    coords: [50.5940, -1.9976],
    description: "One of the most important sport-climbing areas at Swanage, with a good range of grades and a spectacular setting — plus a sea pool for cooling off afterwards.",
    links: [
      { label: "Route guide (theCrag)", url: "https://www.thecrag.com/en/climbing/united-kingdom/swanage/dancing-ledge" },
      { label: "Crag notes (UKC)", url: "https://www.ukclimbing.com/logbook/crags/dancing_ledge-256/" }
      // No confirmed "directions from the cottage" link yet — add one here when you have it.
    ]
  },
  {
    name: "Winspit",
    style: "Trad & sport",
    note: "Old quarry, adjacent caves",
    coords: [50.5883, -2.0396],
    description: "A short walk from Worth Matravers itself, Winspit's disused quarry faces are considered excellent for climbing, and — unlike some Swanage crags — aren't affected by the seasonal bird-nesting restrictions.",
    links: [
      { label: "Route guide (theCrag)", url: "https://www.thecrag.com/en/climbing/united-kingdom/swanage/winspit" },
      { label: "Crag notes (UKC)", url: "https://www.ukclimbing.com/logbook/crags/winspit-258/" },
      { label: "Directions from the cottage", url: "https://maps.app.goo.gl/VhEBapubWCPcyJpX6?g_st=ic" }
    ]
  },
  {
    name: "Seacombe & St Aldhelm's Head",
    style: "Trad",
    note: "Quieter, more adventurous",
    coords: [50.5793, -2.0596],
    description: "Further along the coast path, with big quarried galleries and fewer crowds — a good next step once Dancing Ledge and Winspit feel familiar.",
    links: [
      { label: "Crag notes — Seacombe (UKC)", url: "https://www.ukclimbing.com/logbook/crags/seacombe-1240/" },
      { label: "Crag notes — St Aldhelm's Head (UKC)", url: "https://www.ukclimbing.com/logbook/crag.php?id=2866" }
      // No confirmed "directions from the cottage" link yet — add one here when you have it.
    ]
  },
  {
    name: "Hedbury Quarry",
    style: "Sport & trad",
    note: "Compact quarry + Big Cove / Smokey Hole trad",
    coords: [50.5920, -1.9600],
    description: "A smaller, quieter version of the main quarry at Dancing Ledge — steep, solid rock with good winter sun. Just around the corner, Hedbury Big Cove and Smokey Hole add some harder, more atmospheric trad in a dramatic setting.",
    links: [
      { label: "Route guide (theCrag)", url: "https://www.thecrag.com/en/climbing/united-kingdom/swanage/hedbury-quarry" },
      { label: "Crag notes (UKC)", url: "https://ukclimbing.com/logbook/crag.php?id=257" }
      // No confirmed "directions from the cottage" link yet — add one here when you have it.
    ]
  },
  {
    name: "Subluminal",
    style: "Trad",
    note: "Beginner-friendly ledges + the committing Black Zawn",
    coords: [50.5910, -1.9550],
    description: "The western section is a friendly, popular sea cliff with plenty of good lower-grade trad and pleasant cliff-top ledges to socialise on. Just east, and directly below Anvil Point lighthouse, the Black Zawn steps things up considerably for those with more experience.",
    links: [
      { label: "Route guide (theCrag)", url: "https://www.thecrag.com/en/climbing/united-kingdom/swanage/subluminal-cliff" },
      { label: "Crag notes (UKC)", url: "https://www.ukclimbing.com/logbook/crags/subluminal_and_lighthouse_cliff-245/" }
      // No confirmed "directions from the cottage" link yet — add one here when you have it.
    ]
  },
  {
    name: "Portland",
    style: "Sport & trad & DWS",
    note: "A bigger day out — not broken down by individual crag here",
    coords: [50.5370, -2.4310],
    description: "About 45 minutes' drive away, Portland is the other major south-coast climbing destination — famous for excellent bolted sport climbing (The Cuttings, Blacknor, and more), plus trad and deep water soloing. Worth a full day trip rather than a quick add-on.",
    links: [
      { label: "Portland overview (theCrag)", url: "https://www.thecrag.com/en/climbing/united-kingdom/portland" },
      { label: "Guidebook info (UKC)", url: "https://www.ukclimbing.com/logbook/books/portland-602" }
    ]
  }
];
