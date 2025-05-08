const storeList = [
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
      advantages: "Water conservation, cooling effect, architectural heritage",
      revival: "Cleaning, structural reinforcement, awareness campaigns",
      government_initiatives: "INTACH and Gujarat Tourism preservation efforts",
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
      advantages: "Supports sustainable agriculture in high-altitude regions.",
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
      images:
        "https://th.bing.com/th/id/R.633d68b14d916d8c16107a1dc58bedc2?rik=js%2bk%2bW4kP4uHLA&riu=http%3a%2f%2f1.bp.blogspot.com%2f_ecCmBzb__Ro%2fRoZeW_9ZXoI%2fAAAAAAAAABQ%2fswqsJnSAc80%2fs320%2fphad.jpg&ehk=cF3XmvVndYhY%2f3NRUDbPYBVS3f75p0zPxfrO7sT2VCM%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
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
];
