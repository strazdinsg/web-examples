// This file contains the exam questions

const languages = ["English", "Norsk"];
const subQuestionTitles = {
  english: "Sub-questions",
  norsk: "Delspørsmål",
};

const questions = {
  web: {
    categoryName: "Web fundamentals",
    questions: [
      {
        english: {
          main: "Website development",
          description: "explain the process of website development in general.",
          sub: [
            "People's roles in a web-development team (programmer, designer, ...).",
            "Division of responsibility between HTML, CSS and Javascript.",
          ],
        },
        norsk: {
          main: "Utvikling av websider",
          description: "forklar prosessen for webside-utvikling generelt.",
          sub: [
            "Forklar roller man har i web-prosjekter? (programmerer, designer, ...)",
            "Ansvarsfordeling mellom HTML, CSS, og Javascript.",
          ],
        },
      },
      {
        english: {
          main: "Universal Design and accessibility",
          description:
            "explain the goal and give some examples of how we can take care of website accessibility.",
          sub: [],
        },
        norsk: {
          main: "Universell utforming og accessibility",
          description:
            "forklar målet og gi noen eksampler på hvordan vi kan passe på accessibility av websider.",
          sub: [],
        },
      },
      {
        english: {
          main: "Web servers and browsers",
          description:
            "explain how web browsers locate resources on web servers.",
          sub: [
            "Browsers",
            "Web servers",
            "Web addresses (URLs)",
            "HTTP protocol",
          ],
        },
        norsk: {
          main: "Web servere og browsere",
          description:
            "forklar hvordan web browsere finner resursser som ligger på web tjenere.",
          sub: [
            "Browsers",
            "Web servers",
            "Web adresser (URL)",
            "HTTP protokoll",
          ],
        },
      },
      {
        english: {
          main: "REST API",
          description:
            "Explain the main concept of REST API and the conventions",
          sub: [
            "Main idea",
            "CRUD operations",
            "URL conventions",
            "HTTP method conventions",
          ],
        },
        norsk: {
          main: "REST API",
          description: "Forklar konseptet og konvensjoner av REST API",
          sub: [
            "Hovedideen",
            "CRUD operasjoner",
            "URL konvensjoner",
            "HTTP metodekonvensjoner",
          ],
        },
      },
      {
        english: {
          main: "Web application architectures",
          description:
            "explain the advantages and drawbacks of monolith- versus microservice architecture",
          sub: [],
        },
        norsk: {
          main: "Arkitektur av webapplikasjoner",
          description:
            "forklar fordeler og ulemper av monolit- kontra mikrotjenestearkitektur",
          sub: [],
        },
      },
      {
        english: {
          main: "Developer's toolbox",
          description:
            "describe the tools a programmer can use for development, testing and debugging of web applications.",
          sub: [],
        },
        norsk: {
          main: "Utviklers verktøykasse",
          description:
            "beskriv verktøy som en programmerer kan bruke for utvikling, testing og debugging av websider.",
          sub: [],
        },
      },
      {
        english: {
          main: "Don Normans usability principles",
          description:
            "explain the 6 Normans usability principles, give examples how it can be used for web design.",
          sub: [
            "Visibility",
            "Feedback",
            "Constraints",
            "Mapping",
            "Consistency",
            "Affordance",
          ],
        },
        norsk: {
          main: "Don Normans usability prinsipper",
          description:
            "forklar Normans 6 usability prinsipper, gi noen eksempler hvordan de kan brukes for webdesign.",
          sub: [
            "Visibility",
            "Feedback",
            "Constraints",
            "Mapping",
            "Consistency",
            "Affordance",
          ],
        },
      },
      {
        english: {
          main: "Web design: font",
          description:
            "how can designers use typography (font) to make effective websites?",
          sub: [],
        },
        norsk: {
          main: "Webdesign: font",
          description:
            "hvordan kan designere bruke typografi (font) for å lage effektive websider?",
          sub: [],
        },
      },
      {
        english: {
          main: "Web design: colors",
          description:
            "how can designers use color to make effective websites?",
          sub: [],
        },
        norsk: {
          main: "Webdesign: farger",
          description:
            "hvordan kan designere bruke farger for å lage effektive websider?",
          sub: [],
        },
      },
      {
        english: {
          main: "Web design: images",
          description:
            "how can designers use images to make effective websites?",
          sub: [],
        },
        norsk: {
          main: "Webdesign: bilder",
          description:
            "hvordan kan designere bruke bilder for å lage effektive websider?",
          sub: [],
        },
      },
      {
        english: {
          main: "Web design: visual hierarchy",
          description:
            "explain the concept of visual hierarchy and give some examples of what techniques can be used to achieve the desired hierarchy of content",
          sub: [],
        },
        norsk: {
          main: "Webdesign: visuell hierarki",
          description:
            "forklar konseptet 'Visual hierarchy' and gi noen eksempler av teknikker som kan brukes for oppnå ønsket hierarki av innholdet",
          sub: [],
        },
      },
      {
        english: {
          main: "Deployment of websites",
          description:
            "describe the process of deploying a website on a publicly accessible server",
          sub: [],
        },
        norsk: {
          main: "Deployment av websider",
          description:
            "beskriv deploymentprosessen av en webside på en offentlig server",
          sub: [],
        },
      },
      {
        english: {
          main: "Session authentication",
          description:
            "explain how stateful authentication (sessions) work for websites",
          sub: [],
        },
        norsk: {
          main: "Sessjonsautentisering",
          description:
            "forklar hvordan 'stateful' autentisering (sesjoner) fungerer for websider)",
          sub: [],
        },
      },
    ],
  },
  html: {
    categoryName: "HTML",
    questions: [
      {
        english: {
          main: "HTML Markup",
          description: "describe the general structure of HTML files.",
          sub: [],
        },
        norsk: {
          main: "HTML Markup",
          description: "beskriv strukturen av HTML filer.",
          sub: [],
        },
      },
      {
        english: {
          main: "Document Object Model (DOM)",
          description: "describe the following concepts related to DOM.",
          sub: [
            "DOM tree",
            "DOM elements",
            "DOM element attributes",
            "`id` and `class` attributes",
          ],
        },
        norsk: {
          main: "Document Object Model (DOM)",
          description: "beskriv konsepter relaterte til DOM.",
          sub: [
            "DOM tree",
            "DOM elementer",
            "attributter av DOM elementer",
            "`id` og `class` attributter",
          ],
        },
      },
      {
        english: {
          main: "Block and inline elements",
          description:
            "describe the difference between inline and block elements.",
          sub: ["DOM elements as blocks", "inline VS block", "examples"],
        },
        norsk: {
          main: "Block og inline elementer",
          description: "beskrive forskjell mellom block og inline elementer.",
          sub: [
            "DOM elementer som blokker",
            "inline kontra block",
            "eksempler",
          ],
        },
      },
      {
        english: {
          main: "Quality assurance",
          description:
            "What tools and techniques can web developers use to ensure quality of the code they write?",
          sub: [],
        },
        norsk: {
          main: "Kvalitetsikring",
          description:
            "hvilke verktø og teknikker kan webutviklere bruke for sikring av kvalitet i koden de skriver?",
          sub: [],
        },
      },
      {
        english: {
          main: "Semantic HTML elements",
          description:
            "explain the concept of semantic HTML elements and give some examples.",
          sub: [],
        },
        norsk: {
          main: "Semantiske HTML elementer",
          description:
            "forklar konseptet av semantiske HTML elementer og gi noen eksempler.",
          sub: [],
        },
      },
      {
        english: {
          main: "Popular HTML elements",
          description:
            "choose some of widely used HTML elements and say a bit about their purpose and specifics.",
          sub: [],
        },
        norsk: {
          main: "Populære HTML elementer",
          description:
            "velg noen av ofte brukte HTML elementer, si litt om deres formål og hva som er spesielt med dem.",
          sub: [],
        },
      },
      {
        english: {
          main: "HTML links",
          description: "describe linking of documents (files) in HTML.",
          sub: [
            "anchor elements",
            "relative and absolute links",
            "links to sections (fragments)",
          ],
        },
        norsk: {
          main: "HTML lenker",
          description: "beskriv lenker til dokumenter (filer) i HTML.",
          sub: [
            "ankerelementer",
            "relative og absolutte lenker",
            "lenker til seksjoner (fragmenter)",
          ],
        },
      },
      {
        english: {
          main: "Text markup",
          description:
            "describe principles and give some examples of text markup.",
          sub: [],
        },
        norsk: {
          main: "Tekstmarkering",
          description: "beskriv prinsipper og gi eksempler av tekstmarkering.",
          sub: [],
        },
      },
      {
        english: {
          main: "Images",
          description: "technical aspects.",
          sub: [
            "Resolution",
            "Raster and vector graphics",
            "SVG image format",
            "Transparency",
          ],
        },
        norsk: {
          main: "Bilder",
          description: "tekniske aspekter.",
          sub: [
            "Oppløsning",
            "Raster- og vektorgrafikk",
            "SVG bildeformat",
            "Gjennomsiktighet (transparency)",
          ],
        },
      },
      {
        english: {
          main: "Images in HTML",
          description: "use of images in webpages.",
          sub: [
            "How to include images?",
            "Popular image file formats for websites",
          ],
        },
        norsk: {
          main: "Bilder i HTML",
          description: "bruk av bilder i websider.",
          sub: [
            "Hvordan inkluderer man bilder?",
            "Populære filformater for bilder til websider",
          ],
        },
      },
      {
        english: {
          main: "Multiple alternative images in HTML",
          description:
            "describe the options web developers have for use of different (adapted) images for users with different screen sizes",
          sub: [],
        },
        norsk: {
          main: "Flere bildealternativer i HTML",
          description:
            "beskriv muligheter som webutviklere har for bruk av forskjellige (tilpassede) bilder for brukere med ulike skjermstørrelser",
          sub: [],
        },
      },
      {
        english: {
          main: "Tables",
          description: "tabular data display in HTML.",
          sub: [],
        },
        norsk: {
          main: "Tabeller",
          description: "visning av tabulær data i HTML.",
          sub: [],
        },
      },
      {
        english: {
          main: "Forms",
          description: "data submission with HTML forms.",
          sub: ["HTML forms", "input elements"],
        },
        norsk: {
          main: "Forms",
          description: "dataoverføring med HTML forms.",
          sub: ["HTML forms", "input-elementer"],
        },
      },
    ],
  },
  css: {
    categoryName: "CSS",
    questions: [
      {
        english: {
          main: "CSS",
          description: "describe the purpose and use of CSS.",
          sub: [
            "Connection between HTML and CSS",
            "How to include CSS in HTML documents",
            "How to set style for elements?",
          ],
        },
        norsk: {
          main: "CSS",
          description: "hensinkt og bruk.",
          sub: [
            "Sammenheng mellom HTML og CSS",
            "Hvordan inkludere CSS i HTML dokumenter?",
            "Hvordan sette stil for et elementer?",
          ],
        },
      },
      {
        english: {
          main: "CSS selectors",
          description: "how to select and apply styles to necessary elements?",
          sub: [
            "by element type",
            "by class",
            "one specific element",
            "applying styles to selected elements",
          ],
        },
        norsk: {
          main: "CSS Selectors",
          description: "hvordan selektere og sette stil til ønskede elementer?",
          sub: [
            "elementer av konkret type",
            "elementer med konkret klasse",
            "en spesifikt element",
            "sette stil til valgte elementer",
          ],
        },
      },
      {
        english: {
          main: "CSS specificity and inheritance",
          description:
            "explain how style inheritance works in CSS and how specificity can be used to override styles",
          sub: [],
        },
        norsk: {
          main: "CSS 'spesifisitet' (specificity) og arv",
          description:
            "forklar hvordan arv av stiler fungerer med CSS og hvordan man bruker spesifisitet for å overstyre stiler",
          sub: [],
        },
      },
      {
        english: {
          main: "Size units in CSS",
          description: "absolute and relative.",
          sub: [],
        },
        norsk: {
          main: "Størrelsesenheter i CSS",
          description: "absolute og relative.",
          sub: [],
        },
      },

      {
        english: {
          main: "Text formatting",
          description: "with CSS.",
          sub: [],
        },
        norsk: {
          main: "Formattering av tekst",
          description: "med CSS.",
          sub: [],
        },
      },
      {
        english: {
          main: "Colors",
          description: "foreground and background.",
          sub: [],
        },
        norsk: {
          main: "Farger",
          description: "foreground and background.",
          sub: [],
        },
      },
      {
        english: {
          main: "The box model",
          description: "describe the box model.",
          sub: ["Content size", "Padding", "Margin", "Border"],
        },
        norsk: {
          main: "Boksmodellen",
          description: "beskriv boksmodellen.",
          sub: ["Content size", "Padding", "Margin", "Border"],
        },
      },
      {
        english: {
          main: "Floating and positioning",
          description:
            "explain the normal flow and other positioning methods with CSS.",
          sub: [
            "Normal flow",
            "Floating to left/right",
            "Absolute and relative position",
          ],
        },
        norsk: {
          main: "Innholdsflyt og posisjonering",
          description:
            "forklar normale flyten (normal flow) av innholdet og andre posisjoneringsmetoder med CSS.",
          sub: [
            "Normal flow",
            "Floating til venstre/høyre",
            "Absolut og relativt posisjonering",
          ],
        },
      },
      {
        english: {
          main: "CSS Flexbox",
          description: "describe the main features and usage areas of flexbox.",
          sub: [],
        },
        norsk: {
          main: "CSS Flexbox",
          description: "beskriv hovedfunksjonene og bruksområdene til flexbox.",
          sub: [],
        },
      },
      {
        english: {
          main: "CSS Grid",
          description:
            "describe the main features and usage areas of CSS grid.",
          sub: [],
        },
        norsk: {
          main: "CSS Grid",
          description:
            "beskriv hovedfunksjonene og bruksområdene til CSS grid.",
          sub: [],
        },
      },
      {
        english: {
          main: "Holy-grail layout",
          description: "what is it? How could we create it for a website?",
          sub: [],
        },
        norsk: {
          main: "Holy-grail layout",
          description: "hva er det? Hvordan kan man få det til for en webside?",
          sub: [],
        },
      },
      {
        english: {
          main: "Layout of NTNU.no",
          description:
            "without looking at the source code of the page, explain how one could create the layout of the main page on https://ntnu.no website (where would you use absolute or relative positioning, flexbox, grid, etc). Enough to explain the navigation and content until 'NTNU satsingsområder'. P.S. Your explanation does not need to match the layout actually used at ntnu.no, as long as your explanation is correct.",
          sub: [],
        },
        norsk: {
          main: "Oppsett av NTNU.no",
          description:
            "uten å se på kildekoden, forklar hvordan man kunne lage oppsettet (layout) av hovedsiden på https://ntnu.no websiden (hvor ville man bruke absolutt eller relativt posisjonering, flexbox, grid, etc.) Det er nok å forklare navigatjonen og innhold inntil 'NTNU satsingsområder'. P.S. Din forklaring må ikke stemme med det ntnu.no faktisk bruker, så lenge din forklaring er riktig.",
          sub: [],
        },
      },
      {
        english: {
          main: "Responsive webdesign",
          description:
            "describe the main principles and example techniques of responsive webdesign.",
          sub: [],
        },
        norsk: {
          main: "Responsivt webdesign",
          description:
            "beskriv hovedprinsipper og eksempelteknikker i responsiv webdesign.",
          sub: [],
        },
      },
      {
        english: {
          main: "Media queries",
          description:
            "explain how media queries can be used for responsive websites.",
          sub: [],
        },
        norsk: {
          main: "Media queries",
          description:
            "forklar hvordan man bruker 'media queries' for å lage responsive websider.",
          sub: [],
        },
      },
    ],
  },
  js: {
    categoryName: "Javascript",
    questions: [
      {
        english: {
          main: "Javascript",
          description: "what is it? How is javascript executed?",
          sub: [],
        },
        norsk: {
          main: "Javascript",
          description: "hva er det? Hvordan kjøres Javascript?",
          sub: [],
        },
      },
      {
        english: {
          main: "Functions in Javascript",
          description: "",
          sub: ["What is special with them? (compared to Java, for example)"],
        },
        norsk: {
          main: "Funksjoner i Javascript",
          description: "",
          sub: ["Hva er spesielt med dem? (sammenlignet med, bl.a., Java)"],
        },
      },
      {
        english: {
          main: "Event handlers",
          description: "",
          sub: [
            "How can events be handled in Javascript?",
            "Give some examples.",
          ],
        },
        norsk: {
          main: "Event handlers",
          description: "",
          sub: [
            "Hvordan håndterer man `events` i Javascript?",
            "Gi noen eksempler.",
          ],
        },
      },
      {
        english: {
          main: "Access to DOM elements",
          description:
            "how do we get access to specific DOM elements? Name some example functions.",
          sub: [],
        },
        norsk: {
          main: "Tilgang til DOM elementer",
          description:
            "hvordan aksesserer vi konkrete DOM elementer? Nevn noen funksjon-eksempler.",
          sub: [],
        },
      },
      {
        english: {
          main: "Modifications to the DOM",
          description: "describe how we can modify the DOM tree.",
          sub: [
            "Adding new DOM elements",
            "Removing DOM elements",
            "Updating existing elements",
          ],
        },
        norsk: {
          main: "Modifisering av DOM",
          description: "beskriv hvordan kan man modifisere DOM treet.",
          sub: [
            "Legge til nye DOM elementer",
            "Fjerne DOM elementer",
            "Oppdatere eksisterende elementer",
          ],
        },
      },
      {
        english: {
          main: "Communication with backend",
          description:
            "sending data from frontend (Javascript) to backend (server application).",
          sub: [],
        },
        norsk: {
          main: "Kommunikasjon med backend",
          description:
            "sending av data fra frontend (Javascript) til backend (serverapplikasjon).",
          sub: [],
        },
      },
      {
        english: {
          main: "Cross Origin Resource Sharing (CORS)",
          description: "describe the challenge and name some solutions.",
          sub: [],
        },
        norsk: {
          main: "Cross Origin Resource Sharing (CORS)",
          description: "beskriv utfordringen og nevn noen løsninger.",
          sub: [],
        },
      },
      {
        english: {
          main: "Javascript libraries",
          description: "",
          sub: ["Use of JS libraries in general (why? how?)", "jQuery library"],
        },
        norsk: {
          main: "Javascript biblioteker",
          description: "",
          sub: [
            "Bruk av JS biblioteker generelt (hvorfor?, hvordan?)",
            "jQuery bibliotek",
          ],
        },
      },
      {
        english: {
          main: "Frameworks",
          description:
            "the purpose and advantages of using Javascript frameworks.",
          sub: [],
        },
        norsk: {
          main: "Rammeverk",
          description: "hensikt og fordelerer av Javascript rammeverk",
          sub: [],
        },
      },
      {
        english: {
          main: "Token authentication",
          description:
            "explain how stateless authentication with tokens work. Use JSON Web Token (JWT) as an example.",
          sub: [],
        },
        norsk: {
          main: "Token-autentisering",
          description:
            "forklar hvordan 'stateless' autentisering med tokens fungerer. Bruk JSON Web Token (JWT) som et eksempel.",
          sub: [],
        },
      },
    ],
  },
};
