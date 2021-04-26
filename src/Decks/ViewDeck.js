import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { deleteCard, deleteDeck, readDeck } from "../utils/api";
import CardList from "../Card/CardList";

function ViewDeck() {
  const history = useHistory();
  const { deckId } = useParams();
  const [deck, setDeck] = useState({ cards: [] });

  function getDeck() {
      readDeck(deckId).then(setDeck);
  }
  
  useEffect(getDeck, [deckId]);

  

  function deleteDeckHandler() {
    const confirmed = window.confirm(
      "Delete this deck? You will not be able to recover it."
    );
    if (confirmed) {
      deleteDeck(deck.id).then(() => history.push("/decks"));
    }
  }

  function deleteCardHandler(cardId) {
    const confirmed = window.confirm(
      "Delete this card? You will not be able to recover it."
    );
    if (confirmed) {
      deleteCard(cardId).then(getDeck);
    }
  }

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home" /> Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {deck.name}
          </li>
        </ol>
      </nav>
      <div className="card mt-2" style={{ width: "50rem" }}>
        <div className="card-body">
          <h2 className="card-title">{deck.name}</h2>
          <p className="card-text">{deck.description}</p>
          <Link to={`/decks/${deck.id}/edit`} className="btn btn-secondary mr-2" title="Edit">
            <span className="oi oi-pencil mr-2" />
            Edit
          </Link>
          <Link to={`/decks/${deck.id}/study`} className="btn btn-primary mr-2" title="Study">
            <span className="oi oi-book mr-2" />
            Study
          </Link>
          <Link to={`/decks/${deckId}/cards/new`} className='btn btn-primary'>
				<span className='oi oi-plus mr-1' /> Add Cards
			</Link>
          <button
            onClick={deleteDeckHandler}
            className="btn btn-danger float-right"
            title="Delete deck"
          >
            <span className="oi oi-trash" />
          </button>
        </div>
      </div>
      <CardList deck={deck} cardDelete={deleteCardHandler} />
    </>
  );
}

export default ViewDeck;
