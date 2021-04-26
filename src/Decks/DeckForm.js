import React, {useEffect, useState} from 'react';

function DeckForm({updateHandler, cancelHandler, currentDeck = {}, mode}) {
    const [deck, setDeck] = useState({name:"", description:""});
   
	useEffect(() => {
		setDeck({...currentDeck, name: `${currentDeck.name}`, description: `${currentDeck.description}`});
	}, [currentDeck])

    const inputHandler = (event) => {
       setDeck({...deck, [event.target.name]: event.target.value});
    }

    const submitHandler = (event) => {
        event.preventDefault();
        updateHandler(deck);
    }
    const namePlaceholder = mode==="create" ? "Deck Name" : currentDeck.name;
	const descriptionPlaceholder = mode==="create" ? "Deck Description" : currentDeck.description;

    return (Object.keys(currentDeck).length===0) ? (<p>Loading deck...</p>) : (
		<>
			<form onSubmit={submitHandler}>
				<fieldset>
					<div className='form-group'>
						<label htmlFor='name'>Name</label>
						<input
							type='text'
							id='name'
							name='name'
							className='form-control'
							required={true}
							placeholder={namePlaceholder}
							value={deck.name}
							onChange={inputHandler}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='description'>Description</label>
						<textarea
							id='description'
							name='description'
							className='form-control'
							rows='4'
							required={true}
							placeholder={descriptionPlaceholder}
							value={deck.description}
							onChange={inputHandler}
						/>
					</div>
					<button
						type='button'
						className='btn btn-secondary mr-2'
						onClick={cancelHandler}>
						Cancel
					</button>
					<button type='submit' className='btn btn-primary'>
						Submit
					</button>
				</fieldset>
			</form>
		</>
	);
}

export default DeckForm;