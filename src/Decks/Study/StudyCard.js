import React, { useEffect, useState } from 'react';

function StudyCard({ card = {}, title, nextHandler, children}) {
  const [side, setSide] = useState("front");
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
      setSide("front");
      setFlipped(false);
}, [card]);

  function flipHandler() {
      switch(side){
        case "front": 
        setSide("back");
        break;
        case "back":
        setSide("front");
        break;
        default:
        break;
      }
      setFlipped(true);
  }

  return flipped ? (   
    <div className="card">
     <div className='card-body'>
      <h3 className='card-title'>{title}</h3>
      <p className='card-text'>{card[side]}</p>
      <button
          type='button'
          className='btn btn-secondary mr-2'
          onClick={flipHandler}>
          Flip
      </button>
      <button type='button' 
              className='btn btn-primary' 
              onClick={nextHandler}>
			Next
	  </button>
  </div>
 </div>
  ) : (
  <div className="card">
    <div className='card-body'>
        <h3 className='card-title'>{title}</h3>
        <p className='card-text'>{card[side]}</p>
        <button
            type='button'
            className='btn btn-secondary mr-2'
            onClick={flipHandler}>
            Flip
        </button>
    </div>
   </div>
  );
}

export default StudyCard;