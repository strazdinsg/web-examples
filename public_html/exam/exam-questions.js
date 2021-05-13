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
                    description: "describe the box model and the difference between inline and block elements.",
                    sub: []
                },
                norsk: {
                    main: "Block og inline elementer",
                    description: "beskrive boksmodellen og forskjell mellom block og inline elementer.",
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
