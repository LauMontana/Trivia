import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Lost from "./componentes/Lost";
import Trivia from "./componentes/Trivia";
import Timer from "./componentes/Timer";
import Start from "./componentes/Start";

function App() {
  const [userName, setUserName] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("0 Points");
 


  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Radcliffe",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "How long is an Olympic swimming pool (in meters)?",
      answers: [
        {
          text: "25 meters",
          correct: false,
        },
        {
          text: "50 meters",
          correct: true,
        },
        {
          text: "75 meters",
          correct: false,
        },
        {
          text: "20 meters",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which country do cities of Perth, Adelade & Brisbane belong to?",
      answers: [
        {
          text: "Germany",
          correct: false,
        },
        {
          text: "Italy",
          correct: false,
        },
        {
          text: "Japan",
          correct: false,
        },
        {
          text: "Australia",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "Which animal can be seen on the Porsche logo?",
      answers: [
        {
          text: "Horse",
          correct: true,
        },
        {
          text: "Eagle",
          correct: false,
        },
        {
          text: "Cat",
          correct: false,
        },
        {
          text: "Dog",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "What is the name of the largest ocean on earth?",
      answers: [
        {
          text: "Atlantic Ocean",
          correct: false,
        },
        {
          text: "Indian Ocean",
          correct: false,
        },
        {
          text: "Artic Ocean",
          correct: false,
        },
        {
          text: "Pacific Ocean",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "Demolition of the Berlin wall separating East and West Germany began in what year?",
      answers: [
        {
          text: "1984",
          correct: false,
        },
        {
          text: "1992",
          correct: false,
        },
        {
          text: "1989",
          correct: true,
        },
        {
          text: "1980",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "What is cynophobia?",
      answers: [
        {
          text: "Fear of darkness",
          correct: false,
        },
        {
          text: "Fear of bacteria",
          correct: false,
        },
        {
          text: "Fears related to blood",
          correct: false,
        },
        {
          text: "Fear of dogs",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "What is the name of the man who launched eBay back in 1995?",
      answers: [
        {
          text: "Pierre Omidyar",
          correct: true,
        },
        {
          text: "Elon Musk",
          correct: false,
        },
        {
          text: "Sundar Pichai",
          correct: false,
        },
        {
          text: "Tim Cook",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Which monarch officially made Valentine's Day a holiday in 1537?",
      answers: [
        {
          text: "Elizabeth I",
          correct: false,
        },
        {
          text: "Luis XI",
          correct: false,
        },
        {
          text: "Henry VIII",
          correct: true,
        },
        {
          text: "Peter II",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Which country consumes the most chocolate per capita?",
      answers: [
        {
          text: "Germany",
          correct: false,
        },
        {
          text: "Switzerland",
          correct: true,
        },
        {
          text: "Italy",
          correct: false,
        },
        {
          text: "France",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Which country won the first-ever soccer World Cup in 1930?",
      answers: [
        {
          text: "Uruguay",
          correct: true,
        },
        {
          text: "Argentina",
          correct: false,
        },
        {
          text: "Brasil",
          correct: false,
        },
        {
          text: "Italy",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "What was the first toy to be advertised on television?",
      answers: [
        {
          text: "Barbie",
          correct: false,
        },
        {
          text: "LEGO",
          correct: false,
        },
        {
          text: "Mr. Potato Head",
          correct: true,
        },
        {
          text: "Rubik’s Cube",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Who was the first gymnast to score a perfect 10 score?",
      answers: [
        {
          text: "Surya Bonaly",
          correct: false,
        },
        {
          text: "Margarita Mamun",
          correct: false,
        },
        {
          text: "Simone Biles",
          correct: false,
        },
        {
          text: "Nadia Comaneci",
          correct: true,
        },
      ],
    },
    {
      id: 16,
      question: "What country has the most natural lakes?",
      answers: [
        {
          text: "Iceland",
          correct: false,
        },
        {
          text: "Finland",
          correct: false,
        },
        {
          text: "Canada",
          correct: true,
        },
        {
          text: "Norway",
          correct: false,
        },
      ],
    },
  ];

  const listaPuntos = useMemo(() =>
    [
      { id: 1, amount: " 100 " },
      { id: 2, amount: " 200 " },
      { id: 3, amount: " 300 " },
      { id: 4, amount: " 500 " },
      { id: 5, amount: " 1000 " },
      { id: 6, amount: " 2000 " },
      { id: 7, amount: " 4000 " },
      { id: 8, amount: " 8000 " },
      { id: 9, amount: " 16000 " },
      { id: 10, amount: " 25000 " },
      { id: 11, amount: " 32000 " },
      { id: 12, amount: " 64000 " },
      { id: 13, amount: " 125000 " },
      { id: 14, amount: " 250000 " },
      { id: 15, amount: " 500000 " },
      { id: 16, amount: " 1000000 " },
    ].reverse(),
  []);

  useEffect(() => {
    questionNumber > 1 && setEarned(listaPuntos.find( m => m.id === questionNumber - 1).amount);
  },[listaPuntos, questionNumber]);

  return (
    <div className="App">
      {userName ? (<>
        <div className="main">
        
        {stop ? ( <div className=" window-container"> 
        <div className="container-elements"> 
        <Lost/> 
        <h1>You earned: {earned}</h1>
        <button  onClick={() => window.open("./componentes/Start.jsx")}> Try again  </button>
        </div>
      
        </div>)  : ( 
          <> 
      <div className="top">
        <div className="timer">
          <Timer setStop={setStop}  questionNumber={questionNumber}/>
        </div>
      </div>
      <div className="bottom"> 
      <Trivia 
      data={data} 
      setStop={setStop} 
      questionNumber={questionNumber}
      setQuestionNumber={setQuestionNumber}
      /> 
      </div>
      </>
      )}
      </div>
      <div className="puntos">
        <ul className="lista-puntos">
          {listaPuntos.map((m) => (
            <li
              className={
                questionNumber === m.id
                  ? "item-lista-puntos active"
                  : "item-lista-puntos"
              }
            >
              <span className="item-lista-puntos-nivel"> {m.id} </span>
              <span className="item-lista-puntos-cantidad">
                {m.amount} <sub>pts</sub>
              </span>
            </li>
          ))}
        </ul>
      </div>
      </>
      ): ( <Start setUserName={setUserName}/>
      )}
      
    </div>
  );
}

export default App;
