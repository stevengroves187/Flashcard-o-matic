import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { deleteDeck, listDecks } from '../utils/api';

function Decks() {
  const [decks, setDecks] = useState([]);

 function getDecks() {
      listDecks().then(setDecks);
  }

  useEffect(getDecks, []);


function deleteHandler(deckId) {
    const confirmed = window.confirm("Delete this deck?  You will not be able to recover it.");
    if (confirmed) {
        deleteDeck(deckId).then(getDecks);
    }
}

const formattedDecks = decks.map((deck) => (
    <div key={deck.id} className="card mt-2" style={{width: "50rem"}}>
    <div className="card-body">
    <h2 className="card-title">{deck.name}</h2>
    <small className="card-subtitle mb-2 text-muted">{deck.cards.length} cards</small>
    <p className="card-text">{deck.description}</p>
    <Link to={`/decks/${deck.id}`} className="btn btn-secondary mr-2"><span className="oi oi-eye mr-2"/>View</Link>
    <Link to={`decks/${deck.id}/study`} className="btn btn-primary"><span className="oi oi-book mr-2"/>Study</Link>
    <button onClick={() => deleteHandler(deck.id)} className="btn btn-danger float-right" title="Delete deck"><span className="oi oi-trash"/></button>
  </div>
</div>
));

return (
    <>
        <Link to="/decks/new" className="btn btn-warning"><span className="oi oi-plus mr-2"/>Create Deck</Link>
    {formattedDecks}
    </>
);
}

export default Decks;