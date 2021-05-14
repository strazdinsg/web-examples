// All the different functions for handling exam questions

window.addEventListener("load", loadAllQuestionData);

function loadAllQuestionData() {
    assignNumbersToQuestions();
    displayAllExamQuestions();
    displayCategoriesInExamSet();
    loadLanguageSelector();
    loadStudentQuestionSelector(getSelectedLanguage());
}

function assignNumbersToQuestions() {
    let number = 1;
    getQuestionCategoryKeys().forEach(categoryKey => {
        questions[categoryKey].questions.forEach(question => {
            question.number = number;
            languages.forEach(language => question[language.toLowerCase()].number = number);
            number++;
        });
    });
}

function displayAllExamQuestions() {
    console.log("Loading exam questions...");
    getQuestionCategoryKeys().forEach((categoryKey, index) => displayQuestionCategory(index, categoryKey));
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
    heading.innerText = `Category ${index + 1}: ${getCategoryName(categoryKey)}`;
    return heading;
}

function createTableHeadColumn(columnTitle) {
    const th = document.createElement("th");
    th.innerText = columnTitle;
    return th;
}

function createQuestionTable(categoryKey) {
    const table = createQuestionTableElement();
    table.appendChild(createQuestionTableHeading());
    table.appendChild(createQuestionTableBody(categoryKey));
    return table;
}

function createQuestionTableElement() {
    const table = document.createElement("table");
    table.classList.add("question-table");
    return table;
}

function createQuestionTableHeading() {
    const thead = document.createElement("thead");
    const headRow = document.createElement("tr");
    thead.appendChild(headRow);
    languages.forEach(language => headRow.appendChild(createTableHeadColumn(language)));
    return thead;
}

function createQuestionTableBody(categoryKey) {
    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");
    tbody.appendChild(tr);
    languages.forEach(language => tr.appendChild(createQuestionTableCell(categoryKey, language)));
    return tbody;
}

function createQuestionTableCell(categoryKey, language) {
    const cell = document.createElement("td");
    cell.appendChild(createQuestionList(categoryKey, language));
    return cell;
}

function createQuestionList(categoryKey, language) {
    const questionList = createQuestionListElement();
    getQuestions(categoryKey, language).forEach(question =>
        questionList.appendChild(createQuestionItem(question, language)));
    return questionList;
}

function createQuestionListElement() {
    const listElement = document.createElement("ol");
    listElement.classList.add("question-list");
    continueNumbering(listElement);
    return listElement;
}

function continueNumbering(questionList) {
    questionList.setAttribute("start", getNumberOfQuestionsOnPage() + 1);
}

function getAllQuestionElements() {
    return document.querySelectorAll(".question-list>li");
}

function getNumberOfQuestionsOnPage() {
    const allQuestionCount = getAllQuestionElements().length;
    return allQuestionCount / getNumberOfLanguages();
}

function getQuestions(categoryKey, language) {
    return takeQuestionsInLanguage(questions[categoryKey].questions, language);
}

function takeQuestionsInLanguage(questions, language) {
    return questions.map(question => {
        let q = question[language.toLowerCase()];
        inheritDifficultyFrom(q, question);
        return q;
    });
}

function inheritDifficultyFrom(questionInLanguage, question) {
    questionInLanguage.difficult = toBoolean(question.difficult);
}

function getSubQuestionTitle(language) {
    return subQuestionTitles[language.toLowerCase()];
}

function createQuestionItem(question, language) {
    const listItem = document.createElement("li");
    let difficultyMarker = "";
    if (question.difficult) {
        listItem.classList.add("difficult");
        difficultyMarker = "(Difficult!) ";
    }
    listItem.innerHTML = `<b>${difficultyMarker}${question.main}</b> - ${question.description}`;
    if (hasSubQuestions(question)) {
        listItem.innerHTML += " " + getSubQuestionTitle(language) + ":";
        listItem.appendChild(createSubQuestionList(question.sub));
    }
    return listItem;
}

function hasSubQuestions(question) {
    return question.sub && question.sub.length > 0;
}

function createSubQuestionList(subQuestions) {
    const list = document.createElement("ul");
    subQuestions.forEach(q => list.appendChild(createSubQuestionItem(q)));
    return list;
}

function createSubQuestionItem(subQuestion) {
    const li = document.createElement("li");
    li.innerText = subQuestion;
    return li;
}


function getQuestionCategoryKeys() {
    return Object.keys(questions);
}

function getAllQuestionContainer() {
    return document.getElementById("all-exam-questions");
}

function getNumberOfLanguages() {
    return languages.length;
}

function toBoolean(anyVar) {
    return !!anyVar;
}

function addCategoryRowToExamSetTable(categoryKey) {
    const tr = document.createElement("tr");
    tr.id = getExamSetRowId(categoryKey);
    tr.innerHTML = `<td>${getCategoryName(categoryKey)}</td><td></td><td></td>`;
    getExamSetTableBody().appendChild(tr);
}

function getExamSetRowId(categoryKey) {
    return "question-set-cat-" + categoryKey;
}

function displayCategoriesInExamSet() {
    clearAllContentOf(getExamSetTableBody());
    getQuestionCategoryKeys().forEach(categoryKey => addCategoryRowToExamSetTable(categoryKey));
}


function getExamSetTableBody() {
    return document.querySelector("#exam-question-set tbody");
}

function loadLanguageSelector() {
    const selector = document.getElementById("language-selector");
    clearAllContentOf(selector);
    languages.forEach(language => addSelectOption(selector, language, language.toLowerCase()));
}

function clearAllContentOf(htmlElement) {
    htmlElement.innerHTML = "";
}

function getSelectedLanguage() {
    return document.getElementById("language-selector").value;
}

function addSelectOption(selector, humanText, value) {
    const option = document.createElement("option");
    option.value = value;
    option.innerText = humanText;
    selector.appendChild(option);
}

function loadStudentQuestionSelector(language) {
    const selector = document.getElementById("question-selector");
    clearAllContentOf(selector);
    addSelectOption(selector, "Pick a question...", 0);
    getQuestionCategoryKeys().forEach(categoryKey => selector.appendChild(createSelectableCategory(categoryKey)));
}

function createSelectableCategory(categoryKey) {
    const optGroup = document.createElement("optgroup");
    optGroup.label = getCategoryName(categoryKey);
    getQuestions(categoryKey, getSelectedLanguage()).forEach(question => optGroup.appendChild(createQuestionOption(question)));
    return optGroup;
}

function createQuestionOption(question) {
    const option = document.createElement("option");
    option.innerText = `${question.number}. ${question.main}`;
    option.value = question.number;
    return option;
}
