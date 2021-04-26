import React, {useState} from 'react';

function CardForm({deck, putHandler, doneHandler, currentCard = {front:"Front side of card", back: "Back side of card"}}) {
   const [card, setCard] = useState({...currentCard});
 
   const inputHandler = (event) => {
       setCard({...card, [event.target.name]: event.target.value});
   }

   function submitHandler(event) {
     event.preventDefault();
     putHandler(card);
     setCard({front: "", back: ""});
   }

   return (
    <form onSubmit={submitHandler} className='card-form'>
    <fieldset>
        <legend>{deck.name}: Add Card</legend>

        <div className='form-group'>
            <label htmlFor='front'>Front</label>
            <textarea
                id='front'
                name='front'
                className='form-control'
                required={true}
                placeholder={card.front}
                value={card.front}
                onChange={inputHandler}
            />
        </div>
        <div className='form-group'>
            <label htmlFor='back'>Back</label>
            <textarea
                id='back'
                name='back'
                className='form-control'
                required={true}
                placeholder={card.back}
                value={card.back}
                onChange={inputHandler}
            />
        </div>

        <button
            className='btn btn-secondary mr-2'
            onClick={doneHandler}
            tabIndex='4'>
            Done
        </button>
        <button type='submit' className='btn btn-primary'>
            Save
        </button>
    </fieldset>
   </form>
   );
}

export default CardForm;