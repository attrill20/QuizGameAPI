// create async function to fetch data from API:
// write code that sends get request to open trivia API to retrieve data
// await response of the fetch call
// retrieve json data from the response
// await the json-formatted data from the response
// assign question variable to the question property of the data object
// assign answer variable to the correct_answer property of the data object
// console log the question and answer

async function getQuestions() {
    const response = await fetch('https://opentdb.com/api.php?amount=1&difficulty=easy&type=boolean');
    const data = await response.json();
    console.log(data);
    const question = data.results[0].question;
    console.log(question);
    const answer = data.results [0].correct_answer;
    console.log(answer);
}
getQuestions();