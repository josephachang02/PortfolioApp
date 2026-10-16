// All site copy lives here so text can be edited without touching layout code.
// Image keys are paths under src/assets/img without the .webp extension (e.g. 'gis/atlas1').

const files = import.meta.glob('../assets/img/**/*.webp', { eager: true, import: 'default' });
export const img = (key) => files[`../assets/img/${key}.webp`]; // resolves a key to a bundled URL

import resume from '../assets/GIS_Resume.pdf';

export const site = {
  name: 'Joe Chang',
  role: 'GIS Analyst',
  intro:
    'A GIS Analyst integrating software engineering with programming applications. I tell stories with maps and data to illustrate the intricacies of our world.',
  resume,
  links: {
    linkedin: 'https://www.linkedin.com/in/joechang022/',
    github: 'https://github.com/josephachang02',
    instagram: 'https://www.instagram.com/joea_chang/',
  },
  background: [
    'With a solid foundation built during 3 years as a GIS Analyst at Google, I took a bold step into software engineering. In August 2023, driven by a passion for coding and a desire to deepen my impact in GIS, I chose to embrace the challenges of this new journey — and found a vast range of languages and tools that keep fueling my curiosity.',
    'Since leaving my full-time role, I have worked part-time at the First Starbucks in Pike Place Market while pursuing GIS and software engineering. That path has sharpened my skills and opened doors that continue to drive me forward.',
  ],
  photos: ['css/graduation_family', 'css/graduation', 'css/pike_brochure', 'css/pike', 'css/pike2', 'css/personal'],
};

// Discipline colors double as map-pin colors (see --gis / --plan / --dev in index.css)
export const disciplines = {
  gis: { label: 'GIS', path: '/GIS' },
  plan: { label: 'Urban Planning', path: '/UrbanPlanning' },
  dev: { label: 'Software', path: '/software-engineering' },
  work: { label: 'Professional', path: '/Experience' },
};

// ---------- GIS ----------
export const gis = {
  title: 'Geographic Information Systems',
  intro: [
    'GIS changes how we understand and manage spatial data, with tools to analyze, visualize, and interpret geographic information — from urban planning to environmental management.',
    'My GIS work began in undergrad, learning spatial analysis, data manipulation, and cartography. Through hands-on projects I applied GIS to real-world problems ranging from urban infrastructure to natural resource management.',
  ],
  projects: [
    {
      id: 'ndvi', year: '2020', title: 'NDVI Classification',
      text: 'Using Landsat NDVI raster classification, this overlay depicts general land use within Bellingham city limits — showing where development extends and how much vegetation cover surrounds the city.',
      images: ['gis/ndvi2', 'gis/ndvi3', 'gis/classification'],
      tools: ['Landsat', 'Raster classification', 'ArcGIS Pro'],
      place: { name: 'Bellingham, WA', lon: -122.48, lat: 48.75 },
    },
    {
      id: 'senior', year: '2020', title: 'Senior Project: 2017 Tubbs Fire Impact on Sonoma County',
      // DRAFT — the old site reused the Nooksack text here; this summary is written from the map images, please verify
      text: 'An analysis of the 2017 Tubbs Fire across Sonoma County census tracts, mapping the share of structures destroyed alongside population, median home value, and minority population to examine who was most affected.',
      images: ['gis/sp_cover', 'gis/seniorproject', 'gis/seniorprojecttable', 'gis/destroyed', 'gis/population', 'gis/median', 'gis/minority'],
      tools: ['Census data', 'Choropleth mapping', 'Spatial analysis'],
      place: { name: 'Sonoma County, CA', lon: -122.72, lat: 38.48 },
    },
    {
      id: 'atlas', year: '2020', title: 'Nooksack River Atlas',
      text: 'An atlas series highlighting the coverage and upstream network of the Nooksack River in relation to the cities it crosses, and where floodplains extend into city limits — showing why upstream networks matter.',
      images: ['gis/atlas1', 'gis/atlas2', 'gis/atlas3', 'gis/atlas4', 'gis/atlas5', 'gis/atlas6', 'gis/atlas7', 'gis/atlas8', 'gis/atlas9', 'gis/atlas10'],
      tools: ['Cartography', 'Hydrology', 'Map series'],
      place: { name: 'Nooksack River, WA', lon: -122.2, lat: 48.88 },
    },
    {
      id: 'interpolation', year: '2020', title: 'Interpolation',
      // DRAFT — the old site reused the housing-plan text here; written from the map images, please verify
      text: 'Comparing interpolation methods: Kriging, IDW, and Spline surfaces of temperature around Pierce County, plus a Natural Neighbor surface of survey-point safety levels, automated with ModelBuilder.',
      images: ['gis/interpolationsurface', 'gis/interpolation', 'gis/modelbuilderinterpolation'],
      tools: ['Kriging', 'IDW', 'Spline', 'ModelBuilder'],
      place: { name: 'Pierce County, WA', lon: -122.3, lat: 47.05 },
    },
    {
      id: 'consultant', year: '2018', title: 'Consultant Site Selection',
      // DRAFT — the old text was cut off mid-sentence; completed from the map's own caption, please verify
      text: 'Given a set of siting requirements, I used GIS suitability tools to find the top four sites for a research facility in the U.S. Southwest — above 2,000 m elevation, close to highways but away from cities, on federal land, with suitable vegetation.',
      images: ['gis/consultant'],
      tools: ['Suitability analysis', 'Raster overlay'],
      place: { name: 'U.S. Southwest', lon: -106.5, lat: 35.1 },
    },
    {
      id: 'fish', year: '2020', title: 'Stillaguamish Fish Density',
      // DRAFT — the old site had placeholder text; written from the map's caption, please verify
      text: 'A ModelBuilder workflow relating forest road density to fish-stream crossings across the Stillaguamish watershed, highlighting the catchments where the two overlap most.',
      images: ['gis/fishdensity', 'gis/fishingmodelbuilder'],
      tools: ['ModelBuilder', 'Density analysis'],
      place: { name: 'Stillaguamish Watershed, WA', lon: -121.9, lat: 48.24 },
    },
  ],
  certificates: {
    year: '2022–2024', title: 'GIS Certificates',
    text: 'Certificates from Esri and the University of Washington that strengthened my GIS skills.',
    images: ['gis/uwcertificate', 'gis/pythoncert', 'gis/3dvisualizationcert', 'gis/arcgisonlinecert'],
  },
};

// ---------- Urban Planning ----------
export const planning = {
  title: 'Urban Planning',
  intro: [
    'Urban Planning covers the systems that govern how cities develop and are designed. These systems interconnect in complex ways, and planning brings many sectors together to tackle sustainable development and environmental preservation.',
    'During my undergraduate studies in Urban Planning I gained the tools to analyze, collaborate on, and propose solutions to urban challenges. These projects show that theory applied to real places.',
  ],
  projects: [
    {
      id: 'hazard', year: '2019', title: 'Hazard Mitigation Plan',
      text: 'Case-study mitigation plan for San Diego County, developing risk assessments, vulnerability assessments, and implementation plans to guide long-term work toward resilient communities.',
      images: ['urbanplanning/environmental/hazardsmitigationplan'],
      tools: ['Risk assessment', 'Policy'],
      place: { name: 'San Diego, CA', lon: -117.16, lat: 32.72 },
    },
    {
      id: 'ferndale', year: '2019', title: 'Ferndale Comprehensive Plan',
      text: 'Presentation to Ferndale, WA community members on the city’s key assets and what is needed for future improvement, covering land use and zoning, transportation, and environmental sustainability.',
      images: ['urbanplanning/ferndale/studyarea', 'urbanplanning/ferndale/urbanform', 'urbanplanning/ferndale/row', 'urbanplanning/ferndale/ped_bicycles', 'urbanplanning/ferndale/floodmap'],
      tools: ['Comprehensive planning', 'Zoning', 'Community engagement'],
      place: { name: 'Ferndale, WA', lon: -122.59, lat: 48.85 },
    },
    {
      id: 'housing', year: '2019', title: 'Student Housing Action Plan',
      text: 'A collective action plan, created with two colleagues, proposing future student housing. It includes survey collection and case studies of other universities facing similar housing demand.',
      images: ['urbanplanning/housingactionplan/procedure', 'urbanplanning/housingactionplan/surveycollection', 'urbanplanning/housingactionplan/employeesurvey', 'urbanplanning/housingactionplan/casestudies', 'urbanplanning/housingactionplan/whatcomrental'],
      tools: ['Surveys', 'Case studies'],
      place: { name: 'Bellingham, WA', lon: -122.49, lat: 48.735 },
    },
    {
      id: 'seattle', year: '2019', title: 'Seattle Transportation System',
      // DRAFT — the old site had placeholder text; written from the title slide, please verify
      text: '“The Bigger Picture”: a look at Seattle’s transportation system and how its approach could inspire change in how other U.S. cities plan their transit.',
      images: ['urbanplanning/seattletransportation'],
      tools: ['Transportation planning', 'Research'],
      place: { name: 'Seattle, WA', lon: -122.33, lat: 47.61 },
    },
    {
      id: 'monroe', year: '2019', title: 'Monroe Multi-Modal Trail Community Outreach',
      // DRAFT — the old site had placeholder text; written from the presentation slides, please verify
      text: 'A WSDOT, City of Monroe, and WWU partnership to lead early-stage community discussion on a proposed trail, gathering input on trail priorities, access points, and conceptual design.',
      images: ['urbanplanning/monroecommunity/website', 'urbanplanning/monroecommunity/backgroundpurpose', 'urbanplanning/monroecommunity/monroegoals', 'urbanplanning/monroecommunity/conceptualdesign', 'urbanplanning/monroecommunity/feedback', 'urbanplanning/monroecommunity/monroefeedback', 'urbanplanning/monroecommunity/monroeslide', 'urbanplanning/monroecommunity/presenting'],
      tools: ['Public outreach', 'Trail planning'],
      place: { name: 'Monroe, WA', lon: -121.97, lat: 47.855 },
    },
  ],
};

// ---------- Software Engineering ----------
export const software = {
  title: 'Software Engineering',
  intro: [
    'Over the past year I have been building my coding skills to pursue a role as a GIS Developer. It started with a full-stack bootcamp, which gave me a working knowledge of front-end and back-end development.',
  ],
  projects: [
    {
      id: 'finance', year: '2023', title: 'Personal Finance Web Page',
      text: 'JavaScript functions that perform financial calculations based on the user’s input.',
      images: ['css/financepage'],
      tools: ['HTML', 'CSS', 'JavaScript'],
      links: [
        { label: 'Code', href: 'https://github.com/josephachang02/FinanceApp' },
        { label: 'Live site', href: 'https://peppy-custard-ae0f17.netlify.app' },
      ],
    },
    {
      id: 'nba', year: '2023', title: 'NBA App',
      text: 'A React app that pulls team and league-wide statistics from RapidAPI. The home page lists every team and logo; selecting a team updates shared state so every other page shows that team’s data.',
      images: ['css/nba_app'],
      tools: ['React', 'REST API', 'Bootstrap'],
      links: [], // TODO: add GitHub / live links — the old site pointed these at the Finance app by mistake
    },
    {
      id: 'workout', year: '2023', title: 'Workout App',
      // DRAFT — the old site reused the NBA text here; written from the screenshot, please verify
      text: 'A full-stack workout tracker where users sign in, browse exercises, and create, edit, or delete their own workouts with sets, reps, and target muscle groups.',
      images: ['css/workoutapp'],
      tools: ['React', 'REST API', 'MUI', 'MongoDB'],
      links: [], // TODO: add GitHub / live links
    },
  ],
  python: {
    title: 'Python',
    text: 'Python is foundational for the algorithms and scripts behind data work. Since late 2023 I have been learning it for data analysis and automation.',
    tools: ['Python', 'SQL', 'pandas', 'PostgreSQL', 'GDAL'],
  },
};

// ---------- Experience ----------
export const experience = {
  intro:
    'The education and professional experience that shaped me. Over the past four years I built a foundation in GIS and software engineering that changed how I approach my work.',
  work: [
    {
      org: 'Google Maps', role: 'GIS Analyst / Project Team Lead', logo: 'css/googlemaps',
      summary: '3 years optimizing and managing geodata with SQL, Python, and ArcGIS Pro.',
      points: ['Implemented 200+ Low Emission Zones across the EU', 'Mapped dense urban road networks missing in countries like Brazil and India', 'Safe destination routing for U.S. trucking'],
      places: [
        { name: 'Low Emission Zones, EU', lon: 4.9, lat: 50.8 },
        { name: 'Road networks, Brazil', lon: -46.63, lat: -23.55 },
        { name: 'Road networks, India', lon: 77.2, lat: 28.61 },
        { name: 'Truck routing, U.S.', lon: -97.5, lat: 39.0 },
      ],
    },
    {
      org: 'Forterra', role: 'GIS Capstone Partner', logo: 'css/forterra',
      summary: 'Combined census tract and Collector data in a web map revealing the link between socioeconomic factors and food deserts across Snohomish County.',
      points: ['Spatial join between census tracts and Collector data', 'Detailed metadata and geodatabase management', 'Launched on ArcGIS Online'],
      links: [{ label: 'View web map', href: 'https://forterra.maps.arcgis.com/apps/mapviewer/index.html?webmap=3238846d43634764b230283c2cd65d61' }],
      places: [{ name: 'Snohomish County, WA', lon: -121.75, lat: 48.05 }],
    },
  ],
  education: [
    {
      org: 'University of Washington', role: 'Certificate in Geographic Information Systems', logo: 'css/uw_logo',
      summary: 'Used the Esri suite (ArcMap, ArcGIS Pro, Survey123) to deliver work in cartography, data analysis, and geospatial data management.',
      points: ['GIS modeling and analysis', 'CAD/GIS integration', 'Python in GIS'],
      links: [{ label: 'Program overview', href: 'https://www.pce.uw.edu/certificates/geographic-information-systems' }],
    },
    {
      org: 'Western Washington University', role: 'Urban Planning (undergraduate)', logo: 'css/wwu_logo', logoBg: '#14438a',
      summary: 'Ethical, inclusive urban spaces, urban design, and the history of planning in the U.S.',
      points: ['Mock comprehensive plans and community meetings', 'Technical writing and ethical practice in planning', 'Planning for sustainable communities'],
      links: [{ label: 'Program overview', href: 'https://www.wwu.edu/majors/urban-planning' }],
    },
  ],
  certificates: [
    {
      org: 'Per Scholas', role: 'Full-Stack Development', logo: 'css/perscholas', logoBg: '#09507c',
      summary: '16-week software engineering bootcamp in Seattle, WA.',
      points: ['HTML and CSS', 'JavaScript and React', 'Back-end development with MongoDB'],
      links: [{ label: 'Program overview', href: 'https://perscholas.org/courses/software-engineer/seattle/' }],
    },
    {
      org: 'University of Illinois (Coursera)', role: 'CyberGIS', logo: 'css/uillinois_logo',
      summary: 'Fundamentals and advantages of CyberGIS.',
      points: ['GIS APIs and SDKs', 'Using cloud services'],
      links: [
        { label: 'Course overview', href: 'https://www.coursera.org/learn/cybergis' },
        { label: 'Certificate', href: 'https://coursera.org/share/5938a3ed7ee49df6a5195c16218126a1' },
      ],
    },
    {
      org: 'University of Michigan (Coursera)', role: 'Python for Everybody Specialization', logo: 'css/um_logo', logoBg: '#00274c',
      summary: 'Python from syntax and data structures through APIs and web data.',
      points: ['Data structures', 'Databases, regex, and functions', 'Object-oriented Python'],
    },
  ],
};

// Every mapped place, tagged with its discipline and the page section it links to
export const mapPlaces = [
  ...gis.projects.map((p) => ({ ...p.place, title: p.title, kind: 'gis', to: `/GIS#${p.id}` })),
  ...planning.projects.map((p) => ({ ...p.place, title: p.title, kind: 'plan', to: `/UrbanPlanning#${p.id}` })),
  ...experience.work.flatMap((w) => w.places.map((pl) => ({ ...pl, title: w.org, kind: 'work', to: '/Experience' }))),
];
