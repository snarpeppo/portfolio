// ─── Profile ───
export const profile = {
  name: "Gabriele Battistata",
  role: "Sviluppatore Fullstack",
  location: "Torino, Italia",
  yearsOfExperience: "5+ anni",
  tagline:
    // "I build elegant digital experiences from database to interface — and I 3D print the prototypes.",
    "Sviluppo applicazioni web e piattaforme enterprise che digitalizzano processi complessi, integrano dati critici e supportano operazioni su larga scala — ma non solo.",
  bio: [
    "Fuori dal lavoro mi dedico soprattutto a modellazione e stampa 3D, alla fotografia, sia digitale che analogica. Appena posso, mi piace anche andare in moto. In generale mi interessa capire come funzionano le cose e costruirle, che si tratti di software o di progetti più pratici.",
    "Nel tempo libero mi piace programmare piccoli strumenti e progetti personali, soprattutto quando l’idea mi incuriosisce o il processo di realizzazione è divertente. A volte sono utili, altre volte esistono semplicemente perché mi andava di farli."
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
    "Test e QA": [
      "Playwright",
      "E2E Testing",
    ],
    "DevOps e Strumenti": [
      "Docker",
      "Git",
      "CI/CD",
      "Linux",
      "CUPS",
    ],
    "Creative": [
      "FreeCAD",
      "Fusion 360",
      "Davinci Resolve",
    ],
  },
  experience: [
    {
      role: "Sviluppatore Full Stack",
      company: "Present S.p.a",
      period: "2021 — Presente",
      description:
        "Sviluppo una PWA critica per il gruppo Stellantis (Angular + .NET Core 7) che consente alle officine autorizzate di tutto il mondo di tracciare gli interventi sui veicoli, creare controlli qualità offline ed esaminare le anomalie identificate. Ho realizzato dashboard analitiche per l'analisi dei log delle API di diagnostica veicolare. Ho migrato uno scheduler flat-file da COBOL a Node.js per la gestione dell'inventario degli stabilimenti FIAT in tutta Europa.",
    },
    {
      role: "Working Student — Sviluppatore Junior Full Stack",
      company: "Present S.p.a",
      period: "2020 — 2021",
      description:
        "Ho sviluppato una PWA con jQuery e Handlebars che sfrutta le API CUPS per la personalizzazione delle impostazioni di stampa e la gestione delle code. Ho studiato autonomamente Vue.js 3 per realizzare una soluzione di gestione delle code di stampa 3D per l'ufficio.",
    },
  ],
  education: [
    {
      degree: "Tecnico Superiore Integratore di Sistemi Backend",
      school: "Fondazione ITS ICT per le Tecnologie dell'Informazione e della Comunicazione",
      period: "2019 — 2021",
    },
  ],
};

// ─── Projects ───
export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
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
      "Strumento automatizzato di lead generation che individua attività locali senza un sito web adeguato e le assegna una priorità per attività di outbound sales.",
    longDescription:"clientScraper automatizza la ricerca di attività su Google Maps per città e categorie configurabili, estraendo lead e verificando la loro presenza online. Si basa su due fasi: prima raccoglie i dati visibili delle schede con Playwright, poi arricchisce i lead con telefono e sito tramite Google Places API. Un Lead Priority Score proprietario li segmenta in fasce come Ghost, Solo Facebook, Feature Gap e Sito Solido, così l’agenzia sa subito chi contattare prima. I risultati vengono esportati in CSV e consultati in una dashboard HTML autosufficiente con filtri, ordinamento, azioni rapide e tracciamento dei contatti con persistenza locale.",
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
    title: "Weather Display per M5Stack",
    image: "images/projectsImg/WeatherM5Atom.webp",
    description: "Progetto per M5Stack che si collega al Wi-Fi, recupera informazioni meteo da un endpoint remoto e visualizza diverse animazioni LED in base alle condizioni atmosferiche.",
    longDescription: "Questo script per M5Stack utilizza la matrice LED integrata per mostrare animazioni meteo in tempo reale. Dopo aver tentato la connessione a una rete Wi-Fi, il dispositivo interroga periodicamente un endpoint HTTP che restituisce un codice meteo. In base al valore ricevuto, viene eseguita una specifica animazione visiva sulla matrice: sole, nuvoloso, pioggia leggera o pioggia intensa. Il codice include una logica di fallback per la connessione a una seconda rete Wi-Fi e, in caso di errore durante il recupero dei dati, effettua il riavvio del dispositivo. Le animazioni sono costruite manualmente tramite sequenze di frame RGB, così da trasformare il dispositivo in un piccolo display meteo autonomo.",
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

// ─── Blog Posts ───
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readingTime: string;
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-neumorphic-design-systems",
    title: "Costruire Sistemi di Design Neumorfici nel 2025",
    excerpt:
      "Una guida pratica all'implementazione della soft UI con CSS moderno — niente design tokens, niente drammi.",
    date: "2025-05-12",
    tags: ["CSS", "Design", "Tutorial"],
    readingTime: "8 min di lettura",
  },
  {
    slug: "fullstack-typescript-best-practices",
    title: "TypeScript Fullstack: Pattern che Scalano",
    excerpt:
      "Lezioni da 5 anni di monorepo TypeScript — cosa funziona, cosa no, e perché il noioso è meglio.",
    date: "2025-04-28",
    tags: ["TypeScript", "Architettura", "Best Practice"],
    readingTime: "12 min di lettura",
  },
  {
    slug: "3d-printing-for-developers",
    title: "Stampa 3D per Sviluppatori: Dal Codice all'Oggetto",
    excerpt:
      "Come uso la modellazione parametrica e la generazione procedurale per creare design stampabili in 3D.",
    date: "2025-03-15",
    tags: ["Stampa 3D", "Blender", "Creative Coding"],
    readingTime: "10 min di lettura",
  },
  {
    slug: "optimizing-nextjs-performance",
    title: "Ottimizzare Next.js per la Produzione: Checklist",
    excerpt:
      "Le ottimizzazioni esatte che eseguo su ogni progetto Next.js prima del deploy — dai font alle immagini al runtime.",
    date: "2025-02-20",
    tags: ["Next.js", "Performance", "Tutorial"],
    readingTime: "7 min di lettura",
  },
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
    title: "Dispenser Caffè",
    description:
      "Un dispender di cialde piatte singolarmente incartate, per un consumatore di caffè, da un consumatore di caffè",
    category: "Arredamento",
    tags: ["Fusion 360", "PLA"],
    "dimensions": "150mm x 150mm x 200mm",
    printTime: "14 ore",
    filament: "PLA Silk Rame",
    date: "2025-05-01",
    stlUrl: "/3D/Dispenser-Caffe.stl",
  },
  
];

// ─── Hobbies ───
export interface Hobby {
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  content?: string;
}

export const hobbies: Hobby[] = [
  {
    slug: "3d-modeling",
    title: "Modellazione e Stampa 3D",
    description:
      "Progetto oggetti funzionali e decorativi usando Fusion 360, Blender e varie tecniche di stampa 3D. Dai meccanismi a scatto all'arredamento parametrico.",
    icon: "Cube",
    color: "primary",
  },
  {
    slug: "photography",
    title: "Fotografia Analogica",
    description:
      "Fotografia analogica in medio formato e 35mm. Sviluppo e scansiono le mie pellicole, con focus su composizioni architettoniche e di paesaggio.",
    icon: "Camera",
    color: "secondary",
  },
];
