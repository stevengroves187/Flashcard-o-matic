import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { createCard, readDeck } from '../utils/api';
import CardForm from './CardForm';

function CreateCard() {
    const [deck, setDeck] = useState({cards: []});
    const history = useHistory();
    const {deckId} = useParams();

    useEffect(() => {
       readDeck(deckId).then(setDeck);
    },[deckId]);

    function createHandler(card) {
        createCard(deckId, card);
    }

    function doneHandler() {
        history.push(`/decks/${deckId}`);
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
                    Add Card
                </li>
            </ol>
        </nav>
        <CardForm deck={deck} putHandler={createHandler} doneHandler={doneHandler} mode="create"/>
        </>
    );

}

export default CreateCard;