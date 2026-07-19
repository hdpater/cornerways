/* ============================================================
   CORNERWAYS — Places to Visit data
   ------------------------------------------------------------
   To add a place, copy one of the objects below. `coords` is
   [lat, lon] — geocoded from each place's published address via
   OpenStreetMap, used by the "distance from Cornerways" filter
   and the map. A few (postcode-only addresses) are accurate to
   roughly the nearest building rather than the exact door. To
   find coordinates for a new entry: search the place on
   openstreetmap.org, right-click the exact spot → "Show address"
   gives the lat/lon directly. `links` is optional — add an
   official site, National Trust page, etc.
   ============================================================ */

const PLACES = [
  {
    name: "Corfe Castle",
    coords: [50.6383973, -2.0576054],
    description: "The romantic ruined castle and its village, about 4 miles away, with far-reaching views over the Isle of Purbeck.",
    links: [
      { label: "National Trust", url: "https://www.nationaltrust.org.uk/visit/dorset/corfe-castle" }
    ]
  },
  {
    name: "Swanage",
    coords: [50.6092394, -1.9581730],
    description: "Under 6 miles east — a Victorian pier, sandy beach, and plenty of shops for a change of pace.",
    links: [
      { label: "Swanage visitor guide", url: "https://www.swanage.co.uk/" }
    ]
  },
  {
    name: "Durlston Country Park & Anvil Point",
    coords: [50.5967414, -1.9558250],
    description: "A cliff-top country park with a proper lighthouse and great coastal views — good for a shorter outing.",
    links: [
      { label: "Official site", url: "https://www.durlston.co.uk/" }
    ]
  },
  {
    name: "The Etches Collection",
    coords: [50.6184705, -2.1194002],
    description: "A modern fossil museum in Kimmeridge built around one man's lifetime collection of Jurassic marine fossils — sea monsters, ichthyosaurs and the famous pliosaur skull. A great rainy-day option.",
    links: [
      { label: "Official site", url: "https://www.theetchescollection.org/" }
    ]
  },
  {
    name: "Upton House & Country Park",
    coords: [50.7388294, -2.0140368],
    description: "A Georgian mansion in 160 acres of gardens, woodland and shoreline on Poole Harbour — free admission, with a tea room and walking trails. A bit further afield (over towards Poole), good for a change of scene.",
    links: [
      { label: "Official site", url: "https://uptoncountrypark.com/" },
      { label: "Directions from the cottage", url: "https://maps.app.goo.gl/qbkuEXpGs3PgCH3w5?g_st=ic" }
    ]
  }
];
