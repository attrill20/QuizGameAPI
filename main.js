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

// scoreboard
// ends after you get 3 questions incorrect (3 lives)
// styling design




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

const trueButton = document.querySelector('#true');
trueButton.addEventListener('click', alertFunction);

const falseButton = document.querySelector('#false');
falseButton.addEventListener('click', alertFunction);



// we want this function below to run when the true or false button is clicked
// we want to compare the 'value' of the button clicked to the answer from the API
// if the two match then display alert saying "correct"
// if the two don't match then display alert saying "incorrect"

function alertFunction() {
    if (this.value === document.querySelector('#answer').innerHTML) {
        alert('Correct!');
    } else {
        alert('Incorrect!');
    }
}
    // hide the answer on the page
    document.querySelector('#answer').style.display = 'none';

