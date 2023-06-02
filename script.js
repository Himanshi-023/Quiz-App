const quizDB = [
  //array of  an object
  {
    question: "Q1: what is the full form of HTML?",
    a: "hyper text markup language ",
    b: "hype text makeup language ",
    c: "none of these ",
    d: "hypertext markup language ",
    ans: "ans4",
  },
  {
    question: "Q2: Which of the following can read and render HTML web pages",
    a: "server ",
    b: "head task ",
    c: "web browser ",
    d: " empty ",
    ans: "ans3",
  },
  {
    question: "Q3: Identify the range of byte data types in JavaScript?",
    a: "-10 to 9 ",
    b: "-128 to 127 ",
    c: "-32768 to 32767 ",
    d: "none ",
    ans: "ans2",
  },
  {
    question: "Q4:The latest HTML standard is?",
    a: "HTML 4.0 ",
    b: "HTML 5.0 ",
    c: "XML ",
    d: " SGML",
    ans: "ans2",
  },
  {
    question: "Q5:Identify the incorrect HTML tag among the following?",
    a: "<input> ",
    b: "<select> ",
    c: "<list> ",
    d: "textArea ",
    ans: "ans3",
  },
  {
    question: "Q6: When is the body tag used?",
    a: " after FORM tag",
    b: "after Title tag ",
    c: " after EM tag ",
    d: "after HEAD tag ",
    ans: "ans4",
  },
];

const question = document.querySelector(".heading");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answers");
const showScore=document.querySelector("#showScore")
let questioncount = 0;
let score=0;


const loadQuestion = () => {
  const questionList = quizDB[questioncount];
  question.innerText = questionList.question;
  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};

loadQuestion();

const getCheckAnswer = () => { //yeh pta chl jayga ki user ne konsa option select kia h uski id mil jati h  ish function se
  let answer;
  Array.from (answers).forEach((curEleAnswer) => {
    if (curEleAnswer.checked) 
    {
      answer = curEleAnswer.id;
    }

   
  });
  return answer;
};


submit.addEventListener("click", () => {
  const checkAnswer = getCheckAnswer();
  console.log(checkAnswer);
  if (checkAnswer == quizDB[questioncount].ans )
  { 
    score++
  };

questioncount++;

  if (questioncount < quizDB.length)
{
    loadQuestion();
  }
  else
  {

    showScore.innerHTML=`<h3 class="hii"> You Scored ${score}/${quizDB.length}🔥<h3/>
    <button class="btn"  onclick="location.reload()"> RESTART   <button/>`
    showScore.classList.remove('scoreArea');
  }



});
