// importing React's useState and useEffect hooks
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

  //   // cuseEffect hook invokes the Modes function, toggling the background color between #e1d9cc and black and updating the backgroundColor state accordingly.
const Result = () => {
  const { id } = useParams();
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
  console.log(id)
  // // creating body (HTML)
  return (
    <div>
      <div className="heading">
        <h1 className='kalvium'>Kalvium</h1>
        <button className="baground_button second" onClick={Modes}>
          {backgroundColor == true ? 'Light' : 'Dark'}
        </button>
      </div>
      <center>
        <div className="results_page">
          <h1 className="final_head">Final Result</h1>
          <h2 className="score">
            {' '}
            {id} out of 5 correct-({(id / 5) * 100}%)
          </h2>
          <Link to={'/'}>
            <button className="highlight_Btn base">Restart game</button>
          </Link>
        </div>
      </center>
    </div>
  );
};

export default Result;
