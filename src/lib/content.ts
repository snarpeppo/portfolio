// ─── Profile ───
export const profile = {
  name: "Gabriele Battistata",
  role: "Fullstack Developer",
  location: "Turin, Italy",
  yearsOfExperience: "5+ years",
  tagline:
    "I build web applications and enterprise platforms that digitize complex processes, integrate critical data, and support large-scale operations — but that's not all.",
  bio: [
    "Outside of work, I spend my time on 3D modeling and printing, photography (both digital and analog), and riding my motorcycle whenever I can. I'm naturally curious about how things work and enjoy building them, whether it's software or more hands-on projects.",
    "In my free time, I like coding small tools and personal projects — especially when the idea sparks my curiosity or the process of building it is enjoyable. Sometimes they're useful, other times they exist simply because I felt like making them."
  ],
  email: "Gabrielebattistata@gmail.com",
  social: {
    github: "https://github.com/snarpeppo",
    linkedin: "https://www.linkedin.com/in/gabriele-battistata/",
  },
  skills: {
    Frontend: [
      "Angular",
      "React",
      "Next.js",
      "Vue.js",
      "TypeScript",
      "JavaScript",
      "jQuery",
      "Tailwind CSS",
    ],
    Backend: [".NET Core 7+", "Node.js", "Express", "C#", "Nest.js", "Go"],
    "Testing & QA": [
      "Playwright",
      "E2E Testing",
    ],
    "DevOps & Tools": [
      "Docker",
      "Git",
      "CI/CD",
      "Linux",
      "CUPS",
    ],
    Creative: [
      "FreeCAD",
      "Fusion 360",
      "Davinci Resolve",
    ],
  },
  experience: [
    {
      role: "Full Stack Developer",
      company: "Present S.p.a",
      period: "2021 — Present",
      projects: [
        {
          title: "Stellantis Dealership PWA",
          items: [
            "Developed a mission-critical PWA (Angular + .NET Core 7) for authorized Stellantis group dealerships worldwide",
            "Vehicle intervention tracking with offline quality check creation and anomaly management",
            "Real-time dashboards for vehicle diagnostic API log analysis",
          ],
        },
        {
          title: "FIAT Inventory Scheduler",
          items: [
            "Built analytical dashboards for vehicle diagnostic API log analysis",
            "Migrated a flat-file scheduler from COBOL to Node.js for FIAT plant inventory management across Europe",
          ],
        },
      ],
    },
    {
      role: "Working Student — Junior Full Stack Developer",
      company: "Present S.p.a",
      period: "2020 — 2021",
      projects: [
        {
          items: [
            "Developed a PWA with jQuery and Handlebars leveraging CUPS APIs for print settings customization and queue management",
            "Self-taught Vue.js 3 to build a 3D print queue management solution for the office",
          ],
        },
      ],
    },
  ],
  education: [
    {
      degree: "Higher Technician in Backend Systems Integration",
      school: "ITS ICT Foundation for Information and Communication Technologies",
      period: "2019 — 2021",
    },
  ],
};

// ─── Projects ───
export interface Project {
  slug: string;
  title: string;
  description: string;
  details: string[];
  tags: string[];
  image?: string;
  links: {
    live?: string;
    github?: string;
    caseStudy?: string;
  };
  year: string;
}

export const projects: Project[] = [
  {
    slug: "client-scraper",
    title: "clientScraper",
    image: "images/projectsImg/ClientScraper.png",
    description:
      "Automated lead generation tool that identifies local businesses without a proper website and prioritizes them for outbound sales activities.",
    details: [
      "Automated Google Maps search by city and configurable categories, extracting leads and verifying their online presence",
      "Two-phase enrichment: visible data collection with Playwright and phone/website integration via Google Places API",
      "Proprietary Lead Priority Score that segments leads into tiers (Ghost, Facebook Only, Feature Gap, Solid Site)",
      "CSV export and self-contained HTML dashboard with filtering, sorting, quick actions, and contact tracking with local persistence",
    ],
    tags: [
      "playwright",
      "python",
      "google-maps",
      "lead-generation",
      "web-scraping",
      "google-places-api",
      "sales-tool",
    ],
    links: {
      github: "https://github.com/snarpeppo/clientScraper",
    },
    year: "2026",
  },
  {
    slug: "esp32-weather-station",
    title: "Weather Display for M5Stack",
    image: "images/projectsImg/WeatherM5Atom.webp",
    description: "M5Stack project that connects to Wi-Fi, fetches weather data from a remote endpoint, and displays different LED animations based on atmospheric conditions.",
    details: [
      "Automatic Wi-Fi connection with fallback to a secondary network in case of failure",
      "Periodic HTTP endpoint polling to retrieve the current weather code",
      "Custom LED animations for each condition: sunny, cloudy, light rain, and heavy rain",
      "Automatic reboot logic on connection errors to ensure display reliability",
      "Manually crafted animations using RGB frame sequences on the built-in LED matrix",
    ],
    tags: [
      "m5stack",
      "micropython",
      "iot",
      "weather",
      "led-matrix",
      "wifi",
      "embedded",
    ],
    links: {
      github: "https://github.com/snarpeppo/WeatherStick",
    },
    year: "2023"
  }
];

// ─── 3D Models ───
export interface Model3D {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  dimensions?: string;
  printTime?: string;
  filament?: string;
  image?: string;
  stlUrl?: string;
  date: string;
}

export const models3d: Model3D[] = [
  {
    id: "coffe-dispenser",
    title: "Coffee Capsule Dispenser",
    description:
      "A dispenser for individually wrapped flat coffee pods — by a coffee consumer, for a coffee consumer.",
    category: "Office",
    tags: ["Fusion 360", "PLA"],
    date: "2025-05-01",
    stlUrl: "/3D/Dispenser-Caffe.stl",
  },
  {
    id: "burago-skadis-display",
    title: "1/18 Burago Model Display",
    description:
      "Skadis (Pegboard) mount for displaying 1/18 scale Burago model cars.",
    category: "Model Making",
    tags: ["Fusion 360", "PLA"],
    date: "2025-05-01",
    stlUrl: "/3D/burago-skadis-display.stl",
  },
  
];


