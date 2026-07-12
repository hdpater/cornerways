/* ============================================================
   CORNERWAYS — Crag data
   ------------------------------------------------------------
   To add a new crag, copy one of the objects below and fill it
   in. `links` is a flexible list — add, remove, or rename any
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
    description: "Further along the coast path, with big quarried galleries and fewer crowds — a good next step once Dancing Ledge and Winspit feel familiar.",
    links: [
      { label: "Crag notes — Seacombe (UKC)", url: "https://www.ukclimbing.com/logbook/crags/seacombe-1240/" },
      { label: "Crag notes — St Aldhelm's Head (UKC)", url: "https://www.ukclimbing.com/logbook/crag.php?id=2866" }
      // No confirmed "directions from the cottage" link yet — add one here when you have it.
    ]
  }
];
