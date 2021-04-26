import React from 'react';
import { Link } from 'react-router-dom';

function CardList({deck, cardDelete}) {
    const { cards } = deck;

    const formattedCards = cards.map((card) => (
        <tr key={card.id}>
            <td>{card.front}</td>
            <td>{card.back}</td>
            <td> <Link to={`/decks/${deck.id}/cards/${card.id}/edit`}
                    className="btn btn-secondary md-2"
                    title="Edit Card">
                    <span className="oi oi-pencil mr-2"/>Edit</Link>
                    <button className="btn btn-danger d-block mt-2" title="Delete Card">
                        <span className="oi oi-trash" onClick={() => cardDelete(card.id)} />
                    </button>
                    </td>
        </tr>
    ));

    return (
        <div className="mt-4">
            <h2>Cards</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th className="bg-dark text-light" scope="col">Front</th>
                        <th className="bg-dark text-light" scope="col">Back</th>
                        <th className="bg-dark text-light" scope="col" style={{width: "10%"}}>Options</th>
                    </tr>
                </thead>
                <tbody>
                {formattedCards}
                </tbody>
                
            </table>
        </div>
    );
}

export default CardList;