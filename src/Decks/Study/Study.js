import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { readDeck } from '../../utils/api';
import StudyCard from './StudyCard';

function Study() {
    const [deck, setDeck] = useState({name:"", cards: []});
    const [cardNumber, setCardNumber] = useState(1);
    const { deckId } = useParams();
    const history = useHistory();
    
    function getDeck() {
        readDeck(deckId).then(setDeck);
    }

    useEffect(getDeck,[deckId]);

    function nextCard() {
      if (cardNumber === deck.cards.length) {
          const confirmed = window.confirm(
              "Restart cards?  Click 'cancel' to return to the home page."
          );
          return confirmed ? setCardNumber(1) : history.push("/");
      }
    setCardNumber(cardNumber+1);
    };

    const card = deck.cards[cardNumber - 1];
    const cardTitle = `Card ${cardNumber} of ${deck.cards.length}`;

    return deck.cards.length <= 2 ? (
        <main className='container study-page'>
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
                    Study
                </li>
            </ol>
        </nav>
        <h1>Study: {deck.name}</h1>
		<h3>Not enough cards.</h3>
		<p>	You need at least 3 cards to study. There are {deck.cards.length} cards in this
				deck.</p>
			<Link to={`/decks/${deckId}/cards/new`} className='btn btn-primary'>
				<span className='oi oi-plus' /> Add Cards
			</Link>
    </main> 
    ) : (
      <main className='container study-page'>
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
                    Study
                </li>
            </ol>
        </nav>
        <h1> Study: {deck.name} </h1>
          <StudyCard card={card} title={cardTitle} nextHandler={nextCard}/>

        </main> 
    );
}

export default Study;