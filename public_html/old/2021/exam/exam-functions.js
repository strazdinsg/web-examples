// All the different functions for handling exam questions

window.addEventListener("load", loadAllQuestionData);

// This function is the high-level entry-point for all the functions. Start reading here if you want to track specific code!
function loadAllQuestionData() {
  assignNumbersToQuestions();
  assignCategoriesToQuestions();
  displayAllExamQuestions();
  displayCategoriesInExamSet();
  loadLanguageSelector();
  loadStudentQuestionSelector();
  setupEventHandlers();
}

function assignNumbersToQuestions() {
  const allQuestions = getQuestionsFromAllCategories();
  allQuestions.forEach((question, index) => {
    question.number = index + 1;
    languages.forEach(
      (language) => (question[language.toLowerCase()].number = index + 1)
    );
  });
}

function assignCategoriesToQuestions() {
  getQuestionCategoryKeys().forEach((categoryKey) => {
    questions[categoryKey].questions.forEach(
      (question) => (question.category = categoryKey)
    );
  });
}

function displayAllExamQuestions() {
  console.log("Loading exam questions...");
  getQuestionCategoryKeys().forEach((categoryKey, index) =>
    displayQuestionCategory(index, categoryKey)
  );
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
  languages.forEach((language) =>
    headRow.appendChild(createTableHeadColumn(language))
  );
  return thead;
}

function createQuestionTableBody(categoryKey) {
  const tbody = document.createElement("tbody");
  const tr = document.createElement("tr");
  tbody.appendChild(tr);
  languages.forEach((language) =>
    tr.appendChild(createQuestionTableCell(categoryKey, language))
  );
  return tbody;
}

function createQuestionTableCell(categoryKey, language) {
  const cell = document.createElement("td");
  cell.appendChild(createQuestionList(categoryKey, language));
  return cell;
}

function createQuestionList(categoryKey, language) {
  const questionList = createQuestionListElement();
  getQuestions(categoryKey, language).forEach((question) =>
    questionList.appendChild(createQuestionItem("li", question, language))
  );
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
  return questions.map((question) => {
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

function createQuestionItem(nodeType, question, language) {
  const questionElement = document.createElement(nodeType);
  if (question.difficult) {
    questionElement.classList.add("difficult");
  }
  questionElement.innerHTML = `<b>${getQuestionTitleAndDifficulty(
    question
  )}</b> - ${question.description}`;
  if (hasSubQuestions(question)) {
    questionElement.innerHTML += " " + getSubQuestionTitle(language) + ":";
    questionElement.appendChild(createSubQuestionList(question.sub));
  }
  return questionElement;
}

function getQuestionTitleAndDifficulty(question) {
  return (question.difficult ? "(Difficult!) " : "") + question.main;
}

function hasSubQuestions(question) {
  return question.sub && question.sub.length > 0;
}

function createSubQuestionList(subQuestions) {
  const list = document.createElement("ul");
  subQuestions.forEach((q) => list.appendChild(createSubQuestionItem(q)));
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

function getExamSetRowForCategory(categoryKey) {
  return document.getElementById(getExamSetRowId(categoryKey));
}

function displayCategoriesInExamSet() {
  clearAllContentOf(getExamSetTableBody());
  getQuestionCategoryKeys().forEach((categoryKey) =>
    addCategoryRowToExamSetTable(categoryKey)
  );
}

function getExamSetTableBody() {
  return document.querySelector("#exam-question-set tbody");
}

function loadLanguageSelector() {
  const selector = document.getElementById("language-selector");
  clearAllContentOf(selector);
  languages.forEach((language) =>
    addSelectOption(selector, language, language.toLowerCase())
  );
}

function clearAllContentOf(htmlElement) {
  htmlElement.innerHTML = "";
}

function getLanguageSelector() {
  return document.getElementById("language-selector");
}

function getSelectedLanguage() {
  return getLanguageSelector().value;
}

function addSelectOption(selector, humanText, value) {
  const option = document.createElement("option");
  option.value = value;
  option.innerText = humanText;
  selector.appendChild(option);
}

function getStudentQuestionSelector() {
  return document.getElementById("question-selector");
}

function loadStudentQuestionSelector() {
  const selector = getStudentQuestionSelector();
  clearAllContentOf(selector);
  addSelectOption(selector, "Pick a question...", 0);
  getQuestionCategoryKeys().forEach((categoryKey) =>
    selector.appendChild(createSelectableCategory(categoryKey))
  );
}

function createSelectableCategory(categoryKey) {
  const optGroup = document.createElement("optgroup");
  optGroup.label = getCategoryName(categoryKey);
  getQuestions(categoryKey, getSelectedLanguage()).forEach((question) =>
    optGroup.appendChild(createQuestionOption(question))
  );
  return optGroup;
}

function createQuestionOption(question) {
  const option = document.createElement("option");
  const difficultyRemark = question.difficult ? " (Difficult!)" : "";
  option.innerText = `${question.number}. ${question.main}${difficultyRemark}`;
  option.value = question.number;
  return option;
}

function setupEventHandlers() {
  getLanguageSelector().addEventListener("change", loadStudentQuestionSelector);
  document
    .getElementById("roll-exam-dice")
    .addEventListener("click", showRandomQuestions);
}

function showRandomQuestions() {
  let chosenQuestions = [];
  chosenQuestions.push(getStudentChosenOrRandomQuestion());
  const remainingCategories = getCategoriesExcept(chosenQuestions[0].category);
  remainingCategories.forEach((categoryKey) =>
    chosenQuestions.push(pickRandomEasyQuestionFromCategory(categoryKey))
  );
  chosenQuestions.forEach((question) => showChosenQuestion(question));
}

function getStudentChosenOrRandomQuestion() {
  const result = getStudentChosenQuestion();
  return result ? result : getRandomQuestion();
}

function getStudentChosenQuestion() {
  return getQuestionByNumber(getStudentQuestionSelector().value);
}

function getQuestionByNumber(number) {
  const allQuestions = getQuestionsFromAllCategories();
  return number > 0 && number <= allQuestions.length
    ? allQuestions[number - 1]
    : null;
}

function getQuestionsFromAllCategories() {
  let allQuestions = [];
  getQuestionCategoryKeys().forEach((categoryKey) =>
    allQuestions.push(...questions[categoryKey].questions)
  );
  return allQuestions;
}

function getRandomQuestion() {
  let allQuestions = getQuestionsFromAllCategories();
  return allQuestions[getRandomIntInclusive(0, allQuestions.length - 1)];
}

// Code from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getCategoriesExcept(unwantedCategoryKey) {
  return getQuestionCategoryKeys().filter(
    (categoryKey) => categoryKey !== unwantedCategoryKey
  );
}

function pickRandomEasyQuestionFromCategory(category) {
  const availableQuestions = getEasyQuestionsFromCategory(category);
  const randomIndex = getRandomIntInclusive(0, availableQuestions.length - 1);
  return availableQuestions[randomIndex];
}

function getEasyQuestionsFromCategory(categoryKey) {
  return questions[categoryKey].questions.filter((q) => !q.difficult);
}

function getQuestionSetColumn(category, columnNumber) {
  return getExamSetRowForCategory(category).querySelector(
    `td:nth-child(${columnNumber})`
  );
}

function showChosenQuestion(question) {
  getQuestionSetColumn(question.category, 2).innerText = question.number;
  const contentColumn = getQuestionSetColumn(question.category, 3);
  clearAllContentOf(contentColumn);
  const language = getSelectedLanguage();
  contentColumn.appendChild(
    createQuestionItem("div", question[language], language)
  );
}
