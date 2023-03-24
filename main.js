// create async function to fetch data from API:
// write code that sends get request to open trivia API to retrieve data
// await response of the fetch call
// retrieve json data from the response
// await the json-formatted data from the response
// assign question variable to the question property of the data object
// assign answer variable to the correct_answer property of the data object
// replace id question with api question
// replace answer with api answer
// create a new "Generate New Question" button which runs the getQuestions function again

// add event listener to "Generate New Question" button


// add eventlistener to true and false buttons 
//  by using an if else statement to check if the answer is true or false.  
// compare box id clicked to answer from API at opentdb.com
// if the two match is true then display alert saying "correct"
// if the two match is false then display alert saying "incorrect"






async function getQuestions() {
    const response = await fetch('https://opentdb.com/api.php?amount=1&difficulty=easy&type=boolean');
    const data = await response.json();
    console.log(data);
    const question = data.results[0].question;
    console.log(question);
    document.querySelector('#question').innerHTML = question;
    console.log("#question");
    const answer = data.results [0].correct_answer;
    document.querySelector('#answer').innerHTML = answer;
    console.log(answer);
}
getQuestions();

const generateButton = document.querySelector('#newQ'); 
generateButton.addEventListener('click', getQuestions);