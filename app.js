var map = L.map("map").setView([24.0, 78.0], 5);

// Add OpenStreetMap tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

// Your GeoJSON data
var geojsonData = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [72.57, 23.02],
      },
      properties: {
        type: "Stepwell",
        region: "Gujarat",
        principle: "Harvest rainwater and provide community water access",
        reasons: "Scarcity of water and arid climate",
        images:
          "https://c8.alamy.com/comp/2R6KMN8/adalaj-stepwell-rudabai-stepwell-adalaj-gujarat-india-asia-2R6KMN8.jpg",
        advantages:
          "Water conservation, cooling effect, architectural heritage",
        revival: "Cleaning, structural reinforcement, awareness campaigns",
        government_initiatives:
          "INTACH and Gujarat Tourism preservation efforts",
        contributor: "Roshan Shetty",
        other_details:
          "Adalaj ni Vav is a prominent stepwell in Gujarat, built in 1499",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [77.52, 17.92],
      },
      properties: {
        type: "Karez System",
        region: "Bidar",
        principle: "Subterranean water channel system using gravity flow",
        reasons:
          "Zing is based on the principle of glacial meltwater collection and storage.",
        images:
          "https://media.assettype.com/thenewsminute%2Fimport%2Fsites%2Fall%2Fvar%2Fwww%2Fimages%2FBidar_Karez_4.JPG",
        advantages: "Efficient water transport, reduces evaporation",
        revival: "Desilting, community-led maintenance, historical mapping",
        government_initiatives:
          "Supported by Karnataka Tourism and Archaeological Survey of India",
        contributor: "Anshul Salian",
        other_details: "Believed to be of Persian origin, over 700 years old",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [80.2707, 13.0827],
      },
      properties: {
        type: "Eri System (Traditional Tanks)",
        region: "Tamil Nadu",
        principle:
          "Capture monsoon runoff for irrigation and groundwater recharge",
        reasons: "Dependence on seasonal rainfall and need for water storage",
        images:
          "https://www.researchgate.net/publication/337534514/figure/fig42/AS:830474813452337@1575012033528/Eri-a-system-of-rain-water-harves-ng-fed-by-channels-that-divert-river-water.png",
        advantages: "Recharges groundwater, reduces floods, aids biodiversity",
        revival: "Desilting, restoration of bunds, local community engagement",
        government_initiatives: "TNWRD and NGOs like DHAN Foundation",
        contributor: "Yashawanth.B.R.",
        other_details: "Thousands of Eris exist, dating back to Chola dynasty",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [78.10304, 24.18848],
      },
      properties: {
        type: "Johads",
        region: "Haryana",
        principle:
          "Allow water to slowly seep into the ground, recharging the aquifers.",
        reasons: "Seasonal rivers and streams often dry up quickly.",
        images:
          "https://www.notechmagazine.com/wp-content/uploads/2015/05/water-johad-india.jpg",
        advantages:
          "Ensures water availability for crops and livestock, even in dry seasons.",
        revival:
          "Mobilizing local residents to clean, maintain, and monitor the Johad.",
        government_initiatives:
          "MGNREGA (Mahatma Gandhi National Rural Employment Guarantee Act)",
        contributor: "Vaishnavi T",
        other_details: "These were started in 1984",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [76.0044, 13.1986],
      },
      properties: {
        type: "Kalyani",
        region: "Near Halebidu, Hassan District, Karnataka",
        principle:
          "A kalyani is a rainwater-harvesting temple tank for water conservation and rituals.",
        reasons:
          "Helps in managing seasonal rainfall, groundwater depletion, and ecological balance.",
        images: "https://pin.it/6Q46YRj8x",
        advantages:
          "Efficient rainwater harvesting, groundwater recharge, and ecological sustainability ensure long-term water security.",
        revival:
          "Restore kalyanis, promote rainwater harvesting, desilt tanks, and integrate modern filtration.",
        government_initiatives: "Jal Shakti Abhiyan - Catch the Rain",
        contributor: "Kanchana P",
        other_details:
          "Moodubidire’s kalyanis are linked to Jain heritage, aiding in rituals and water conservation, with key sites like Saavira Kambada Basadi",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [77.5571, 34.1546],
      },
      properties: {
        type: "Zing",
        region: "Cold place",
        principle:
          "Zing is based on the principle of glacial meltwater collection and storage.",
        reasons: "Arid climate, glacier dependency, seasonal farming.",
        images: "https://images.app.goo.gl/8HmHrNDFZzm4ZYYE6",
        advantages:
          "Supports sustainable agriculture in high-altitude regions.",
        revival:
          "Desilting and cleaning of zing reservoirs before the sowing season.",
        government_initiatives: "Mission Amrit Sarovar",
        contributor: "DEEKSHITA RAJESH NAIK",
        other_details:
          "Acts as a model of ancient ecological knowledge adapted to climate extremes",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [74.78, 20.96],
      },
      properties: {
        type: "Phad System",
        region: "Maharashtra",
        principle: "Diversion-based irrigation system using weirs and canals",
        reasons: "Western Maharashtra's riverine areas with seasonal flow",
        images: "images/img8.jpg",
        advantages: "Equitable water distribution, enhances crop yield",
        revival: "Repairs of canals and weirs, water user associations",
        government_initiatives: "Maharashtra Water Resources Department",
        contributor: "Shazma",
        other_details: "Over 300 years old; UNESCO-listed traditional system",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [75.0432, 12.975],
      },
      properties: {
        type: "Surangam",
        region: "Kasargod, Kerala",
        principle:
          "Horizontal tunnel dug into laterite hills to tap groundwater via gravity flow",
        reasons:
          "Hilly terrain with laterite rock, less rainfall, need for year-round supply",
        images:
          "https://cdn.downtoearth.org.in/library/large/2021-08-20/0.78250500_1629469470_suranga.jpg",
        advantages: "Minimal evaporation, year-round water availability",
        revival: "Cleaning of tunnels, lining walls, awareness workshops",
        government_initiatives:
          "Supported by Kerala Forest and Water Resources Department",
        contributor: "Hegde Aansh Dilip",
        other_details:
          "Used by farmers for centuries in Kasargod and north Kerala",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [94.48, 25.6],
      },
      properties: {
        type: "Zabo System",
        region: "Nagaland",
        principle:
          "Rainwater harvesting system integrating forest, agriculture, and livestock",
        reasons:
          "Hilly terrain with poor water availability and need for sustainable agriculture",
        images:
          "https://www.researchgate.net/profile/Moses-Longchar-3/publication/355741444/figure/fig4/AS:1088038363022336@1637656035320/Fig-3-Schematic-of-the-Zabo-System-and-the-Components.jpg",
        advantages:
          "Supports biodiversity, sustainable farming, and water conservation",
        revival: "Improvement of watershed management, building new ponds",
        government_initiatives: "Integrated Watershed Management Programs",
        contributor: "Pranita S",
        other_details:
          "Used by Naga tribes for centuries, seen as an agricultural and cultural legacy",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [77.7, 12.97],
      },
      properties: {
        type: "Temple Tanks",
        region: "South India",
        principle:
          "Rainwater harvesting and groundwater recharge linked with temple architecture",
        reasons: "Sacred water management and urban water needs",
        images:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Temple_tank_Thanjavur_Brihadeeswara_262.jpg/1200px-Temple_tank_Thanjavur_Brihadeeswara_262.jpg",
        advantages: "Provides water for rituals, irrigation, and urban supply",
        revival: "Desilting, wall restoration, pollution control",
        government_initiatives:
          "Smart Cities Mission, CSR projects with local NGOs",
        contributor: "Roshan Shetty",
        other_details:
          "Featured in many historic temples like in Madurai, Kanchipuram, and Thanjavur",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [70.88, 26.91] },
      properties: {
        type: "Paar System",
        other_details: "Subsurface rainwater infiltration wells",
        region: "Jaisalmer, Rajasthan",
        principle:
          "Rainwater from catchment (agar) percolates into sandy soil and is drawn via deep dug wells",
        reasons:
          "Common desert harvesting in western Rajasthan; dozens of kuis (5–12m deep) were dug per paar in areas like Jaisalmer:contentReference",
        advantages:
          "Recharges groundwater and provides 'patali pani' for irrigation and domestic use",
        revival:
          "Local NGOs and communities have begun restoring and mapping paar structures for groundwater recharge",
        government_initiatives:
          "Part of Rajasthan water conservation efforts; studied by CSE and desert research groups",
        images:
          "https://i0.wp.com/vikalpsangam.org/wp-content/uploads/migrate/Environment_And_Ecology/trad_water_harv_kui2.png?w=580&ssl=1",
        contributor: "Vinith Shetty",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [73.9, 24.6] },
      properties: {
        type: "Saza Kuva",
        other_details: "Communal step-well (multi-owner well)",
        region: "Mewar (Aravalli Hills), Rajasthan",
        principle:
          "A circular open well with a high earthen base; a buffalo-pulley (rehat) lifts water, and excavated soil is used to build a raised platform:contentReference",
        reasons:
          "Built by groups of farmers in Mewar; each adjacent landowner shares the well (saza = partner) in eastern Rajasthan:contentReference",
        advantages:
          "Community-managed irrigation source; durable masonry construction",
        revival:
          "Still used locally; Rajasthan irrigation dept. promotes maintenance of saza kuvas",
        government_initiatives:
          "Supported by state water agencies and local trusts to desilt and repair",
        images: "images/saza.jpg",
        contributor: "Vinith Shetty",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [73.94, 15.28] },
      properties: {
        type: "Khazan",
        other_details: "Agro-aqua integrated polder system",
        region: "Goa (estuarine basins)",
        principle:
          "Mangrove-backed embankments and sluice gates regulate tidal flow; freshwater flow and fish ponds are managed in interconnected canals and fields:contentReference",
        reasons:
          "Traditional Goan community-managed system (pre-Portuguese) reclaiming marshes for rice and fish; balances salt and fresh water for saline-tolerant crops:contentReference",
        advantages:
          "Prevents saltwater intrusion, enables aquaculture and paddy cultivation, buffers climate impacts:contentReference",
        revival:
          "Recent focus by ICLEI, Goa biodiversity board, and local communities on conserving khazans and integrating them into urban planning:contentReference",
        government_initiatives:
          "ICLEI-South Asia hosted a 2024 workshop on sustainable khazan management",
        images: "images/khazan.jpg",
        contributor: "Vinith Shetty",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [79.75, 21.17] },
      properties: {
        type: "Kohli Tanks",
        other_details: "Community-built tank irrigation network",
        region: "Bhandara district, Maharashtra",
        principle:
          "Large number of earthen tanks (reservoirs) capture rainfall runoff; organized by the local Kohli community to irrigate sugarcane and rice:contentReference[oaicite:9]{index=9}",
        reasons:
          "Built ~17th-18th century by the Kohli caste (43,381 tanks in Bhandara) for extensive irrigation:contentReference[oaicite:10]{index=10}",
        advantages:
          "Provides reliable irrigation water for crops; retains water through dry season",
        revival:
          "Continuously maintained by farmers; Maharashtra water resources department supports tank restoration",
        government_initiatives:
          "Studied in state irrigation schemes and included in watershed development projects",
        images: "images/img1.jpg",
        contributor: "Vinith Shetty",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [78.82, 14.47] },
      properties: {
        type: "Cheruvu (Tank)",
        other_details: "Monsoon runoff reservoir",
        region: "Kadapa district, Andhra Pradesh",
        principle:
          "Earthen dam on seasonal drainage forms a tank (cheruvu) to store rainwater for irrigation and drinking:contentReference",
        reasons:
          "Traditional irrigation water body in Andhra; cheruvus in Chittoor and Kadapa served local agriculture:contentReference",
        advantages:
          "Captures monsoon floods, recharges groundwater and provides dry-season water supply",
        revival:
          "State government invests in de-silting and strengthening old tanks under tank rejuvenation programs",
        government_initiatives:
          "AP watershed programs (e.g., Jalayagnam) include cheruvu restoration",
        images: "images/img2.jpg",
        contributor: "Vinith Shetty",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [76.4, 14.23] },
      properties: {
        type: "Kere Tanks",
        other_details: "Tank-based irrigation system",
        region: "Chitradurga, Karnataka",
        principle:
          "Chain of tanks fed by channels from anicuts (check dams) on streams or by streams directly; each tank irrigates adjacent fields",
        reasons:
          "Primary traditional irrigation in central Karnataka plateau; tanks (kere) were constructed centuries ago",
        advantages:
          "Seasonal water storage enabling multiple crop cycles; significant groundwater recharge",
        revival:
          "Karnataka government is desilting and restoring old tanks (under MGNREGS tank rejuvenation)",
        government_initiatives:
          "State tank conservation missions and local committees manage the tanks",
        images: "images/img3.jpg",
        contributor: "Vinith Shetty",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [81.9, 19.1] },
      properties: {
        type: "Kata/Bandha",
        other_details: "Earthen embankment dam (Tribal irrigation)",
        region: "Bastar (former Gond region), Chhattisgarh/Odisha",
        principle:
          "Strong curved earthen bund built across a drainage line, holding seasonal rainwater (sheet) for local irrigatione",
        reasons:
          "Ancient irrigation in the Gond tribal regions (Orissa/MP); mundas/bandhas served community fields",
        advantages:
          "Stores upland rainwater to improve soil moisture and support dryland farming",
        revival:
          "NGO/government watershed projects now aim to restore katas for local water security",
        government_initiatives:
          "MGNREGA and tribal development schemes include building/repairing bandhas",
        images: "images/img4.jpg",
        contributor: "Vinith Shetty",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [75.0, 12.5] },
      properties: {
        type: "Surangam (Tunnel Well)",
        other_details: "Horizontal tunnel well",
        region: "Kasaragod, Kerala",
        principle:
          "Tunnel (dug into laterite hillside) allows groundwater to seep out into the tunnel and be collected; a gravity-fed Qanat-like system",
        reasons:
          "Used for centuries by farming communities in northern Malabar; provides reliable supply in dry season",
        advantages:
          "Supplies water without pumps; raises groundwater levels; effective in arid laterite regions",
        revival:
          "Kerala’s Jal Shakti Abhiyan (2024) plans to renovate surangas to boost groundwater",
        government_initiatives:
          "Kasaragod district survey of surangas; project under MGNREGS and 'Nari Shakti se Jal Shakti' campaign",
        images: "images/img5.jpg",
        contributor: "Vinith Shetty",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.55, 17.9] },
      properties: {
        type: "Karez (Qanat)",
        other_details: "Subterranean aqueduct",
        region: "Bidar, Karnataka",
        principle:
          "Underground tunnel taps spring/groundwater and conveys it by gravity to the surface without pumps",
        reasons:
          "Built in the 15th century (Bahmani era); Bidar has three documented karez systems (the first in India)",
        advantages:
          "Delivers pure groundwater with minimal evaporation; historically supplied water to arid Bidar city and fields",
        revival:
          "Rediscovery in the 2010s led to efforts to clear and restore karez tunnels",
        government_initiatives:
          "2013 survey and clearing projects by archaeologists and district authorities",
        images: "images/img6.jpg",
        contributor: "Vinith Shetty",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [73.9, 19.9] },
      properties: {
        type: "Phad Irrigation",
        other_details: "Diversion-based community irrigation",
        region: "Sinnar (Nashik), Maharashtra",
        principle:
          "Check-dam (bandhara) built across a river raises water, which is diverted through a main canal (phad) and a network of branch canals (kalvas) to irrigate a group of fields",
        reasons:
          "Traditional system in NW Maharashtra (300–400 years old); managed by a group (phad) of farmers sharing water ",
        advantages:
          "Equitable distribution of scarce water; intensifies agriculture in the dry season",
        revival:
          "Revived by local leader Sunil Pote, enabling many farmers to irrigate and increase incomes",
        government_initiatives:
          "Local NGOs and farmer cooperatives now organize and maintain phad channels",
        images: "images/img7.jpg",
        contributor: "Vinith Shetty",
      },
    },
  ],
};

// Add GeoJSON layer
L.geoJSON(geojsonData, {
  onEachFeature: function (feature, layer) {
    const props = feature.properties;
    const popupContent = `
          <b>${props.type}</b><br/>
          <img src="${props.images}" width="200"><br/>
          <b>Region:</b> ${props.region}<br/>
          <b>Principle:</b> ${props.principle}<br/>
          <b>Reasons:</b> ${props.reasons}<br/>
          <b>Advantages:</b> ${props.advantages}<br/>
          <b>Revival:</b> ${props.revival}<br/>
          <b>Initiatives:</b> ${props.government_initiatives}<br/>
          <b>Contributor:</b> ${props.contributor}<br/>
          <b>Details:</b> ${props.other_details}
        `;
    layer.bindPopup(popupContent);
  },
}).addTo(map);
