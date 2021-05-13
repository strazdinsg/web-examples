// This file contains the exam questions

const languages = ["English", "Norsk"];
const subQuestionTitles = {
    english: "Sub-questions",
    norsk: "Delspørsmål"
}

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
                        "Division of responsibility between HTML, CSS and Javascript."
                    ]
                },
                norsk: {
                    main: "Utvikling av websider",
                    description: "forklar prosessen for webside-utvikling generelt.",
                    sub: [
                        "Forklar roller man har i web-prosjekter? (programmerer, designer, ...)",
                        "Ansvarsfordeling mellom HTML, CSS, og Javascript."
                    ]
                }
            },
            {
                english: {
                    main: "Universal Design",
                    description: "explain the goal and give some examples.",
                    sub: []
                },
                norsk: {
                    main: "Universell utforming",
                    description: "forklar målet og gi noen eksampler.",
                    sub: []
                }
            },
            {
                english: {
                    main: "Web servers and browsers",
                    description: "explain how web browsers and web servers 'cooperate'.",
                    sub: ["Web addresses (URLs)", "HTTP protocol"]
                },
                norsk: {
                    main: "Web servere og browsere",
                    description: "forklar hvordan web browsere og web servere 'samarbeider'.",
                    sub: ["Web adresser (URL)", "HTTP protokoll"]
                }
            },
            {
                english: {
                    main: "Developer's toolbox",
                    description: "describe the tools available for a web programmer.",
                    sub: ["Programming, IDE", "Browser console, debugging"]
                },
                norsk: {
                    main: "Utviklers verktøykasse",
                    description: "beskriv verktøy for en web programmerer.",
                    sub: ["Programmering, IDE", "Browser konsoll, debugging"]
                }
            },
            {
                english: {
                    main: "HTML Markup",
                    description: "describe the general structure of an HTML file.",
                    sub: []
                },
                norsk: {
                    main: "HTML Markup",
                    description: "beskriv strukturen av HTML filer.",
                    sub: []
                }
            },
            {
                english: {
                    main: "Document Object Model (DOM)",
                    description: "describe the following concepts related to DOM.",
                    sub: ["DOM tree", "DOM elements", "attributes", "`id` and `class` attributes"]
                },
                norsk: {
                    main: "Document Object Model (DOM)",
                    description: "beskriv konsepter relaterte til DOM.",
                    sub: ["DOM tree", "DOM elementer", "attributter", "`id` og `class` attributter"]
                }
            },
            {
                english: {
                    main: "Block and inline elements",
                    description: "describe the difference between inline and block elements.",
                    sub: []
                },
                norsk: {
                    main: "Block og inline elementer",
                    description: "beskrive forskjell mellom block og inline elementer.",
                    sub: []
                }
            },
            {
                english: {
                    main: "Popular HTML elements",
                    description: "describe some of the widely used HTML elements (the following list is just an example).",
                    sub: ["h1", "header", "article", "main", "nav", "img", "a", "p", "div", "span", "ul", "ol", "table"]
                },
                norsk: {
                    main: "Populære HTML elementer",
                    description: "beskrive noen av de mest bruket HTML elementer (følgende liste er kun eksempler).",
                    sub: ["h1", "header", "article", "main", "nav", "img", "a", "p", "div", "span", "ul", "ol", "table"]
                }
            },
            {
                english: {
                    main: "HTML links",
                    description: "describe linking of documents (files) in HTML.",
                    sub: ["relative and absolute links", "links to sections (fragments)"]
                },
                norsk: {
                    main: "HTML lenker",
                    description: "beskriv lenker til dokumenter (filer) i HTML.",
                    sub: ["relative og absolutte lenker", "lenker til seksjoner (fragmenter)"]
                }
            },
            {
                english: {
                    main: "Text markup",
                    description: "describe principles and give some examples of text markup (bold, italic, subscript, etc).",
                    sub: []
                },
                norsk: {
                    main: "Tekstmarkering",
                    description: "beskriv prinsipper og gi eksempler of tekstmarkering (bold, italic, subscript, osv).",
                    sub: []
                }
            },
            {
                english: {
                    main: "Images",
                    description: "image preparation and characteristics of a good image.",
                    sub: []
                },
                norsk: {
                    main: "Bilder",
                    description: "forberedelse av bilder og kjennetegn av et godt bilde.",
                    sub: []
                }
            },
            {
                english: {
                    main: "Images",
                    description: "technical aspects.",
                    sub: ["Resolution", "Raster and vector graphics", "SVG image format", "Transparency"]
                },
                norsk: {
                    main: "Bilder",
                    description: "tekniske aspekter.",
                    sub: ["Oppløsning", "Raster- og vektorgrafikk", "SVG bildeformat", "Gjennomsiktighet (transparency)"]
                }
            },
            {
                english: {
                    main: "Images in HTML",
                    description: "use of images in webpages.",
                    sub: ["How to include images?", "Responsive images", "Popular image file formats for websites"]
                },
                norsk: {
                    main: "Bilder i HTML",
                    description: "bruk av bilder i websider.",
                    sub: ["Hvordan inkluderer man bilder?", "Responsive bilder", "Populære filformater for bilder til websider"]
                }
            },
            {
                english: {
                    main: "Tables",
                    description: "tabular data display in HTML.",
                    sub: []
                },
                norsk: {
                    main: "Tabeller",
                    description: "visning av tabulær data i HTML.",
                    sub: []
                }
            },
        ]
    },
    css: {
        categoryName: "CSS",
        questions: [
            {
                english: {
                    main: "CS",
                    description: "describe the purpose and use of CSS.",
                    sub: ["Connection between HTML and CSS", "How to include CSS in HTML documents",
                        "How to set style for one, specific element?",
                        "How to set style for a set of elements?"]
                },
                norsk: {
                    main: "CSS",
                    description: "hensinkt og bruk.",
                    sub: ["Sammenheng mellom HTML og CSS", "Hvordan inkludere CSS i HTML dokumenter?",
                        "Hvordan sette stil for et konkret element?",
                        "Hvordan sette stil for alle elementer i et sett?"]
                }
            },
            {
                english: {
                    main: "Size units",
                    description: "absolute and relative.",
                    sub: []
                },
                norsk: {
                    main: "Størrelsesenheter",
                    description: "absolute og relative.",
                    sub: []
                }
            },
            {
                english: {
                    main: "HTML forms",
                    description: "",
                    sub: ["Form elements", "Sending data with HTML forms"]
                },
                norsk: {
                    main: "HTML forms",
                    description: "",
                    sub: ["Form-elementer", "Dataoverføring med HTML forms"]
                }
            },
            {
                english: {
                    main: "Text formatting",
                    description: "with CSS.",
                    sub: []
                },
                norsk: {
                    main: "Formattering av tekst",
                    description: "med CSS.",
                    sub: []
                }
            },
            {
                english: {
                    main: "Colors",
                    description: "foreground and background.",
                    sub: []
                },
                norsk: {
                    main: "Farger",
                    description: "foreground and background.",
                    sub: []
                }
            },
            {
                english: {
                    main: "The box model",
                    description: "describe the box model.",
                    sub: ["Content size", "Padding", "Margin", "Border"]
                },
                norsk: {
                    main: "Boksmodellen",
                    description: "beskriv boksmodellen.",
                    sub: ["Content size", "Padding", "Margin", "Border"]
                }
            },
            {
                english: {
                    main: "CSS Flexbox",
                    description: "describe the main features and usage areas of flexbox.",
                    sub: []
                },
                norsk: {
                    main: "CSS Flexbox",
                    description: "beskriv hovedfunksjonene og bruksområdene til flexbox.",
                    sub: []
                }
            },
            {
                english: {
                    main: "CSS Grid",
                    description: "describe the main features and usage areas of CSS grid.",
                    sub: []
                },
                norsk: {
                    main: "CSS Grid",
                    description: "beskriv hovedfunksjonene og bruksområdene til CSS grid.",
                    sub: []
                }
            },
            {
                english: {
                    main: "Holy-grail layout",
                    description: "what is it? How could we create it for a website?",
                    sub: []
                },
                norsk: {
                    main: "Holy-grail layout",
                    description: "hva er det? Hvordan kan man få det til for en webside?",
                    sub: []
                }
            },
            {
                english: {
                    main: "Responsive webdesign",
                    description: "describe the main principles and example techniques of responsive webdesign.",
                    sub: []
                },
                norsk: {
                    main: "Responsivt webdesign",
                    description: "beskriv hovedprinsipper og eksempelteknikker i responsiv webdesign.",
                    sub: []
                }
            },
        ]
    },
    js: {
        categoryName: "Javascript",
        questions: [

        ]
    },
    react: {
        categoryName: "Frameworks and React",
        questions: [

        ]
    },
};
