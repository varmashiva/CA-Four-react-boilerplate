// importing files
import { useState, useEffect } from 'react';
import questions from '../question';
import { useNavigate } from 'react-router-dom';

const QuestionPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];
  const [score, setScore] = useState(0);
  const nav = useNavigate();
  const [highlight, setHighlight] = useState('black');
  const [backgroundColor, setBackgroundColor] = useState(true);

  useEffect(() => {
    Modes();
  }, []);
  const Modes = () => {
    setBackgroundColor(!backgroundColor);
    if (backgroundColor) {
      document.body.style.backgroundColor = '#e1d9cc';
      //
    } else {
      document.body.style.backgroundColor = 'black';
    }
  };

  const handleHighlight = () => {
    setHighlight('red');
  };

  const removeHighlight = () => {
    setHighlight('black');
  };

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
