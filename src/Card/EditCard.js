import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { readCard, readDeck, updateCard } from '../utils/api';
import CardForm from './CardForm';

function EditCard() {
    const { deckId, cardId } = useParams();
    const history = useHistory();

    const [deck, setDeck] = useState({card: []});
    const [card, setCard] = useState({front: "", back: ""});

    useEffect(() => {
        readDeck(deckId).then(setDeck);
        readCard(cardId).then(setCard);
    }, [deckId, cardId]);

    function doneHandler() {
        history.push(`/decks/${deck.id}`);
    }

    function updateHandler(card) {
        updateCard(card).then(doneHandler);
    }

    return card.id ? (
        <>
        <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
                <Link to='/'>
                    <span className='oi oi-home' /> Home
                </Link>
            </li>
            <li className='breadcrumb-item'>
                <Link to={`/decks/${deckId}`}>Deck {deck.name}</Link>
            </li>
            <li className='breadcrumb-item active' aria-current='page'>
                Edit Card {cardId}
            </li>
        </ol>
    </nav>
    <h2>Edit Card</h2>
    <CardForm deck={deck} putHandler={updateHandler} doneHandler={doneHandler} currentCard={card}/>
    </>
    ) : (
        <div>
        <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
                <Link to='/'>
                    <span className='oi oi-home' /> Home
                </Link>
            </li>
            <li className='breadcrumb-item'>
                <Link to={`/decks/${deckId}`}>Deck {deck.name}</Link>
            </li>
            <li className='breadcrumb-item active' aria-current='page'>
                Edit Card {cardId}
            </li>
        </ol>
    </nav>
    <h2>Edit Card</h2>
    <p>Loading card...</p>
    </div>
    )


}

export default EditCard;