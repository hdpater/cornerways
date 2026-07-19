/* ============================================================
   CORNERWAYS — Places to Eat data
   ------------------------------------------------------------
   To add a place, copy one of the objects below. `coords` is
   [lat, lon] — geocoded from each place's published address via
   OpenStreetMap, used by the "distance from Cornerways" filter
   and the map. A few (postcode-only addresses) are accurate to
   roughly the nearest building rather than the exact door. To
   find coordinates for a new entry: search the place on
   openstreetmap.org, right-click the exact spot → "Show address"
   gives the lat/lon directly. `links` is optional — add a
   website, menu, or Facebook page if one exists.
   ============================================================ */

const EATERIES = [
  {
    name: "The Square and Compass",
    coords: [50.5956, -2.0396],
    description: "Worth Matravers' famously unspoilt village pub — pasties, local cider, and a small on-site museum of fossils. A couple of minutes' walk from the cottage.",
    links: [
      { label: "Website", url: "https://www.squareandcompasspub.co.uk/" }
    ]
  },
  {
    name: "Coastal Crust Pizza",
    coords: [50.6140640, -1.9743057],
    description: "Neapolitan-style wood-fired pizza just outside Swanage town centre — thin, light bases cooked hot in a Gozney oven, plus vegan cheese, gelato, and cocktails. Popular, so book ahead. Eat in or takeaway.",
    links: [
      { label: "Website", url: "https://www.coastalcrust.co.uk/" }
    ]
  },
  {
    name: "The Scott Arms",
    coords: [50.6162773, -2.0614385],
    description: "A proper stone-built pub in Kingston with arguably the best view in Dorset — a huge garden looking straight down over Corfe Castle. Locally sourced, seasonal specials alongside pub favourites, plus a summer outdoor Burger Shak.",
    links: [
      { label: "Website", url: "https://thescottarms.com/" }
    ]
  },
  {
    name: "The Italian Kitchen & Italian Bakery",
    coords: [50.6874748, -2.1107050],
    description: "Two related spots on and near Wareham Quay: The Italian Kitchen for a proper sit-down Italian/British menu, and The Italian Bakery just up the road for handmade sourdough, pastries and coffee to take away.",
    links: [
      { label: "Italian Kitchen website", url: "https://www.theitaliankitchendorset.com/" },
      { label: "Italian Bakery website", url: "https://theitalianbakery.co.uk/" }
    ]
  },
  {
    name: "Isle of Purbeck Golf Club",
    coords: [50.6367013, -1.9826614],
    description: "Sunday lunch with a panoramic dining-room view over Studland Bay and Poole Harbour — a table d'hôte menu served daily, 12–3pm. Booking recommended.",
    links: [
      { label: "Restaurant & booking", url: "https://www.purbeckgolf.co.uk/restaurant" }
    ]
  },
  {
    name: "National Trust Tea-room, Corfe Castle",
    coords: [50.6383973, -2.0576054],
    description: "A cosy 18th-century cottage in the village serving hot food, cakes and famously indulgent cream teas — sit in the rear garden for uninterrupted views of the castle ruins. Dog-friendly, with ice cream for them too.",
    links: [
      { label: "Website", url: "https://www.nationaltrust.org.uk/visit/dorset/corfe-castle/eating-and-shopping-at-corfe-castle" }
    ]
  },
  {
    name: "The Fish Plaice",
    coords: [50.6082768, -1.9562533],
    description: "Swanage's well-known \"blue chippy\" near the seafront — cod and haddock cut fresh on site, chips from whole potatoes, and good home-made fishcakes. Monthly gluten-free frying days.",
    links: [
      { label: "Website", url: "http://www.fishplaice.co.uk/" }
    ]
  },
  {
    name: "Chococo",
    coords: [50.608784, -1.958074],
    description: "Award-winning chocolate house and café on Commercial Road — Swanage is where it all started back in 2002. Hot chocolate, gelato, cakes and toasties alongside the chocolate shop.",
    links: [
      { label: "Website", url: "https://www.chococo.co.uk/our-chocolate-houses/swanage" }
    ]
  },
  {
    name: "Fortes Gelateria",
    coords: [50.6093025, -1.9569207],
    description: "Family-run Italian gelato on Swanage seafront since 1926, now four generations in — over twenty handcrafted flavours made on site.",
    links: [
      { label: "Website", url: "https://fortesgelato.co.uk/" }
    ]
  },
  {
    name: "Java Independent Coffee House",
    coords: [50.6092394, -1.9581730],
    description: "A relaxed, dog-friendly café on Commercial Road with genuinely good coffee, hearty breakfasts and cake — strong on vegetarian and vegan options.",
    links: [
      { label: "Facebook page", url: "https://www.facebook.com/javaindependentcoffeehouse/" }
    ]
  },
  {
    name: "The 1859 Pier Cafe & Bistro",
    coords: [50.6076188, -1.9516524],
    description: "Right on the end of Swanage Pier, with views straight out over the bay — everything from cream teas and barista coffee through to seafood, steaks and gourmet burgers, fully licensed. Open daily.",
    links: [
      { label: "Website", url: "https://pier1859bistro.co.uk/" }
    ]
  }
];
