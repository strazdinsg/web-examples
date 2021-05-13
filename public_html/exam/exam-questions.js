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
            }
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
