import React, {useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { readDeck, updateDeck } from "../utils/api";
import DeckForm from "./DeckForm";

function EditDeck() {
    const history = useHistory();
    const {deckId} = useParams();

    const [deck, setDeck] = useState({});

    useEffect(() => {
        readDeck(deckId).then(setDeck);
    }, [deckId]);

    function updateHandler(updatedDeck) {
        updateDeck(updatedDeck).then((newDeck) => history.push(`/decks/${newDeck.id}`));
    }

    function cancelHandler() {
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
					<li className='breadcrumb-item'>
						<Link to={`/decks/${deckId}`}>{deck.name}</Link>
					</li>
					<li className='breadcrumb-item active' aria-current='page'>
						Edit Deck
					</li>
				</ol>
			</nav>
			<h1>Edit Deck</h1>
			<DeckForm cancelHandler={cancelHandler} updateHandler={updateHandler} currentDeck={deck} mode="edit"/>
		</>
	); 
}

export default EditDeck;