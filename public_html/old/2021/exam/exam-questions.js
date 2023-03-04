// This file contains the exam questions

const languages = ["English", "Norsk"];
const subQuestionTitles = {
  english: "Sub-questions",
  norsk: "Delspørsmål",
};

const questions = {
  html: {
    categoryName: "Web fundamentals and HTML",
    questions: [
      {
        english: {
          main: "Website development",
          description: "explain the process of website development in general.",
          sub: [
            "Explain the different roles in a web-development team (programmer, designer, ...).",
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
          main: "Universal Design",
          description: "explain the goal and give some examples.",
          sub: [],
        },
        norsk: {
          main: "Universell utforming",
          description: "forklar målet og gi noen eksampler.",
          sub: [],
        },
      },
      {
        english: {
          main: "Web servers and browsers",
          description: "explain how web browsers and web servers 'cooperate'.",
          sub: ["Web addresses (URLs)", "HTTP protocol"],
        },
        norsk: {
          main: "Web servere og browsere",
          description:
            "forklar hvordan web browsere og web servere 'samarbeider'.",
          sub: ["Web adresser (URL)", "HTTP protokoll"],
        },
      },
      {
        english: {
          main: "Developer's toolbox",
          description: "describe the tools available for a web programmer.",
          sub: ["Programming, IDE", "Browser console, debugging"],
        },
        norsk: {
          main: "Utviklers verktøykasse",
          description: "beskriv verktøy for en web programmerer.",
          sub: ["Programmering, IDE", "Browser konsoll, debugging"],
        },
      },
      {
        english: {
          main: "HTML Markup",
          description: "describe the general structure of an HTML file.",
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
            "attributes",
            "`id` and `class` attributes",
          ],
        },
        norsk: {
          main: "Document Object Model (DOM)",
          description: "beskriv konsepter relaterte til DOM.",
          sub: [
            "DOM tree",
            "DOM elementer",
            "attributter",
            "`id` og `class` attributter",
          ],
        },
      },
      {
        english: {
          main: "Block and inline elements",
          description:
            "describe the difference between inline and block elements.",
          sub: [],
        },
        norsk: {
          main: "Block og inline elementer",
          description: "beskrive forskjell mellom block og inline elementer.",
          sub: [],
        },
      },
      {
        english: {
          main: "Popular HTML elements",
          description:
            "describe some of the widely used HTML elements (the following list is just an example).",
          sub: [
            "h1",
            "header",
            "article",
            "main",
            "nav",
            "img",
            "a",
            "p",
            "div",
            "span",
            "ul",
            "ol",
            "table",
          ],
        },
        norsk: {
          main: "Populære HTML elementer",
          description:
            "beskrive noen av de mest bruket HTML elementer (følgende liste er kun eksempler).",
          sub: [
            "h1",
            "header",
            "article",
            "main",
            "nav",
            "img",
            "a",
            "p",
            "div",
            "span",
            "ul",
            "ol",
            "table",
          ],
        },
      },
      {
        english: {
          main: "HTML links",
          description: "describe linking of documents (files) in HTML.",
          sub: ["relative and absolute links", "links to sections (fragments)"],
        },
        norsk: {
          main: "HTML lenker",
          description: "beskriv lenker til dokumenter (filer) i HTML.",
          sub: [
            "relative og absolutte lenker",
            "lenker til seksjoner (fragmenter)",
          ],
        },
      },
      {
        english: {
          main: "Text markup",
          description:
            "describe principles and give some examples of text markup (bold, italic, subscript, etc).",
          sub: [],
        },
        norsk: {
          main: "Tekstmarkering",
          description:
            "beskriv prinsipper og gi eksempler of tekstmarkering (bold, italic, subscript, osv).",
          sub: [],
        },
      },
      {
        english: {
          main: "Image preparation",
          description: "image preparation and characteristics of a good image.",
          sub: [],
        },
        norsk: {
          main: "Bildeforberedelse",
          description: "forberedelse av bilder og kjennetegn av et godt bilde.",
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
            "Responsive images",
            "Popular image file formats for websites",
          ],
        },
        norsk: {
          main: "Bilder i HTML",
          description: "bruk av bilder i websider.",
          sub: [
            "Hvordan inkluderer man bilder?",
            "Responsive bilder",
            "Populære filformater for bilder til websider",
          ],
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
            "How to set style for one, specific element?",
            "How to set style for a set of elements?",
          ],
        },
        norsk: {
          main: "CSS",
          description: "hensinkt og bruk.",
          sub: [
            "Sammenheng mellom HTML og CSS",
            "Hvordan inkludere CSS i HTML dokumenter?",
            "Hvordan sette stil for et konkret element?",
            "Hvordan sette stil for alle elementer i et sett?",
          ],
        },
      },
      {
        english: {
          main: "Size units",
          description: "absolute and relative.",
          sub: [],
        },
        norsk: {
          main: "Størrelsesenheter",
          description: "absolute og relative.",
          sub: [],
        },
      },
      {
        english: {
          main: "HTML forms",
          description: "",
          sub: ["Form elements", "Sending data with HTML forms"],
        },
        norsk: {
          main: "HTML forms",
          description: "",
          sub: ["Form-elementer", "Dataoverføring med HTML forms"],
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
          main: "Data submission",
          description:
            "sending data from frontend (Javascript) to backend (server application).",
          sub: [
            "With standard HTML forms",
            "With asynchronous requests (XMLHttpRequest, Ajax)",
          ],
        },
        norsk: {
          main: "Data innsending",
          description:
            "sending av data fra frontend (Javascript) til backend (serverapplikasjon).",
          sub: [
            "Med standardskjema (HTML forms)",
            "med asynkrone kall (XMLHttpRequest, Ajax)",
          ],
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
        difficult: true,
        english: {
          main: "Execution and scope",
          description: "",
          sub: [
            "Javascript execution phases: hoisting and invocation (execution)",
            "Variable scope",
          ],
        },
        norsk: {
          main: "Execution and scope",
          description: "",
          sub: [
            "Faser av Javascript kjøring (hoisting og `invocation` (`execution`))",
            "`Scope` av variabler",
          ],
        },
      },
      {
        difficult: true,
        english: {
          main: "Objects",
          description: "four ways to work with objects in Javascript.",
          sub: [
            "Object literals",
            "Constructor functions",
            "Object.create",
            "Classes",
          ],
        },
        norsk: {
          main: "Objekter",
          description: "fire måter å jobbe med objekter i Javascript.",
          sub: [
            "Object literals",
            "Constructor functions",
            "Object.create",
            "Klasser",
          ],
        },
      },
      {
        difficult: true,
        english: {
          main: "Prototype-based programming",
          description: "",
          sub: [
            "Explain the concept",
            "How is it different from object-oriented programming?",
            "How does Javascript use it?",
          ],
        },
        norsk: {
          main: "Prototype-basert programmering",
          description: "",
          sub: [
            "Forklar konseptet",
            "Forskjell mellom prototyper og objekt-orientert programmering?",
            "Hvordan bruker Javascript prototyper?",
          ],
        },
      },
      {
        difficult: true,
        english: {
          main: "Advanced use of Javascript functions",
          description: "",
          sub: ["The value of `this`", "Binding `this` to specific objects"],
        },
        norsk: {
          main: "Avansert bruk av Javascript funksjoner",
          description: "",
          sub: ["Verdi av `this`", "Binding av `this` til konkrete objekter"],
        },
      },
    ],
  },
  react: {
    categoryName: "Frameworks and React",
    questions: [
      {
        english: {
          main: "Purpose",
          description: "the purpose of using Javascript frameworks in general.",
          sub: [],
        },
        norsk: {
          main: "Hensikt",
          description: "hva er hensikt med Javascript rammeverk?",
          sub: [],
        },
      },
      {
        english: {
          main: "Reactive programming",
          description: "explain the concept and advantages.",
          sub: [],
        },
        norsk: {
          main: "Reaktiv programmering",
          description: "forklar konseptet og fordeler.",
          sub: [],
        },
      },
      {
        english: {
          main: "React framework",
          description: "advantages and drawbacks (pros and cons).",
          sub: [],
        },
        norsk: {
          main: "React rammeverk",
          description: "fordeler og ulemper.",
          sub: [],
        },
      },
      {
        english: {
          main: "Components in React",
          description: "explain the concept and advantages.",
          sub: [],
        },
        norsk: {
          main: "Komponenter i React",
          description: "forklar konseptet og fordeler.",
          sub: [],
        },
      },
      {
        english: {
          main: "Properties",
          description:
            "explain the concept and use of properties (props) in React.",
          sub: [],
        },
        norsk: {
          main: "Egenskaper (properties)",
          description:
            "forklar konseptet og fordeler av `properties` (props) i React.",
          sub: [],
        },
      },
      {
        english: {
          main: "State",
          description:
            "explain the concept of state in React. How is it different from properties (props)?",
          sub: [],
        },
        norsk: {
          main: "Tilstand (state)",
          description:
            "forklar tilstandskonseptet (`state`) i React. Hva er forskjell mellom tilstand (`state`) og egenskaper (`properties`) i React?",
          sub: [],
        },
      },
      {
        difficult: true,
        english: {
          main: "React hooks",
          description: "explain the concept and give some examples.",
          sub: [],
        },
        norsk: {
          main: "React hooks",
          description: "forklar konseptet og gi noen eksempler.",
          sub: [],
        },
      },
      {
        english: {
          main: "React router",
          description: "explain the concept and it's application.",
          sub: [],
        },
        norsk: {
          main: "React router",
          description: "forklar konseptet og anvendelser.",
          sub: [],
        },
      },
      {
        difficult: true,
        english: {
          main: "Redux",
          description: "explain how state management with Redux works.",
          sub: [
            "The general idea of Redux - what problem does it solve and how?",
            "React-redux binding - how does it work?",
          ],
        },
        norsk: {
          main: "Redux",
          description:
            "forklar tilstandsforvaltning med Redux - hvordan fungerer det?",
          sub: [
            "Hvilken utfording er løst med Redux?",
            "React-redux binding - hvordan fungerer det?",
          ],
        },
      },
      {
        english: {
          main: "API calls with React",
          description: "how do we send HTTP requests to a REST API from React?",
          sub: [],
        },
        norsk: {
          main: "API",
          description:
            "hvordan sender man REST API kall (HTTP forespørsel) fra React?",
          sub: [],
        },
      },
    ],
  },
};
