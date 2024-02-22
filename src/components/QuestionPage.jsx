// importing React's useState and useEffect hooks, an array of questions, and the useNavigate hook from React Router DOM,
import { useState, useEffect } from 'react';
import questions from '../question';
import { useNavigate } from 'react-router-dom';

//functional React component QuestionPage, initializing state variables for the current question index, the current question object, the score and background color, respectively.
const QuestionPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];
  const [score, setScore] = useState(0);
  const nav = useNavigate();
  const [highlight, setHighlight] = useState('black');
  const [backgroundColor, setBackgroundColor] = useState(true);

  // cuseEffect hook invokes the Modes function, toggling the background color between #e1d9cc and black and updating the backgroundColor state accordingly.
  useEffect(() => {
    Modes();
  }, []);
  const Modes = () => {
    setBackgroundColor(!backgroundColor);
    if (backgroundColor) {
      document.body.style.backgroundColor = '#e1d9cc';
    } else {
      document.body.style.backgroundColor = 'black';
    }
  };

  // These functions handle highlighting by setting the highlight color to red and black respectively.
  const handleHighlight = () => {
    setHighlight('red');
  };

  const removeHighlight = () => {
    setHighlight('black');
  };

  // This function handles updating the score and moving to the next question or displaying the score page.
  const handleCorrectOrWrong = (TrueFalse) => {
    console.log(TrueFalse);

    if (currentQuestionIndex < 4 ) {
      if (TrueFalse == true) {
        setScore((prev) => prev + 1);
      }
    
      setCurrentQuestionIndex((prev) => prev + 1);
      console.log('this', currentQuestionIndex);
    } 
    else {
      console.log('Next page to show score');
      return nav(`/result/${score + 1 }`);
    }
  };
// creating body (HTML)
  return (
    <div>
      <div className="heading">
        <h1 className='kalvium'>Kalvium</h1>
        <button className="baground_button" onClick={Modes}>
          {backgroundColor == true ? 'Light' : 'Dark'}
        </button>
      </div>
      <div className="Main-quiz">
        <center>
          <h1 className="no">Question:{currentQuestionIndex + 1} out of 5</h1>
        </center>
        <center>
          <div className="quiz">
            <h2 style={{ color: highlight }} className='questions'>{currentQuestion.text}</h2>
            <div className="options-div">
              <div
                onClick={() =>
                  handleCorrectOrWrong(currentQuestion.options[0].isCorrect)
                }
                className="btn"
              >
                {currentQuestion.options[0].text}
              </div>
              <div
                onClick={() =>
                  handleCorrectOrWrong(currentQuestion.options[1].isCorrect)
                }
                className="btn"
              >
                {currentQuestion.options[1].text}
              </div>
              <div
                onClick={() =>
                  handleCorrectOrWrong(currentQuestion.options[2].isCorrect)
                }
                className="btn"
              >
                {currentQuestion.options[2].text}
              </div>
              <div
                onClick={() =>
                  handleCorrectOrWrong(currentQuestion.options[3].isCorrect)
                }
                className="btn"
              >
                {currentQuestion.options[3].text}
              </div>
            </div>

            <div className="options-3">
              <button className="highlight_Btn base" onClick={handleHighlight}>
                HighLight
              </button>
              &nbsp;
              <button
                className="remove_highlight base"
                onClick={removeHighlight}
              >
                Remove Highlight
              </button>
              &nbsp;
            </div>
          </div>
        </center>
      </div>
    </div>
  );
};

export default QuestionPage;
