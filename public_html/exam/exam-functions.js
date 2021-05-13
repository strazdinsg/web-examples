// All the different functions for handling exam questions

window.addEventListener("load", displayExamQuestions);


function displayExamQuestions() {
    console.log("Loading exam questions...");
    getCategoryKeys().forEach((categoryKey, index) => displayQuestionCategory(index, categoryKey));
    hideQuestionLoading();
}

function hideQuestionLoading() {
    document.getElementById("questions-loading").remove();
}

function displayQuestionCategory(index, categoryKey) {
    const section = createCategorySection(categoryKey);
    section.appendChild(createCategoryHeading(index, categoryKey));
    section.appendChild(createQuestionTable(categoryKey));
    getAllQuestionContainer().appendChild(section);
}

function createCategorySection(categoryKey) {
    const section = document.createElement("section");
    section.id = `section-${categoryKey}`;
    return section;
}

function getCategoryName(categoryKey) {
    return questions[categoryKey].categoryName;
}

function createCategoryHeading(index, categoryKey) {
    const heading = document.createElement("h2");
    heading.innerText = `Section ${index + 1}: ${getCategoryName(categoryKey)}`;
    return heading;
}

function createQuestionTable(category) {
    const table = document.createElement("table");
    return table;
}

function getCategoryKeys() {
    return Object.keys(questions);
}

function getAllQuestionContainer() {
    return document.getElementById("all-exam-questions");
}
