import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { createDeck } from '../utils/api';
import DeckForm from './DeckForm';

function CreateDeck() {
    const history = useHistory();

    const initialDeck = {name:"",description:""};
    
    function submitDeck(deck) {
        createDeck(deck).then((newDeck) => history.push(`/decks/${newDeck.id}`));
    }

    function cancel() {
        history.goBack();
    }

	return (
		<>
			<nav aria-label='breadcrumb'>
				<ol className='breadcrumb'>
					<li className='breadcrumb-item'>
						<Link to='/'>
							<span className='oi oi-home' /> Home
						</Link>
					</li>
					<li className='breadcrumb-item active' aria-current='page'>
						Create Deck
					</li>
				</ol>
			</nav>
			<h1>Create Deck</h1>
			<DeckForm cancelHandler={cancel} updateHandler={submitDeck} currentDeck={initialDeck} mode="create"/>
		</>
	);
}

export default CreateDeck;